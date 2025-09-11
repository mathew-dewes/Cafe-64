"use client"



import { useState } from "react";



import { useCartStore } from "../../_hooks/cart-store";
import Dropdown from "./Dropdown";
import Button from "@/ui/Button";
import { Drink_size, Milk_type, Sugar_level } from "@prisma/client";

type MenuProps = {
    name: string
    price: number
    description: string
    id: string
}

export default function MenuCard({ name, price, description, id }: MenuProps) {

    const { addItem, items } = useCartStore();
    const [milk, setMilk] = useState<Milk_type>("whole");
    const [sugar, setSugar] = useState<Sugar_level>("less");
    const [size, setSize] = useState<Drink_size>("MEDIUM")
    
   const quantity = items
  .filter((item) => item.id === id)
  .reduce((acc, item) => acc + item.quantity, 0);
    const displayPrice = price + (size === "LARGE" ? 1 : 0);

    const onAddItem = () => {
        addItem({
            id: id,
            name,
            quantity: 1,
            price: displayPrice,
            milk,
            sugar,
            size
        })
    }





    return (
        <div className="border-b-1 py-10">
            <h1 className="text-2xl font-bold text-center md:text-left">{name}</h1>
            <p className="mt-3 max-w-3xl text-sm text-center md:text-left">{description}</p>
            <p className="mt-2 text-center md:text-left"><b>Price:</b> ${displayPrice}</p>
            <p className="mt-2 text-center md:text-left"><b>Cart quantity:</b> {quantity}</p>

            <div className="mt-8 flex flex-col md:flex-row items-center gap-5">
                <Dropdown  onChange={(v) => setMilk(v as Milk_type)} type="milk" />
                <Dropdown  onChange={(v) => setSugar(v as Sugar_level)} type="sugar" />
         
                
               


            </div>
    <div className="flex gap-2 mt-5 text-center">
                   <Dropdown onChange={(v)=> setSize(v as Drink_size)} type="size" />



                    </div>
                    <div className="mt-10 text-center md:text-left">

                        <Button text="Add to cart" onClick={()=>onAddItem()}/>
                    </div>
                    




        </div>
    )
}