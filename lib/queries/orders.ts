"use server"



import { OrderStatus } from "@prisma/client";
import prisma from "../db/prisma";

type OrderFilters = {
  status?: OrderStatus;
  orderBy?: string;
  order?: "asc" | "desc";
  [key: string]: string | undefined | string[];
};

export async function getOrders(filters: OrderFilters){
    const { status, orderBy, order } = filters;

  const sortBy = orderBy ?? "created_at";
  const sortDirection = order ?? "asc";
    
 try {
           const orders = await prisma.order.findMany({
  select: {
    id: true,
    created_at: true,
    orderNumber: true,
    status: true,
    total_items: true,
    total_price: true,
    paymentMethod: true,
    paymentStatus: true,
    order_items: {
      select: {
        product: true,
        id: true,
        quantity: true,
        price: true,
        milk_type: true,
        sugar_level: true,
      },
    },
    customer: {
      select: {
        name: true,
      },
    },
    
  },
  where:{
        ...(status ? { status } : {}), 
  },
  orderBy:{
         [sortBy]: sortDirection,
  }



 
});



return orders
    } catch (error) {
        console.log(error);
        return []
    }
 
}



export async function getOrder(id: string){
    try {
           const order = await prisma.order.findUnique({
  select: {
    created_at: true,
    orderNumber: true,
    status: true,
    total_items: true,
    total_price: true,
    order_items: {
      select: {
        product: true,
        id: true,
        quantity: true,
        price: true,
        milk_type: true,
        sugar_level: true,
      },
    },
    customer: {
      select: {
        name: true,
      },
    },
  },
  where:{
    id
    
  }


 
});

return order
    } catch (error) {
        console.log(error);
        return null
    }
 
}


export async function generateOrderNumber(): Promise<string> {
  let unique = false;
  let orderNumber = "";

  while (!unique) {
    orderNumber = Math.floor(Math.random() * 10000).toString().padStart(4, "0");

    const existing = await prisma.order.findFirst({
      where: {
        orderNumber,
        status: { not: "complete" }, 
      },
    });

    if (!existing) unique = true;
  }

  return orderNumber;
}
