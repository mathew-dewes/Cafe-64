"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavigation(){
        const pathName = usePathname();
    return (
        <div>
      
                    <div className="mb-5 flex mt-5 lg:mx-0 justify-center gap-3 bg-gray-200 rounded-2xl w-fit m-auto p-3">
                      <Link 
                      className={`p-3 rounded-xl ${pathName.startsWith('/dashboard/analytics') ? "bg-accent-500 text-white font-semibold" : ""}`} href={'/dashboard/analytics'}>Analytics</Link>
                      <Link className={`p-3 rounded-xl ${pathName.startsWith('/dashboard/orders') ? "bg-accent-500 text-white font-semibold" : ""}`} href={'/dashboard/orders'}>Orders</Link>
                      <Link className={`p-3 rounded-xl ${pathName.startsWith('/dashboard/products') ? "bg-accent-500 text-white font-semibold" : ""}`} href={'/dashboard/products'}>Products</Link>
                
                    </div>
        </div>
    )
}