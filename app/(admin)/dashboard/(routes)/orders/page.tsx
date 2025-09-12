

import ProductFilters from "./_components/ProductFilters";
import OrderList from "./_components/OrderList";
import { Suspense } from "react";
import LoadingSpinner from "@/ui/LoadingSpinner";
import { isAuthenticated } from "@/lib/auth/session";




export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}){
  const filters = await searchParams;

      await isAuthenticated()


  
    


    
    return (
        <div>
                <div className="flex flex-col items-center md:items-start">
              
                <h2 className="mb-3">Filters</h2>
                <ProductFilters 
        status={filters.status as string | undefined}
        orderBy={filters.orderBy as string | undefined}
        direction={filters.direction as string | undefined}/>
      

            </div>
            <Suspense fallback={LoadingSpinner("orders")}>
         <OrderList filters={filters}/>
            </Suspense>

        </div>
    )
}