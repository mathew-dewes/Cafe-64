"use client"




import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlinks(){

    const pathName = usePathname();
    return (
        <ul className="flex gap-10 mr-50">
        <Link className={`${pathName == '/' ? "text-sky-300 font-semibold" : ""}`} href={'/'}>Home</Link>
        <Link className={`${pathName == '/menu' ? "text-sky-300 font-semibold" : ""}`} href={'/menu'}>Menu</Link>
<Link className={`${pathName == '/checkout' ? "text-sky-300 font-semibold" : ""}`} href={'/checkout'}>Checkout</Link>


 

    </ul>
    )
}