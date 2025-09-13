import { getOrders } from "@/lib/queries/orders";
import OrderCard from "./OrderCard";

type OrderListProps = {
  filters: Record<string, string | string[] | undefined>;
};

export default async function OrderList({ filters }: OrderListProps
) {

  const orders = await getOrders(filters);

  return (
    <div>
      <h1 className="text-xl font-bold sm:mt-10 text-center lg:text-left">Orders:</h1>
      <p className="font-light text-center lg:text-left">Total {orders.length}</p>
      <div className="flex gap-20 flex-wrap justify-center lg:justify-start">
        {orders.map((order) => {
          return <OrderCard order={order} key={order.id} />
        })}
      </div>

    </div>
  )
}