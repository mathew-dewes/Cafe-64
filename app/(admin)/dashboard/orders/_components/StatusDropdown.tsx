"use client"


import { updateOrderStatus } from "@/server/mutations/order";
import { useTransition } from "react";
import { orderStatus } from "./constants";
import { OrderStatus } from "@prisma/client";

export default function StatusDropdown({orderId, currentStatus}:
    {orderId: string, currentStatus: OrderStatus}
){
  const [isPending, startTransition] = useTransition();

    const handleChange = (newStatus: string) => {
    startTransition(async () => {
      await updateOrderStatus(orderId, newStatus as OrderStatus);
    });
  };

  return(
    <select
      value={currentStatus}
      onChange={(e) => handleChange(e.target.value)}
      disabled={isPending}
      className={`border px-2 py-1 rounded w-28`}
    >
      {orderStatus.slice(1).map((opt) => (
        <option className={``} key={opt.value} value={opt.value}>
          {opt.text}
        </option>
      ))}
    </select>
  )

  
}