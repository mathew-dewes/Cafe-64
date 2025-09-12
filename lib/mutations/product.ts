"use server"

import { revalidatePath } from "next/cache"
import prisma from "../db/prisma"



export async function updateProduct(product_id: string, formData: FormData) {
    const name = formData.get("name") as string
    const description = formData.get("description") as string
    const price = parseFloat(formData.get("price") as string)


    const data = { name, description, price }

    try {
        const updated = await prisma.product.update({
            where: { id: product_id },
            data
        });

        revalidatePath('/dashboard')
        revalidatePath('/menu')

        return updated
    } catch (error) {
        console.error("Update failed:", error)
        throw error
    }


}

export async function addProduct(formData: FormData) {
    const name = formData.get("name") as string
    const description = formData.get("description") as string
    const price = parseFloat(formData.get("price") as string)
    const data = { name, description, price }

    try {
        await prisma.product.create({
            data
        });
        revalidatePath('/dashboard')
        revalidatePath('/menu');

    } catch (error) {
        console.log(error);

    }


}

export async function deleteProduct(id: string) {
    try {
        await prisma.product.delete({
            where: {
                id
            }
        });
revalidatePath('/dashboard');
revalidatePath('/menu');


    
    } catch (error) {
        console.log(error);


    }






 

}