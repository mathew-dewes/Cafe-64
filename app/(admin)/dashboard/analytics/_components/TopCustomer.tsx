
type CustomerStat = {
    name: string
    spend: number
}



export default function TopCustomers({customers}:
    {customers: CustomerStat[]}
){
    return (
                   <div>
       <h1>Highest spending customers</h1>
       <div>

      {customers.map((customer, key)=>{
        return <p  key={key}><span>{customer.name} </span>- spend: ${customer.spend}</p>
      })}
       </div>
  

            </div>
    )
}