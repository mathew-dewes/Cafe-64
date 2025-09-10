"use client"

import { useCartStore } from "@/app/(customer)/_hooks/cart-store";
import Link from "next/link"

type ButtonProps = {
    isMenuOpen?: boolean,
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export default function MobileMenuLinks({isMenuOpen, onClick}:ButtonProps)
{
           const { items } = useCartStore();
           const cartEmpty = items.length < 1
    return (
         <div className={`p-5 absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col item-center gap-6 font-semibold text-lg shadow-lg
                transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                           <Link onClick={onClick}  className="list-none w-full text-center p-4 hover:bg-accent-500 hover:text-white
                    transition-all cursor-pointer" href={'/'}>Home</Link>
                           <Link onClick={onClick}  className="list-none w-full text-center p-4 hover:bg-accent-500 hover:text-white
                    transition-all cursor-pointer" href={'/menu'}>Menu</Link>
                    {!cartEmpty ?  <Link onClick={onClick}  className="list-none w-full text-center p-4 hover:bg-accent-500 hover:text-white
                    transition-all cursor-pointer" href={'/checkout'}>Checkout</Link> : 
                     <p className="w-full text-center p-4 rounded-md transition-all text-base font-normal opacity-20">Checkout</p> }
                          
             

            </div>
    )
}