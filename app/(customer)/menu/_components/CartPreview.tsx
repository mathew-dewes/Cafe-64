"use client"




import Link from "next/link";
import Button from "@/ui/Button";
import { useCartStore } from "../../_hooks/cart-store";


export default function CartPreview(){
    const {items, removeItem, clearCart} = useCartStore();

    

    if (items.length < 1) return (
        <div>
            <p className="text-center text-xl md:text-left font-semibold">Welcome to our new ordering system!</p>
            <p className="text-center md:text-left mt-2">Your cart is currently empty. Please add items from the list below to see them here</p>
        </div>
    )

    return (
        <div className="bg-[#4B352A] p-5 rounded-2xl text-white">
          <h2 className="text-center md:text-left">Cart</h2>
            <div className="flex flex-col gap-1 mt-2">
 {items.map((item, key)=>{
                return (
                    <div className="flex flex-col md:flex-row sm:items-center gap-3 py-3 rounded" key={key}>
                        <p><span className="font-semibold">{item.size} {item.name}</span> x {item.quantity} - ({item.milk} milk, {item.sugar} sugar) - ${item.price * item.quantity}</p>
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
                <Button onClick={()=>clearCart()} text="Clear" danger={true}/>

        <Link href={'/checkout'}><Button text="Checkout"/></Link>
        
            </div>
          
        </div>
    )
}