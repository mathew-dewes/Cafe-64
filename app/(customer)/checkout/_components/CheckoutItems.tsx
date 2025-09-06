"use client"

import { useCartStore } from "../../_hooks/cart-store";






export default function CheckoutItems(){
    const {items} = useCartStore();

        if ( items && items.length < 1){
            return <p>Pies</p>
        }
    return (
        <div>
                      <h1 className="text-xl font-bold">Checkout</h1>
            <p className="mt-2">Please confirm your cart items and fill out your contact information to proceed</p>
        <div className="mt-10">
            <h1>Cart items:</h1>
            {items.map((item, key)=>{
                return (
                    <div className="mt-2 w-fit flex flex-col gap-2" key={key}>
                        <div>
          <p>{item.size} {item.name} x {item.quantity} - ({item.milk} milk, {item.sugar} sugar) - ${item.price * item.quantity}</p>
                    <hr className="mt-1" />
                        </div>
            
                    </div>
                )
            })}
           <div className="mt-5">
            <p>Subtotal: ${items.reduce((acc, item)=>{
                return acc + item.price * item.quantity
            }, 0)} </p>
           </div>

        </div>
        </div>

    )
}