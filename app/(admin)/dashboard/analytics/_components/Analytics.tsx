import { getCustomerAnalytics, getProductInsights, getStats } from "@/server/queries/analytics";
import Revenue from "./Revenue";
import TopCustomers from "./TopCustomer";
import TopSelling from "./TopSelling";

export default async function Analytics(){

        const [stats, productInsights, customerAnalytics] = await Promise.all([
            getStats(),
            getProductInsights(),
            getCustomerAnalytics()
        ]);
    return (
          <div className="flex flex-col gap-10 items-center lg:items-start text-center lg:text-left">
        
                    <Revenue 
                    dailyRevenue={stats.dailyRevenue} 
                    weeklyRevenue={stats.weeklyRevenue} 
                    monthlyRevenue={stats.monthlyRevenue} />
                    
                    <TopSelling 
                    products={productInsights} />
                    
                    <TopCustomers 
                    customers={customerAnalytics.highestSpending} />
        
        </div>
    )
}