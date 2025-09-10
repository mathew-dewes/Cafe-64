"use client"

import { useCartStore } from "@/app/(customer)/_hooks/cart-store";
import { authClient } from "@/server/auth/auth-client";
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation";



type ButtonProps = {
     isMenuOpen: boolean;
     onClose: () => void;
};

export default function MobileMenuLinks({ isMenuOpen, onClose }: ButtonProps) {

     const pathName = usePathname();
     const router = useRouter();
     const { items } = useCartStore();
     const cartEmpty = items.length < 1;
     const { data: session } = authClient.useSession();

     const handleLogout = async () => {
          await authClient.signOut();
          onClose();
          router.push('/');
     };

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
               {session &&
                    <div className="flex flex-col item-center gap-6">
                         <Link onClick={onClose} 
                      className={`list-none w-full text-center p-4 hover:bg-accent-500 hover:text-white
                    transition-all cursor-pointer ${pathName.startsWith("/dashboard") ? "text-accent-500 font-bold" : ""}`} href={'/dashboard'}>Dashboard</Link>
                       
                         <button
                              onClick={handleLogout}
                              className="block w-full text-center p-4 hover:bg-accent-500 hover:text-white transition-all cursor-pointer font-medium bg-accent-500 rounded text-white"
                         >
                              Logout
                         </button>
                    </div>
               }




          </div>
     )
}