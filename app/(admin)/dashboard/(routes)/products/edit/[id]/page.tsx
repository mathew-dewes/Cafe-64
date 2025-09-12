

import { getProduct } from "@/lib/queries/products";
import EditProductForm from "../../_components/EditProductForm";
import { isAuthenticated } from "@/lib/auth/session";


export default async function page({ params }:
    { params: Promise<{ id: string }> }) {

            await isAuthenticated()

    const { id } = await params;
    const product = await getProduct(id);
 
    

    if (!product) return <p>This product doesnt exsist</p>

    return (
       <EditProductForm product={product}/>
    )
}