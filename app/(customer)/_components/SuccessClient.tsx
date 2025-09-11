"use client"

import { useEffect } from "react"
import { addMinutes, format } from "date-fns";

import Link from "next/link"
import { useCartStore } from "../_hooks/cart-store"
import Button from "@/ui/Button"
import { Order } from "@prisma/client";



export default function SuccessClient({order}:{order: Order}) {
const {clearCart} = useCartStore();


const orderDateObj = new Date(order.created_at);

  const orderDate = format(new Date(orderDateObj), "dd/MM/yyyy");
  const orderTime = format(new Date(orderDateObj), "HH:mm");
const pickUpTime = format(addMinutes(orderDateObj, 20), "HH:mm");

  useEffect(() => {
    async function handleOrder() {
      console.log("Clearing cart...");
      
      clearCart()
    }

    handleOrder()
  }, [clearCart])

  return (
     <div>
            <h1>You order was placed successfully!</h1>
            <p className="mt-2">Please take note of your order number below and let our staff who you are upon arrival</p>
            <div className="mt-10">
                <h2>Order: {order.orderNumber}</h2>
                <div className="mt-5">
  <p><b>Placed:</b> {orderDate} - {orderTime}</p>
                <p><b>Total items:</b> {order.total_items}</p>
                <p><b>Total price:</b> ${order.total_price}</p>
                </div>
              
            </div>
            <p className="mt-10"><b>Estimated pick up time:</b> {pickUpTime}</p>
            <p className="mt-2">Thanks for shopping at Cafe64 and we hope to see you again shortly</p>
            <div className="mt-20">
                <Link href={'/'}><Button text="Return"/></Link>

            </div>
        </div>
  )
}
