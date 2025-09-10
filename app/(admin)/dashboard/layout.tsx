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
      <main className="lg:flex-1 lg:px-12 lg:mt-4 lg:pt-2 overflow-y-auto">
        <h1 className="text-center lg:hidden">Dashboard</h1>
        <div className="lg:hidden mb-5 flex justify-center gap-5 mt-2 border-b-1 p-2">
          <Link href={'/dashboard/analytics'}>Analytics</Link>
          <Link href={'/dashboard/orders'}>Orders</Link>
          <Link href={'/dashboard/products'}>Products</Link>
    
        </div>
        {children}
      </main>
<Toast/>
    </div>
  )
}
