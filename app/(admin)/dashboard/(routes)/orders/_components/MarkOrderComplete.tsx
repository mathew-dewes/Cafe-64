"use client";

import { useState } from "react";
import { markOrderComplete } from "@/lib/mutations/order";
import { OrderStatus } from "@prisma/client";



export default function MarkCompleteCheckbox({
  orderId,
  initialStatus,
}: {
  orderId: string;
  initialStatus: OrderStatus;

}) {
  const [status, setStatus] = useState(initialStatus);
  const [isAnimating, setIsAnimating] = useState(false);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setIsAnimating(true); // start animation
      setStatus(OrderStatus.COMPLETE);

      // wait for animation to finish (e.g., 300ms)
      setTimeout(async () => {
        await markOrderComplete(orderId);
      }, 300);
    }
  }

  return (
    <label
      className={`flex items-center gap-2 mt-2 transition-all duration-300 
        ${isAnimating ? "opacity-0 transform -translate-x-10" : "opacity-100"} `}
    >
      <input
        type="checkbox"
        checked={status === OrderStatus.COMPLETE}
        onChange={handleChange}
      />
      Mark as complete
    </label>
  );
}
