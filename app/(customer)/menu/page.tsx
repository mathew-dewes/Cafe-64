import getProducts from "@/server/queries/product";
import CartPreview from "./_components/CartPreview";
import MenuCard from "./_components/MenuCard";
import Image from "next/image";



export default async function page() {

    const products = await getProducts();

    return (

        <div>
            <div>
                <h1>Browse our collection of fine roasted coffee.</h1>
            </div>
            <div className="flex gap-5 mt-10">
                <div>
       <Image src={'/coffee.jpg'} height={200} width={200} alt="Coffee image" />
                </div>

         
                <div>
                  <CartPreview />
                </div>
            </div>

            <div>
   
                <div className="mt-20 sm:grid-cols-2 lg:grid flex flex-col gap-40">
                    {products?.map((product) => {
                        return <MenuCard id={product.id} description={product.description!} key={product.id} name={product.name} price={product.price} />
                    })}
                </div>
           




            </div>
        </div>

    )
}