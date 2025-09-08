"use client"
import Link from "next/link"
import Navlinks from "./NavLinks"

export default function Navbar(){
    return (
        <nav className="px-10 h-30 flex items-center justify-between shadow-lg">
            <Link href={'/'}><h3 id="logo" className="text-6xl font-medium">Cafe64</h3></Link>

    <Navlinks/>
        </nav>
    )
}