"use server"

import prisma from "../db/prisma";


export async function AddCustomer(name: string, email: string, phone: string){
    try {
           const newCustomer = await prisma.customer.create({
            data:{
                name,
                email,
                phone
            }
        });

        return newCustomer
    } catch (error) {
        console.log(error);
        return 
        
    }
     
}