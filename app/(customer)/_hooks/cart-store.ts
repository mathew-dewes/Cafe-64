
import { Drink_size, Milk_type, Sugar_level } from "@/app/generated/prisma";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  id: string;   
  name: string;
  quantity: number;
  price: number;
  milk?: Milk_type;
  sugar?: Sugar_level;
  size?: Drink_size;
};

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, milk?:Milk_type, sugar?: Sugar_level, size?: Drink_size) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (newItem) =>
        set((state) => {
          const existing = state.items.find((i) => 
            i.id === newItem.id && 
            i.milk === newItem.milk &&
            i.sugar === newItem.sugar &&
            i.size === newItem.size 
          
          );

          if (existing) {
            return {
              items: state.items.map((i) =>
                i === existing ? 
              { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }

        return {
        items: [...state.items, { ...newItem, quantity: 1 }],
      };
        }),

      removeItem: (id, milk, sugar, size) =>
        set((state) => {
          const existing = state.items.find((i)=>
            i.id === id && i.milk === milk && i.sugar === sugar && i.size === size
          );

          if (!existing) return state;

          if (existing.quantity > 1){
            return {items: state.items.map((i)=>
              i === existing ? {...i, quantity: i.quantity - 1}: i
            )}
          }


             return {
            items: state.items.filter(
              (i) => !(i.id === id && i.milk === milk && i.sugar === sugar && i.size === size)
            ),
          };
        }),
      clearCart: () =>
        set(() => {
          return { items: [] };
        }),
    }),
    { name: "cart" }
  )
);