"use server"

import { Drink_size, Milk_type, OrderStatus, PaymentMethod, Sugar_level } from "@/app/generated/prisma";
import prisma from "../db/prisma"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";



type CartItem = {
  id: string;      
  name: string;
  quantity: number;
  price: number;
  milk?: Milk_type;
  sugar?: Sugar_level;
  size?: Drink_size
};

export async function placeOrder(customer_id: string, items: CartItem[], status: OrderStatus, payment_method: PaymentMethod ){

  const orderNumber = Math.floor(100000 + Math.random() * 900000).toString();
    try {
        const order = await prisma.order.create({
            data: {
              paymentStatus:"pending",
              paymentMethod: payment_method,
                customer_id,
                orderNumber,
                status,
                
               total_items: items.reduce((sum, i) => sum + i.quantity, 0),
                total_price: items.reduce((sum, i) => sum + i.price * i.quantity, 0),
            
                order_items:{
                  create: items.map((item)=>({
                    quantity: item.quantity,
                    price: item.price,
                    size: item.size,   
                    milk_type: item.milk ?? Milk_type.whole,
                    sugar_level: item.sugar ?? Sugar_level.less,
                    product: {
                        connect: {id: item.id}
                    }
                  }))
                }

            }
        });

       return order;

       
    } catch (error) {
           console.error("Error placing order:", error);
    throw error;
    }
}

export async function markOrderComplete(orderId: string) {
  const order = await prisma.order.update({
    where: { id: orderId },
    data: { status: OrderStatus.COMPLETE },
  });
    revalidatePath('/admin')
  return order;

}


export async function filterOrders(formData: FormData){
    const status = formData.get("status") as string | null;
  const orderBy = formData.get("orderBy") as string | null;
  const order = formData.get("order") as string | null;
    const query = new URLSearchParams();

      if (status) query.set("status", status);
  if (orderBy) query.set("orderBy", orderBy);
  if (order) query.set("order", order);

  redirect(`/dashboard/orders?${query.toString()}`);
  
}