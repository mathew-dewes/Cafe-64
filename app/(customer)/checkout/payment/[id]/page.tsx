
import prisma from "@/server/db/prisma";
import CartList from "../../_components/CartList";
import PayByCardButton from "../../_components/CardPaymentButton";
import PayAtCounterButton from "../../_components/PayAtCounterButton";





export default async function IndexPage({params}:
  {params: Promise <{id: string}>}
) {

const {id} = await params;

const customer = await prisma.customer.findUnique({
  where:{
    id
  }
});

if (!customer) return

    


  return (
    <div>
      <h1 className="text-2xl font-bold">Payment</h1>
      <p className="mt-2">Hey {customer.name}, Please confirm you details below and click on one payment methods below to proceed</p>
      <div className="mt-10">
        <p>Customer: {customer.name}</p>
        <p>Email: {customer.email}</p>
        <p>Phone: {customer.phone}</p>
        <div className="mt-5">
    <p >Order items:</p>
    <CartList/>
        </div>

      </div>
 
  

    <div className="mt-10">
<h1>Payment methods:</h1>
    <div className="flex mt-5 gap-2">
    <PayAtCounterButton customer_id={customer.id}/>
    <PayByCardButton customer={customer}/>


    </div>
    </div>
    

  
    </div>
   
  )
}