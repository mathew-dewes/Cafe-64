
import { getOrder } from "@/lib/queries/orders";
import Button from "@/ui/Button";
import Link from "next/link";


export default async function page({params}:
    {params: Promise<{id:string}>}
){

    const {id} = await params;
    
    const order = await getOrder(id);
    if (!order) return <p>Sorry, this order does not exist</p>

    const orderDate = order.created_at.toLocaleDateString();
    const orderTime = order.created_at.toLocaleTimeString();
    const pickUpTime = new Date(order.created_at.getTime() + 20 * 60 * 1000).toLocaleTimeString()

    

    

    return (
        <div>
            <div>
         <h1>You order was placed successfully!</h1>
            <p className="mt-5">Our staff will prepare your order shortly. Upon arrival, please listen for your name which will be called once ready. Thank you for using our new ordering system</p>
            </div>
   
            <div className="mt-10">
                <h2>Order: {order.orderNumber}</h2>
                <div className="mt-5">
  <p><b>Placed:</b> {orderDate} - {orderTime}</p>
                <p><b>Total items:</b> {order.total_items}</p>
                <p><b>Total price:</b> ${order.total_price}</p>
                </div>
              
            </div>
            <p className="mt-10"><b>Estimated pick up time:</b> {pickUpTime}</p>
            <div className="mt-20">
                <Link href={'/'}><Button text="Return"/></Link>

            </div>
        </div>
    )
}