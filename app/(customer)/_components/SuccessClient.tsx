"use client"

import { useEffect } from "react"


import Link from "next/link"
import { useCartStore } from "../_hooks/cart-store"
import Button from "@/ui/Button"


export default function SuccessClient({
  name}: { name: string | null
}) {
const {clearCart} = useCartStore()

  useEffect(() => {
    async function handleOrder() {
      console.log("Clearing cart...");
      
      clearCart()
    }

    handleOrder()
  }, [clearCart])

  return (
    <div>
      <p>
        Thank you for your order, {name}! Your order has been placed.
      </p>
      <p>
        If you have any questions, email <a href="mailto:orders@example.com">orders@example.com</a>.
      </p>
      <div className="mt-10">
        <Link href={'/'}><Button text="Return"/></Link>
 
      </div>

    </div>
  )
}
