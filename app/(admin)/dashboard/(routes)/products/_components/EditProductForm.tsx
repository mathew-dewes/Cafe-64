"use client"



import SaveButton from "./SaveProductButton";
import { useState, useTransition } from "react";
import { toast } from "react-toastify";
import DeleteProductButton from "./DeleteProductButton";

import { updateProduct } from "@/lib/mutations/product";
import { useRouter } from "next/navigation";
import { Product } from "@prisma/client";


export default function EditProductForm({ product }: { product: Product }) {
    const [name, setName] = useState(product.name)
    const [description, setDescription] = useState(product.description)
    const [price, setPrice] = useState(product.price)
    const [isPending, startTransition] = useTransition();
          const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        startTransition(async () => {
            try {
                const formData = new FormData()
                formData.set("name", name)
                formData.set("description", description)
                formData.set("price", price.toString())
                await updateProduct(product.id, formData)
                toast.success("Product updated");
                router.push('/dashboard/products')
            } catch (error) {
                console.log(error)
                toast.error("Update failed")
            }
        })
    }
    return (
        <div>
<form onSubmit={handleSubmit}>
               <h1 className="text-xl font-semibold mb-5">Edit product</h1>
            <input name="name" type="text" onChange={(e) => setName(e.target.value)} defaultValue={product.name} className="border min-w-60  bg-white p-2 rounded text-black mt-1" />

            <div className="mt-5">
                <p className="text-lg font-semibold">Description:</p>
                <textarea onChange={(e) => setDescription(e.target.value)} defaultValue={product.description} rows={5} cols={60} className="bg-white mt-1 w-full sm:w-fit border rounded text-black p-2" name="description" id=""></textarea>
                <div className="mt-5">
                    <h1 className="text-lg font-semibold">Price ($NZD)</h1>
                    <input onChange={(e) => setPrice(parseFloat(e.target.value))} name="price" type="number" defaultValue={product.price} className="border w-20 bg-white p-2 rounded text-black block mt-1" />

                </div>

                <div className="mt-5">
                    <SaveButton isPending={isPending} />
                
                </div>

            </div>

        </form>
            <DeleteProductButton product_id={product.id}/>
        </div>
        
    )
}