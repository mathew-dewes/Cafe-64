"use client"

import { useCartStore } from "../../_hooks/cart-store";






export default function CheckoutItems(){
    const {items} = useCartStore();

        if ( items && items.length < 1){
            return
        }
    return (
        <div>
                      <h1 className="text-2xl font-bold">Checkout</h1>

        <div className="mt-10">
            <p>Order items:</p>
            {items.map((item, key)=>{
                return (
                    <div className="mt-2 w-fit flex flex-col gap-2" key={key}>
                        <div>
          <p><b>{item.size} {item.name}</b> x {item.quantity} - ({item.milk} milk, {item.sugar} sugar) - ${item.price * item.quantity}</p>
                    <hr className="mt-1" />
                        </div>
            
                    </div>
                )
            })}
           <div className="mt-5">
            <p><b>Subtotal:</b> ${items.reduce((acc, item)=>{
                return acc + item.price * item.quantity
            }, 0)} </p>
           </div>

        </div>
        </div>

    )
}