"use client"

import Link from "next/link";
import { HamburgerButton } from "../navigation/mobile/HamburgerButton";
import { useState } from "react";
import MobileMenuLinks from "../navigation/mobile/MobileMenuLinks";
import { auth } from "@/auth";
import { usePathname, useRouter } from "next/navigation";
import { useCartStore } from "@/app/(customer)/_hooks/cart-store";
import { signOut } from "@/lib/auth/auth-actions";


type Session = typeof auth.$Infer.Session;

export default function Navigation({ session }:
    { session: Session | null }
) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);
    const pathName = usePathname();
    const { items } = useCartStore();
    const cartEmpty = items.length < 1;
    const router = useRouter()

    const handleSignOut = async () => {
        await signOut();
        router.push("/dashboard/auth")

    }

    return (
        <header className="flex justify-between items-center py-6 px-8 lg:px-32 shadow-md">
            <Link onClick={closeMenu} href={'/'}><h3 id="logo" className="text-6xl font-medium hover:scale-105 transition-all">Cafe64</h3></Link>
            <ul className="hidden lg:flex items-center gap-12  text-base">
                <Link className={`p-2 rounded-md cursor-pointer transition-all duration-500 ease-in-out
    hover:text-accent-500 hover:font-bold 
            ${pathName == '/' ? "scale-105 font-bold text-accent-500" : "text-gray-700"}`} href={'/'}>Home</Link>
                <Link className={`p-2 rounded-md cursor-pointer transition-all duration-500 ease-in-out
    hover:text-accent-500 hover:font-bold 
            ${pathName == '/menu' ? "scale-105 font-bold text-accent-500" : "text-gray-700"}`} href={'/menu'}>Menu</Link>
                {session && <Link className={`p-2 rounded-md cursor-pointer transition-all duration-500 ease-in-out
    hover:text-accent-500 hover:font-bold 
            ${pathName.startsWith("/dashboard") ? "scale-105 font-bold text-accent-500" : "text-gray-700"}`} href={'/dashboard/analytics'}>Dashboard</Link>}

                {!cartEmpty ? <Link className={`p-2 rounded-md cursor-pointer transition-all duration-500 ease-in-out
    hover:text-accent-500 hover:font-bold  
            ${pathName == '/checkout' ? "scale-105 font-bold text-accent-500" : "text-gray-700"}`} href={'/checkout'}>Checkout</Link> :
                    <p className={"p-2 rounded-md transition-all text-base font-normal opacity-20"}>Checkout</p>}

                {session && <button onClick={handleSignOut} className={`p-2 rounded-md cursor-pointer transition-all duration-500 ease-in-out
    hover:text-accent-500 hover:font-bold `}>Signout</button>}





            </ul>
            <HamburgerButton onClick={() => setIsMenuOpen(prev => !prev)} />
            <MobileMenuLinks session={session} isMenuOpen={isMenuOpen} onClose={closeMenu} />

        </header>
    )
}