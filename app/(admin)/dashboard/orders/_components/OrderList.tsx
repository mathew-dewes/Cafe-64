import { getOrders } from "@/server/queries/orders";
import OrderCard from "./OrderCard";

type OrderListProps = {
  filters: Record<string, string | string[] | undefined>;
};

export default async function OrderList({filters}: OrderListProps
){

  const orders = await getOrders(filters);

    return (
        <div>
                     <h1 className="text-xl font-bold sm:mt-10 text-center sm:text-left">Orders:</h1>
                                    <p className="font-light text-center sm:text-left">Total {orders.length}</p>
                        {orders.map((order)=><OrderCard order={order} key={order.id}/>)}
        </div>
    )
}