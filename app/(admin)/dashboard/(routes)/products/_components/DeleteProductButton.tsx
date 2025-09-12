"use client"

import { deleteProduct } from "@/lib/mutations/product"
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";



export default function DeleteProductButton({product_id}:{product_id: string}){

  const router = useRouter()

    async function handleClick(){
       try {
        await deleteProduct(product_id);
        toast.success("Product removed");
        router.push('/dashboard/products')

       } catch (error) {
        console.log(error)
         toast.error("There was an error")
       }

        
    }
    return (
   
  <button onClick={handleClick} className="text-white block mt-10 text-nowrap font-sans cursor-pointer bg-accent-500 hover:bg-accent-500 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-accent-500 dark:hover:bg-blue-700">
            Delete
           </button>
    
       
    )
}