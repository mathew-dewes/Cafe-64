
import { isAuthenticated } from "@/server/auth/session";
import { getCustomerAnalytics, getProductInsights, getStats } from "@/server/queries/analytics"





export default async function page() {

    await isAuthenticated()
    

    const [stats, productInsights, customerAnalytics] = await Promise.all([
    getStats(),
    getProductInsights(),
    getCustomerAnalytics()
  ]);

    return (
        <div className="w-1/2">

            <div className="flex justify-between">
                <div>
                    <h1 className="mb-2">Revenue</h1>
                    <p>Daily: ${stats.dailyRevenue}</p>
                    <p>Weekly: ${stats.weeklyRevenue}</p>
                    <p>Monthly: ${stats.monthlyRevenue}</p>
                </div>
                <div className="text-right">
                    <h1 className="mb-2">Order stats</h1>
                    <p>Average order value: ${stats.averageOrderValue}</p>
                    <p>Open orders: {stats.openOrders}</p>
                    <p>Compeleted orders: {stats.openOrders}</p>
                    <p>Total orders: {stats.totalOrders}</p>
                </div>
            </div>
            <div className="mt-20 flex justify-between">
                <div>
      <h1 className="mb-2">Top selling products</h1>
<div className="mt-2">
                        {productInsights.topSelling.map((product, key)=>{
                            return <p key={key} className="text-md"><span className="font-semibold">{product.name}</span> - sales x {product.sales}</p>
                        })}
            
                    </div>
                </div>
      

           
 

                   <div className="text-right">
       <h1>Highest spending customers</h1>
       <div className="mt-2">

      {customerAnalytics.highestSpending.map((customer, key)=>{
        return <p className="text-md" key={key}><span className="font-semibold">{customer.name} </span>- spend: ${customer.spend}</p>
      })}
       </div>
  

            </div>
            </div>
   
     



        </div>
    )
}

