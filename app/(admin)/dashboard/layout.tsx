"use client"

import { authClient } from "@/server/auth/auth-client";
import Toast from "@/ui/ToastContainer"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import MobileNavigation from "./_components/MobileNavigation";



export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const basePath = pathname.split("?")[0]; 
      const router = useRouter();

      

  const navItems = [
    { name: "Analytics", href: "/dashboard/analytics" },
    { name: "Orders", href: "/dashboard/orders" },
    { name: "Products", href: "/dashboard/products" },

  ]

  

  return (
    <div className="flex lg:h-screen">
      {/* Sidebar */}
      <aside className="hidden w-64 bg-accent-500 rounded-2xl text-gray-100 lg:flex flex-col">
        <div className="p-4 text-xl font-bold">Dashboard</div>
        <nav className="flex-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={
                `block px-4 py-2 hover:bg-gray-800 transition-colors,
                ${basePath.startsWith(item.href.split("?")[0]) ? "bg-gray-800 font-semibold" : ""}`}
            >
              {item.name}
            </Link>
          ))}
          <button onClick={async(e)=>{
                e.stopPropagation();
await authClient.signOut({
  fetchOptions:{
    onSuccess: ()=>
      router.push('/dashboard')
    
  }
})
          }} className="block px-4 py-2 hover:bg-gray-800 transition-colors cursor-pointer font-medium">Logout</button>
        </nav> 
  
      </aside>

      {/* Main content */}
      <main className="lg:flex-1 w-full lg:px-12 lg:mt-4 lg:pt-2 overflow-y-auto">
       <MobileNavigation/>
        {children}
      </main>
<Toast/>
    </div>
  )
}
