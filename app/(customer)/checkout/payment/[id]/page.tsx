
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
      <h1 className="text-2xl font-bold">Payment</h1>
      <p className="mt-2">Please confirm you details below and click on one payment methods below to proceed</p>
      <div className="mt-10">
        <p><b>Customer:</b> {customer.name}</p>
        <p><b>Email:</b> {customer.email}</p>
        <p><b>Phone:</b> {customer.phone}</p>
        <div className="mt-5">
    <p><b>Order items:</b></p>
    <CartList/>
        </div>

      </div>
 
  

    <div className="mt-10">
<h2>Payment methods:</h2>
<div className="mt-3">
<p><b>Attention:</b> To use the pay with card feature, please using the test card number below</p>
<div className="mt-2 flex flex-col gap-1">
    <p ><b>Card number:</b>  4242 4242 4242 4242</p>
    <p><b>EXP:</b> Any future date</p>
    <p><b>CVC code:</b> Any 3 digits</p>
</div>

</div>


    <div className="flex mt-5 gap-2">
    <PayAtCounterButton customer_id={customer.id}/>
    <PayByCardButton customer={customer}/>


    </div>
    </div>
    

  
    </div>
   
  )
}