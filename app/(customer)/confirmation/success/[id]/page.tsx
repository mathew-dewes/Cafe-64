
import { getOrder } from "@/server/queries/orders";
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
            <p>Hey {order.customer?.name}</p>
            <h1>You order was placed successfully! Please refer to the order details below</h1>
            <div className="mt-10">
                <h1>Order: {order.orderNumber}</h1>
                <p>Placed: {orderDate} - {orderTime}</p>
                <p>Total items: {order.total_items}</p>
                <p>Total price: ${order.total_price}</p>
            </div>
            <p className="mt-10">Estimated pick up time: {pickUpTime}</p>
            <div className="mt-20">
                <Link href={'/'}><Button text="Return"/></Link>

            </div>
        </div>
    )
}