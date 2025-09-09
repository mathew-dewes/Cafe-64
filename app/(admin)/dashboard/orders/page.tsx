

import { getOrders } from "@/server/queries/orders";
import ProductFilters from "./_components/ProductFilters";
import OrderCard from "./_components/OrderCard";
import { isAuthenticated } from "@/server/auth/session";




export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}){
  const filters = await searchParams

await isAuthenticated()
  
const orders = await getOrders(filters);
    


    
    return (
        <div>
                <div className="flex items-center gap-10">
                    <div>
          <h1 className="font-semibold text-xl mt-6">Filters:</h1>
       
                    </div>
      
                <ProductFilters 
        status={filters.status as string | undefined}
        orderBy={filters.orderBy as string | undefined}
        direction={filters.direction as string | undefined}/>
      

            </div>
            <h1 className="text-xl font-bold mt-10">Orders:</h1>
                        <p className="font-light">Total {orders.length}</p>
            {orders.map((order)=><OrderCard order={order} key={order.id}/>)}
        </div>
    )
}