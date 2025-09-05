"use server"

import prisma from "../db/prisma";


export async function AddCustomer(firstName: string, lastName: string, email: string, phone: string){
    try {
           const newCustomer = await prisma.customer.create({
            data:{
                name: firstName + " " + lastName,
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