
import CartPreview from "./_components/CartPreview";
import Image from "next/image";
import MenuList from "./_components/MenuList";
import { Suspense } from "react";
import LoadingSpinner from "@/ui/LoadingSpinner";

// ui/Spinner.tsx





export default async function page() {

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
                <Suspense fallback={LoadingSpinner("products")}>
           <MenuList/>
                </Suspense>
   
    
           




            </div>
        </div>

    )
}