"use client"




import Link from "next/link";
import Button from "@/ui/Button";
import { useCartStore } from "../../_hooks/cart-store";


export default function CartPreview(){
    const {items, removeItem, clearCart} = useCartStore();

    if (items.length < 1) return

    return (
        <div className="mt-10">
            <h1 className="font-bold text-xl">Cart preview:</h1>
            {items.map((item, key)=>{
                return (
                    <div className="mt-5 flex items-center gap-3" key={key}>
                        <p>{item.name} x {item.quantity} - ({item.milk} milk, {item.sugar} sugar) - ${item.price * item.quantity}</p>
                        <div>
                            <button onClick={()=>removeItem(item.id, item.milk, item.sugar)} className="flex gap-1 items-center mb-1 cursor-pointer hover:text-accent-500">

    <p className="mt-2 text-sm font-light">Remove</p>
                            </button>

                        </div>
                    
                  

                    </div>
                )
            })}
            <p className="mt-10">Total items: {items.reduce((acc, item)=>{
                return  item.quantity + acc
            }, 0)}</p>

            <p>Total Price: ${items.reduce((acc, item)=>{
                return acc + item.price * item.quantity
            }, 0)}</p>
            <div className="flex mt-5 gap-3">
                <Button onClick={()=>clearCart()} text="Clear"/>

        <Link href={'/checkout'}><Button text="Checkout"/></Link>
        
            </div>
          
        </div>
    )
}