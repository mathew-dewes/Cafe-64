
import { getProducts } from "@/server/queries/products"
import MenuCard from "./MenuCard"



export default async function MenuList(){



    const products = await getProducts();


    return (
         <div className="my-10 pb-20 md:grid-cols-2 lg:grid flex flex-col gap-10 md:gap-40 border-t-1">
                            {products?.map((product) => {
                                return <MenuCard id={product.id} description={product.description!} key={product.id} name={product.name} price={product.price} />
                            })}
                        </div>
    )
}