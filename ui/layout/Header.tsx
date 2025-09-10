"use client"

import Link from "next/link";
import Navlinks from "../navigation/NavLinks";
import { HamburgerButton } from "../navigation/HamburgerButton";
import { useState } from "react";
import MobileMenuLinks from "../navigation/MobileMenuLinks";

export default function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
            <header className="flex justify-between items-center py-6 px-8 md:px-32 shadow-md">
          <Link href={'/'}><h3 id="logo" className="text-6xl font-medium hover:scale-105 transition-all">Cafe64</h3></Link>
         <Navlinks/>
         <HamburgerButton onClick={()=> setIsMenuOpen(!isMenuOpen)}/>
            <MobileMenuLinks isMenuOpen={isMenuOpen} onClick={()=> setIsMenuOpen(!isMenuOpen)}/>
         
        </header>
    )
}