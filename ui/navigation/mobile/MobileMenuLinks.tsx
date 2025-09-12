"use client"

import { useCartStore } from "@/app/(customer)/_hooks/cart-store";
import { auth } from "@/auth";
import { signOut } from "@/lib/auth/auth-actions";


import Link from "next/link"
import { usePathname, useRouter } from "next/navigation";

type Session = typeof auth.$Infer.Session;

type ButtonProps = {
     isMenuOpen: boolean;
     onClose: () => void;
     session: Session | null;
     
};


const dashboardRoutes = [
     {href:"/dashboard/analytics", text: "Analytics"},
     {href: "/dashboard/orders", text: "Orders"},
     {href: "/dashboard/products", text: "products"}
]






export default function MobileMenuLinks({ isMenuOpen, onClose, session }: ButtonProps) {

     const pathName = usePathname();
     const { items } = useCartStore();
     const cartEmpty = items.length < 1;
               const router = useRouter()

          const handleSignOut = async () =>{
                   await signOut();
                   onClose()
                   router.push("/dashboard/auth")
                   
               }
  



     return (
          <div className={`p-5 absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col item-center gap-6 font-semibold text-lg shadow-lg
                transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
               style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>
               <Link onClick={onClose} 
               className={`list-none w-full text-center p-4 hover:bg-accent-500 hover:text-white
                    transition-all cursor-pointer ${pathName == '/' ? "text-accent-500 font-bold" : ""}`} href={'/'}>Home</Link>
               <Link onClick={onClose} 
              className={`list-none w-full text-center p-4 hover:bg-accent-500 hover:text-white
                    transition-all cursor-pointer ${pathName == '/menu' ? "text-accent-500 font-bold" : ""}`} href={'/menu'}>Menu</Link>
               {!cartEmpty ? <Link onClick={onClose} 
                className={`list-none w-full text-center p-4 hover:bg-accent-500 hover:text-white
                    transition-all cursor-pointer ${pathName == '/checkout' ? "text-accent-500 font-bold" : ""}`} href={'/checkout'}>Checkout</Link> :
                    <p className="w-full text-center p-4 rounded-md transition-all text-base font-normal opacity-20">Checkout</p>}
                

                    {session && dashboardRoutes.map((route, key)=>{
                         return    <Link key={key} onClick={onClose} 
              className={`list-none w-full text-center p-4 hover:bg-accent-500 hover:text-white
                    transition-all cursor-pointer ${pathName == route.href ? "text-accent-500 font-bold" : ""}`} href={route.href}>{route.text}</Link>
                    })}

                    {session && <button  onClick={handleSignOut} 
              className={`list-none text-white w-full text-center bg-accent-500 rounded-xl p-4 hover:bg-accent-500 font-semibold
                    transition-all cursor-pointer`}>Logout</button>}

      
       

 




          </div>
     )
}