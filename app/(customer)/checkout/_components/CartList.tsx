"use client"

import { useCartStore } from "../../_hooks/cart-store";





export default function CartList(){
    const {items} = useCartStore();

    if (items.length < 1) return
    return(
        <div>
                 {items.map((item, key)=>{
                return (
                    <div className="mt-2 w-fit flex flex-col gap-2" key={key}>
                        <div>
          <p>{item.name} x {item.quantity} - ({item.milk} milk, {item.sugar} sugar) - ${item.price * item.quantity}</p>
                    <hr className="mt-1" />
                        </div>
            
                    </div>
                )
            })}
        </div>
    )
}