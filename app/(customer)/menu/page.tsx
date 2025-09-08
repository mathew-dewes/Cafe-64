import getProducts from "@/server/queries/product";
import CartPreview from "./_components/CartPreview";
import MenuCard from "./_components/MenuCard";
import Image from "next/image";



export default async function page() {

    const products = await getProducts();

    return (

        <div>
            <div className="flex gap-5">
                <div>
       <Image src={'/coffee.jpg'} height={200} width={200} alt="Coffee image" />
                </div>

         
                <div>
                    <h1>Try our wide collection of quality coffee today</h1>
                           <h2 className="mt-2">How to use our system</h2>
                           <p>Select your desired product below and click the add button to populate your cart</p>
                           <p>Once your happy with your order, Click on checkout to proceed to payment</p>
                  <CartPreview />
                </div>
            </div>

            <div>
   
                <div className="mt-10 sm:grid-cols-2 lg:grid flex flex-col gap-10">
                    {products?.map((product) => {
                        return <MenuCard id={product.id} description={product.description!} key={product.id} name={product.name} price={product.price} />
                    })}
                </div>
           




            </div>
        </div>

    )
}