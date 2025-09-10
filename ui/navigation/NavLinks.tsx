"use client"

import { useCartStore } from "@/app/(customer)/_hooks/cart-store";
import { authClient } from "@/server/auth/auth-client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navlinks(){
    const router = useRouter();
    const pathName = usePathname();
    const { items } = useCartStore();
    const { data: session } = authClient.useSession();
    const cartEmpty = items.length < 1;

    
     const handleLogout = async () => {
          await authClient.signOut();
          router.push('/');
     };
    
    return (
        <ul className="hidden lg:flex items-center gap-12  text-base">
        <Link className={`p-3 hover:bg-accent-500 hover:text-white rounded-md transition-all cursor-pointer 
            ${pathName == '/' ? "underline underline-offset-8 decoration-accent-500 decoration-3" : ""}`} href={'/'}>Home</Link>
        <Link className={`p-3 hover:bg-accent-500 hover:text-white rounded-md transition-all cursor-pointer 
            ${pathName == '/menu' ? "underline underline-offset-8 decoration-accent-500 decoration-3" : ""}`} href={'/menu'}>Menu</Link>

        {!cartEmpty ?        <Link className={`p-3 hover:bg-accent-500 hover:text-white rounded-md transition-all cursor-pointer 
            ${pathName == '/checkout' ? "underline underline-offset-8 decoration-accent-500 decoration-3" : ""}`} href={'/checkout'}>Checkout</Link>:
        <p className={"p-3 rounded-md transition-all text-base font-normal opacity-20"}>Checkout</p>}
        {session && 
        
       <button
                              onClick={handleLogout}
                              className="block w-full text-center p-3 hover:bg-accent-500 hover:text-white transition-all cursor-pointer rounded"
                         >
                              Logout
                         </button>
         }

 

    </ul>
    )
}