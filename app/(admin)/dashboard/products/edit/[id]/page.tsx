

import { getProduct } from "@/server/queries/products";
import EditProductForm from "../../_components/EditProductForm";


export default async function page({ params }:
    { params: Promise<{ id: string }> }) {

    const { id } = await params;
    const product = await getProduct(id);
 
    

    if (!product) return <p>This product doesnt exsist</p>

    return (
       <EditProductForm product={product}/>
    )
}