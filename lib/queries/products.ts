"use server"

import prisma from "../db/prisma"

export async function getProducts(){
    try {
         const products = await prisma.product.findMany({
            orderBy:{
                created_at:"asc"
            }
         });
         return products
    } catch (error) {
        console.log(error)
        return []
    }


}


export async function getProduct(id: string){
 try {
    const product = await prisma.product.findUnique({
        where:{
            id
        }
    });

    return product
 } catch (error) {
    console.log(error);
    return null
 }
}