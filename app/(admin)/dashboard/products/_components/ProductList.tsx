import getProducts from "@/server/queries/product";
import Button from "@/ui/Button";
import Link from "next/link";

export default async function ProductList(){

        const products = await getProducts();
    return (
         <div className="mt-5">
            <p>Total products: {products?.length}</p>
                
                {products?.map((product)=>{
                    return (
                        
                        <div className="my-10 bg-gray-100 p-3 rounded-2xl w-fit" key={product.id}>
                            <h1 className="text-lg font-semibold">{product.name}</h1>
                            <p className="font-light mb-3 mt-1">{product.description}</p>
                            <div className="flex items-center gap-10">
     <p><b>Price:</b> ${product.price}</p>
     <Link href={`/dashboard/products/edit/${product.id}`}>
     <Button text="Edit product"/>
</Link>
     
                            </div>
                       
                        </div>
                    )
                })}
            </div>
    )
}