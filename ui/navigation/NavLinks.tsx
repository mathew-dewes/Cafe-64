"use client"




import { useCartStore } from "@/app/(customer)/_hooks/cart-store";
import Link from "next/link";
// import { usePathname } from "next/navigation";

export default function Navlinks(){

    // const pathName = usePathname();
    const { items } = useCartStore();
    const cartEmpty = items.length < 1
    
    return (
        <ul className="hidden xl:flex items-center gap-12  text-base">
        {/* <Link className={`${pathName == '/' ? "" : ""} `} href={'/'}>Home</Link> */}
        <Link className={"p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"} href={'/'}>Home</Link>
        <Link className={"p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"} href={'/menu'}>Menu</Link>
        {!cartEmpty ? <Link className={"p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"} href={'/checkout'}>Checkout</Link>:
        <p className={"p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"}>Checkout</p>}

 

    </ul>
    )
}