


import Button from "@/ui/Button";

import Link from "next/link";
import ProductList from "./_components/ProductList";
import { Suspense } from "react";
import LoadingSpinner from "@/ui/LoadingSpinner";


export default async function page(){


    
    return (
        <div>
            <div className="flex items-center gap-5 justify-center lg:justify-start">
                <h2>Actions:</h2>
                <Link href={`/dashboard/products/add`}>
                <Button text="Add product"/>
    
                </Link>
          


            </div>
            <h1 className="text-xl font-bold mt-10">Products</h1>
            <Suspense fallback={LoadingSpinner("products")}>
            <ProductList/>
            </Suspense>


        </div>
    )
}