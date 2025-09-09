"use client"




import { useCartStore } from "@/app/(customer)/_hooks/cart-store";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlinks(){

    const pathName = usePathname();
    const { items } = useCartStore();
    const cartEmpty = items.length < 1
    
    return (
        <ul className="sm:flex gap-10 mr-50 hidden">
        <Link className={`${pathName == '/' ? "text-sky-300 font-semibold" : ""}`} href={'/'}>Home</Link>
        <Link className={`${pathName == '/menu' ? "text-sky-300 font-semibold" : ""}`} href={'/menu'}>Menu</Link>
        {!cartEmpty ? <Link className={`${pathName == '/checkout' ? "text-sky-300 font-semibold" : ""}`} href={'/checkout'}>Checkout</Link>:
        <p className="text-gray-500">Checkout</p>}

 

    </ul>
    )
}