import getProducts from "@/server/queries/product";
import CartPreview from "./_components/CartPreview";
import MenuCard from "./_components/MenuCard";
import Image from "next/image";



export default async function page() {

    const products = await getProducts();

    return (

        <div>
            <div>
                <h1 className="text-center md:text-left">Browse our collection of fine roasted coffee</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-5 mt-10">
                <div>
       <Image className="md:hidden m-auto" src={'/coffee.jpg'} height={150} width={150} alt="Coffee image" />
       <Image className="hidden md:block" src={'/coffee.jpg'} height={200} width={200} alt="Coffee image" />
                </div>

         
                <div>
                  <CartPreview />
                </div>
            </div>

            <div>
   
                <div className="my-10 pb-20 md:grid-cols-2 lg:grid flex flex-col gap-10 md:gap-40 border-t-1">
                    {products?.map((product) => {
                        return <MenuCard id={product.id} description={product.description!} key={product.id} name={product.name} price={product.price} />
                    })}
                </div>
           




            </div>
        </div>

    )
}