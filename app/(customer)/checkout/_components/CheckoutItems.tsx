"use client"

import { useCartStore } from "../../_hooks/cart-store";






export default function CheckoutItems(){
    const {items} = useCartStore();

        if ( items && items.length < 1){
            return
        }
    return (
        <div>
                      <h1 className="text-center md:text-left">Checkout</h1>

        <div className="mt-10 text-center md:text-left">
            <p className="text-lg font-semibold">Order items:</p>
            {items.map((item, key)=>{
                return (
                    <div className="md:mt-3 mt-3 w-fit flex flex-col gap-2 m-auto md:m-0" key={key}>
                        <div>
          <p>{item.size} {item.name} x {item.quantity} - ({item.milk} milk, {item.sugar} sugar) - ${item.price * item.quantity}</p>
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