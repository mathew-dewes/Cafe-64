
import { getProducts } from "@/server/queries/products"
import Button from "@/ui/Button";
import Link from "next/link";

export default async function page(){

    const products = await getProducts();

    
    return (
        <div>
            <div className="flex items-center gap-5">
                <h1 className="font-semibold">Actions:</h1>
                <Link href={`/dashboard/products/add`}>
                <Button text="Add product"/>
    
                </Link>
          


            </div>
            <h1 className="text-xl font-bold mt-10">Products</h1>
            <p className="font-light">Total {products.length}</p>
            <div className="mt-5">
                {products.map((product)=>{
                    return (
                        <div className="my-10" key={product.id}>
                            <h1 className="text-lg font-semibold">{product.name}</h1>
                            <p className="font-light mb-3 mt-1 w-150">{product.description}</p>
                            <div className="flex items-center gap-10">
     <p>Price: ${product.price}</p>
     <Link href={`/dashboard/products/edit/${product.id}`}>
     <Button text="Edit product"/>
</Link>
     
                            </div>
                       
                        </div>
                    )
                })}
            </div>

        </div>
    )
}