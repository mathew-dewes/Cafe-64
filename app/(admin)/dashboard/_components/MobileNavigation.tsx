"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavigation(){
        const pathName = usePathname();
    return (
        <div>
              <h1 className="text-center lg:hidden">Dashboard</h1>
                    <div className="lg:hidden mb-5 flex justify-center gap-3 mt-5 bg-gray-200 rounded-2xl w-full m-auto p-3">
                      <Link 
                      className={`p-3 rounded-xl ${pathName.startsWith('/dashboard/analytics') ? "bg-accent-500 text-white font-semibold" : ""}`} href={'/dashboard/analytics'}>Analytics</Link>
                      <Link className={`p-3 rounded-xl ${pathName.startsWith('/dashboard/orders') ? "bg-accent-500 text-white font-semibold" : ""}`} href={'/dashboard/orders'}>Orders</Link>
                      <Link className={`p-3 rounded-xl ${pathName.startsWith('/dashboard/products') ? "bg-accent-500 text-white font-semibold" : ""}`} href={'/dashboard/products'}>Products</Link>
                
                    </div>
        </div>
    )
}