import { OrderWithItems } from "@/server/types/types";
import MarkCompleteCheckbox from "./MarkOrderComplete";




export default function OrderCard(
    {order}:{order: OrderWithItems}){

                const date = order.created_at.toLocaleDateString();
                const time = order.created_at.toLocaleTimeString();
    return (
                 <div className={`font-light flex gap-10 mt-5 rounded-xl w-fit py-8 rounded-r-xl
                    ${order.status === "PENDING" ? "border-r-orange-500" : "border-r-green-500"}`}>
                        <div className="flex flex-col gap-1">
 <p>{date} - {time}</p>
      <p><span className="font-semibold">Customer:</span> {order.customer?.name}</p>
                        <p><span className="font-semibold">Order:</span> {order.orderNumber}</p>
                        <p>Total price: ${order.total_price}</p>
                        <p className="mt-3"><span className="font-semibold">Status:</span> {order.status}</p>
                        <MarkCompleteCheckbox orderId={order.id} initialStatus={order.status}/>
                   
                        </div>
                       <div>
                        <h2>Order items:</h2>
 <div className="flex flex-col gap-1 mt-1">
                            {order.order_items?.map((item)=>{
                                return(
                                    <div key={item.id}>
                                    <p><span className="font-semibold">{item.product.name}</span> - {item.milk_type}, sugar {item.sugar_level} x {item.quantity} </p>
                               
                                    </div>
                                )
                            })}
                        </div>
                       </div>
                       
                    </div>
    )
}