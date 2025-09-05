"use client"
import Link from "next/link"
import Navlinks from "./NavLinks"

export default function Navbar(){
    return (
        <nav className="px-10 h-30 flex items-center justify-between shadow-lg">
            <Link href={'/'}><h1 id="logo" className="text-6xl">Cafe-64</h1></Link>

    <Navlinks/>
        </nav>
    )
}