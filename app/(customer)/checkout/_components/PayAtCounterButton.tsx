"use client"



import { placeOrder } from "@/lib/mutations/order";
import { useRouter } from "next/navigation";
import { useCartStore } from "../../_hooks/cart-store";
import Button from "@/ui/Button";



export default function PayAtCounterButton({customer_id}:{customer_id:string}){
       const router = useRouter();
        const {items, clearCart} = useCartStore();

    async function clearAndRedirect(href: string){
    clearCart();
    router.push(href)
}
        

    async function handleClick(){
        const order = await placeOrder(customer_id, items, "READY", "counter");
        clearAndRedirect(`/confirmation/success/${order.id}`)
        

    }

return <Button text="Pay at counter" onClick={()=>handleClick()} /> 

}