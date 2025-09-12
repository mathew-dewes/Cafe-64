"use client"

import { OrderWithItems } from "@/lib/types/types";
import { format } from "date-fns";
import StatusDropdown from "./StatusDropdown";
import { OrderStatus } from "@prisma/client";





export default function OrderCard(
    {order}:{order: OrderWithItems}){
  const date = format(new Date(order.created_at), "dd/MM/yyyy");
  const time = format(new Date(order.created_at), "HH:mm");

  const changeStatusColor = (currentStatus: OrderStatus)=>{
    let style;

   switch(currentStatus){
    case "COMPLETE":
        style = "border-green-300"
        break
    case "PENDING":
        style = "border-orange-300"
        break
    case "READY":
        style = "border-blue-300"
        break
   }

   return style
   
  }

    return (
                 <div className={`font-light flex gap-3 sm:gap-10 mt-5 w-fit py-8 border-4 px-2 sm:px-10 rounded-xl bg-gray-100 ${changeStatusColor(order.status)}`}>
                        <div className="flex flex-col gap-2">
 <p>{date} - {time}</p>
      <p className="mt-1"><span className="font-semibold">Customer:</span> {order.customer?.name}</p>
                        <p><span className="font-semibold">Order:</span> {order.orderNumber}</p>
                        <p><b>Total price:</b> ${order.total_price}</p>
                        <p><span className="font-semibold">Payment method:</span> {order.paymentMethod}</p>
                            <p><span className="font-semibold">Payment status:</span>{order.paymentStatus}</p>
                        <div className="flex items-center gap-2 mt-5">
 
                    <p><b>Order status:</b></p>
                    <StatusDropdown currentStatus={order.status} orderId={order.id}/>
                        </div>
                   
                   
                        </div>
                       <div>
                        <h2 className="font-semibold">Items:</h2>
 <div className="flex flex-col gap-1 mt-2">
                            {order.order_items?.map((item)=>{
                                return(
                                    <div key={item.id}>
                                    <p><span className="font-semibold">{item.product.name}</span> - {item.milk_type}, sugar {item.sugar_level} x {item.quantity} </p>
                               
                                    </div>
                                )
                            })}
                        </div>
                       </div>
                       
                    </div>
    )
}