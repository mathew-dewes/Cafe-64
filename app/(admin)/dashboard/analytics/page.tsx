
import { isAuthenticated } from "@/server/auth/session";
import { getCustomerAnalytics, getProductInsights, getStats } from "@/server/queries/analytics"
import Revenue from "./_components/Revenue";
import TopSelling from "./_components/TopSelling";
import TopCustomers from "./_components/TopCustomer";





export default async function page() {

    await isAuthenticated()


    const [stats, productInsights, customerAnalytics] = await Promise.all([
        getStats(),
        getProductInsights(),
        getCustomerAnalytics()
    ]);

    return (
        <div>
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
        </div>
        
    )
}

