"use client"



import { useCartStore } from "../_hooks/cart-store";
import CheckoutItems from "./_components/CheckoutItems";
import OrderForm from "./_components/OrderForm";



export default function Page(){
        const {items} = useCartStore();
       if ( items && items.length < 1){
            return 
        }

    return (
        <div>
     
            <CheckoutItems/>
     
         
            <OrderForm/>
 
        </div>
    )
}