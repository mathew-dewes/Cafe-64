import { getRevenueStats } from "@/server/queries/analytics"



export default async function page() {

    const stats= await getRevenueStats();

    console.log(stats);
    
    return (
        <div>

            <div className="flex gap-30">
                <div>
                    <h2 className="mb-2">Revenue</h2>
                    <p>Daily: ${stats.dailyRevenue}</p>
                    <p>Weekly: ${stats.weeklyRevenue}</p>
                    <p>Monthly: ${stats.monthlyRevenue}</p>
                </div>
                <div>
                    <h2 className="mb-2">Order stats</h2>
                    <p>Average order value: ${stats.averageOrderValue}</p>
                    <p>Open orders: {stats.openOrders}</p>
                    <p>Compeleted orders: {stats.openOrders}</p>
                    <p>Canceled orders: {stats.canceledOrders}</p>
                    <p>Total orders: {stats.totalOrders}</p>
                </div>
            </div>
            <div className="mt-20">
            <h2 className="mb-2">Product insights</h2>
            <div className=" flex gap-10">

                <div>
                    <p className="font-medium">Top selling products:</p>
                    <div className="mt-1">
                        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                    </div>

                </div>
                <div>
                    <p className="font-medium">Low selling products:</p>
                    <div className="mt-1">
                        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                    </div>

                </div>

            </div>
            </div>
            <div className="mt-10">
       <h2>Customer analytics:</h2>
       <p>Highest spending customers:</p>
       <p>Tom</p>
       <p>Dick</p>
       <p>Harry</p>

            </div>
     



        </div>
    )
}

