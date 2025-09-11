import { Milk_type, OrderStatus, Sugar_level } from "@prisma/client";



export type OrderWithItems = {
  id: string,
    created_at: Date;
  orderNumber: string;
  status: OrderStatus;
  total_items: number;
  total_price: number;
  paymentMethod: string;
  paymentStatus: string
  customer?: { name: string | null } | null;
  order_items?: {
    id: string;
    quantity: number;
    price: number;
    milk_type: Milk_type;
    sugar_level: Sugar_level;
    product: { name: string };
  }[];
};

export type orderFilters = {
  value: string,
  text:string
}[]



type DropdownOption = {
    value: string;
    text: string;
};
export type FilterDropdownProps = {
    fields: DropdownOption[];
    name: string
    defaultValue: string

};