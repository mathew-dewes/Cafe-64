"use client"

import { addProduct } from "@/server/mutations/product";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Button from "@/ui/Button";

export default function AddProductForm(){

      const router = useRouter()
    return (
             <form action={async(formData: FormData)=>{
                try {
                await addProduct(formData);
                        toast.success("Product added");
                        router.push('/dashboard/products')
                } catch (error) {
                    console.log(error)
                    toast.error("There was an error")
                    
                }
       }}>
                  <h1 className="text-lg font-semibold">Product name</h1>
                  <input required name="name" type="text" className="border bg-white p-2 rounded text-black mt-1" />
      
                  <div className="mt-5">
                      <p className="text-lg font-semibold">Description:</p>
                      <textarea required  rows={5} cols={60} className="bg-white w-full mt-1  border rounded text-black p-2" name="description" id=""></textarea>
                      <div className="mt-5">
                          <h1 className="text-lg font-semibold">Price ($NZD)</h1>
                          <input  name="price" type="number"  className="border bg-white p-2 w-20  rounded text-black block mt-1" />
      
                      </div>
      
                      <div className="mt-5">
                        <Button submit={true} text="Add product"/>

          
                      </div>
      
                  </div>
      
              </form>
    )
}