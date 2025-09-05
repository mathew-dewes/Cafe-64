"use client"



import { useCartStore } from "../_hooks/cart-store";
import CheckoutItems from "./_components/CheckoutItems";
import OrderForm from "./_components/OrderForm";



export default function Page(){
        const {items} = useCartStore();
       if ( items && items.length < 1){
            return <p>The cart is empty. Please add items from the menu page and return here</p>
        }

    return (
        <div>
     
            <CheckoutItems/>
     
         
            <OrderForm/>
 
        </div>
    )
}