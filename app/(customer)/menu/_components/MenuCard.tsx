"use client"



import { useState } from "react";


import { Drink_size, Milk_type, Sugar_level } from "@/app/generated/prisma";
import { useCartStore } from "../../_hooks/cart-store";
import Dropdown from "./Dropdown";
import Button from "@/ui/Button";

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
        <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="mt-3 max-w-3xl text-sm font-light">{description}</p>
            <p className="mt-2"><b>Price:</b> ${displayPrice}</p>
            <p className="mt-2"><b>Cart quantity:</b> {quantity}</p>

            <div className="mt-8 flex  gap-5">
                <Dropdown  onChange={(v) => setMilk(v as Milk_type)} type="milk" />
                <Dropdown  onChange={(v) => setSugar(v as Sugar_level)} type="sugar" />
         
                
               


            </div>
    <div className="flex gap-2 mt-5">
                   <Dropdown onChange={(v)=> setSize(v as Drink_size)} type="size" />



                    </div>
                    <div className="mt-10">

                        <Button text="Add" onClick={()=>onAddItem()}/>
                    </div>
                    




        </div>
    )
}