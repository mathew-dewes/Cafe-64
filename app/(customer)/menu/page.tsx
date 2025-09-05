
import getProducts from "@/server/queries/product"

export default async function page(){

    const products = await getProducts();

    console.log(products);

    
    
    return (
        <div>
            <h1>Menu</h1>
            <ul>
                {products?.map((product)=>{
                    return<li key={product.id}>{product.name}</li>
                })}
            </ul>
        </div>
    )
}