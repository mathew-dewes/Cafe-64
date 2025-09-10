"use client"

import Link from "next/link";
import Navlinks from "../navigation/NavLinks";
import { HamburgerButton } from "../navigation/HamburgerButton";
import { useState } from "react";

export default function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
            <header className="flex justify-between items-center py-6 px-8 md:px-32 shadow-md">
          <Link href={'/'}><h3 id="logo" className="text-6xl font-medium hover:scale-105 transition-all">Cafe64</h3></Link>
         <Navlinks/>
         <HamburgerButton onClick={()=> setIsMenuOpen(!isMenuOpen)}/>
            <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col item-center gap-6 font-semibold text-lg
                transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                           <Link onClick={()=> setIsMenuOpen(!isMenuOpen)}  className="list-none w-full text-center p-4 hover:bg-accent-500 hover:text-white
                    transition-all cursor-pointer" href={'/'}>Home</Link>
                           <Link onClick={()=> setIsMenuOpen(!isMenuOpen)}  className="list-none w-full text-center p-4 hover:bg-accent-500 hover:text-white
                    transition-all cursor-pointer" href={'/menu'}>Menu</Link>
                           <Link onClick={()=> setIsMenuOpen(!isMenuOpen)}  className="list-none w-full text-center p-4 hover:bg-accent-500 hover:text-white
                    transition-all cursor-pointer" href={'/checkout'}>Checkout</Link>

            </div>
         
        </header>
    )
}