"use client"

import Link from "next/link";
import Navlinks from "../navigation/NavLinks";
import { HamburgerButton } from "../navigation/HamburgerButton";
import { useState } from "react";
import MobileMenuLinks from "../navigation/MobileMenuLinks";

export default function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);
      const closeMenu = () => setIsMenuOpen(false);
    return (
            <header className="flex justify-between items-center py-6 px-8 lg:px-32 shadow-md">
          <Link onClick={closeMenu} href={'/'}><h3 id="logo" className="text-6xl font-medium hover:scale-105 transition-all">Cafe64</h3></Link>
         <Navlinks/>
         <HamburgerButton onClick={()=> setIsMenuOpen(prev => !prev)}/>
            <MobileMenuLinks isMenuOpen={isMenuOpen} onClose={closeMenu}/>
         
        </header>
    )
}