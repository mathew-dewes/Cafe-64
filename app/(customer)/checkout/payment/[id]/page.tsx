
import prisma from "@/lib/db/prisma";
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
      <h1 className="text-2xl font-bold">Payment pending</h1>
      <p className="mt-2">Please confirm your contact details below and click on your desired payment method to proceed</p>
      <div className="mt-10 flex flex-col gap-1">
        <p><b>Customer:</b> {customer.name}</p>
        <p><b>Email:</b> {customer.email}</p>
        <p><b>Phone:</b> {customer.phone}</p>
        <div className="mt-5">
    <p><b>Order items:</b></p>
    <CartList/>
        </div>

      </div>
 
  

    <div className="mt-10">

<div className="mt-5">
  <h2>Please note the following:</h2>
<p className="mt-1">The pay with card feature is running on a test environment. When using this method, please use the card details below</p>
<div className="mt-10 flex flex-col gap-2">
    <p><b>Card number:</b>  4242 4242 4242 4242</p>
    <p><b>EXP:</b> Any future date</p>
    <p><b>CVC code:</b> Any 3 digits</p>
</div>

</div>
<h2 className="mt-10">Payment methods:</h2>


    <div className="flex mt-5 gap-5">
    <PayAtCounterButton customer_id={customer.id}/>
    <PayByCardButton customer={customer}/>


    </div>
    </div>
    

  
    </div>
   
  )
}