"use client"


import Toast from "@/ui/ToastContainer"
import Link from "next/link"
import { usePathname } from "next/navigation"



export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const navItems = [
    { name: "Analytics", href: "/dashboard/analytics" },
    { name: "Orders", href: "/dashboard/orders" },
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
                `block px-4 py-2 hover:bg-gray-800 transition-colors",
                ${pathname.startsWith(item.href) ? "bg-gray-800 font-semibold" : ""}`}
            >
              {item.name}
            </Link>
          ))}
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
