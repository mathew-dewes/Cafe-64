"use client"

import { authClient } from "@/server/auth/auth-client";
import Toast from "@/ui/ToastContainer"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"



export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const basePath = pathname.split("?")[0]; 
      const router = useRouter();

      

  const navItems = [
    { name: "Analytics", href: "/dashboard/analytics" },
    { name: "Orders", href: "/dashboard/orders?status=READY" },
    { name: "Products", href: "/dashboard/products" },

  ]

  

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-accent-500 rounded-2xl text-gray-100 flex flex-col">
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
          <p onClick={async()=>{
await authClient.signOut({
  fetchOptions:{
    onSuccess: ()=>
      router.push('/dashboard')
    
  }
})
          }} className="block px-4 py-2 hover:bg-gray-800 transition-colors cursor-pointer font-medium">Logout</p>
        </nav> 
  
      </aside>

      {/* Main content */}
      <main className="flex-1 px-12 mt-4 pt-2 overflow-y-auto">
        {children}
      </main>
<Toast/>
    </div>
  )
}
