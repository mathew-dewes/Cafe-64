"use client"

import { Customer } from "@/app/generated/prisma";
import { useCartStore } from "../../_hooks/cart-store";
import Button from "@/ui/Button";




export default function PayByCardButton({customer}:{customer: Customer}) {
    const {items } = useCartStore();

    

const handleCheckout = async () => {
  const res = await fetch("/api/checkout_sessions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items, email: customer.email, customer_id: customer.id }),
  })
  const data = await res.json()
  if (data.url) window.location.href = data.url
}

  return (
    <Button text="Pay with card" onClick={()=>handleCheckout()}/>
   

   
  )
}