
type RevenueProps ={
    dailyRevenue: number
    weeklyRevenue: number
    monthlyRevenue: number
}


export default function Revenue({dailyRevenue, weeklyRevenue, monthlyRevenue}: RevenueProps
){
    return (
         <div>
                    <h1>Revenue</h1>
                    <div className="flex flex-col gap-2 mt-2">
                                          <p>Daily: ${dailyRevenue}</p>
                    <p>Weekly: ${weeklyRevenue}</p>
                    <p>Monthly: ${monthlyRevenue}</p>
                    </div>
  
                </div>
    )
}