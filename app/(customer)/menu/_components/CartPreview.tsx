"use client"




import Link from "next/link";
import Button from "@/ui/Button";
import { useCartStore } from "../../_hooks/cart-store";


export default function CartPreview(){
    const {items, removeItem, clearCart} = useCartStore();

    if (items.length < 1) return (
        <div>
            <p>Welcome to our new ordering system!</p>
            <p>Your cart is currently empty. Please add items from the list below to see them here</p>
        </div>
    )

    return (
        <div className="bg-[#4B352A] p-5 rounded-2xl text-white">
          <h2 className="font-semibold">CART</h2>
            <div className="flex flex-col gap-1 mt-2">
 {items.map((item, key)=>{
                return (
                    <div className="flex items-center gap-3" key={key}>
                        <p><span className="font-semibold">{item.name}</span> x {item.quantity} - ({item.milk} milk, {item.sugar} sugar, size: {item.size}) - ${item.price * item.quantity}</p>
                        <div>
                            <button onClick={()=>removeItem(item.id, item.milk, item.sugar, item.size)} className="flex gap-1 items-center mb-1 cursor-pointer hover:text-accent-500">

    <p className="mt-1 text-sm font-light">Remove</p>
                            </button>

                        </div>
                    
                  

                    </div>
                )
            })}
            </div>
           
            <p className="mt-3"><b>Total items</b> x {items.reduce((acc, item)=>{
                return  item.quantity + acc
            }, 0)}</p>

            <p><span className="font-semibold">Total Price:</span> ${items.reduce((acc, item)=>{
                return acc + item.price * item.quantity
            }, 0)}</p>
            <div className="flex mt-5 gap-3">
                <Button onClick={()=>clearCart()} text="Clear"/>

        <Link href={'/checkout'}><Button text="Checkout"/></Link>
        
            </div>
          
        </div>
    )
}