"use client"

import z from "zod";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { useCartStore } from "../../_hooks/cart-store";
import Button from "@/ui/Button";
import { AddCustomer } from "@/server/mutations/customer";






const schema = z.object({
    firstName: z.string().min(1, "First name is required").max(20, "First name must be 20 characters or less"),
    lastName: z.string().min(1, "Last name is required").max(20, "Last name must be 20 characters or less"),
    email: z.email("Please enter a valid email address"),
    phone: z.string().min(1, "Phone number is required").max(15, "Please enter a valid phone number")
});

type FormFields = z.infer<typeof schema>;







export default function OrderForm() {
      const {clearCart } = useCartStore();
      const router = useRouter();
      const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({
        resolver: zodResolver(schema)

    });

    async function clearAndRedirect(href: string){
    clearCart();
    router.push(href)
}

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        
        const {firstName, lastName, email, phone} = data;
        const newCustomer = await AddCustomer(firstName, lastName, email, phone);
        if (!newCustomer) return
        redirect(`/checkout/payment/${newCustomer.id}`)


    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 flex flex-col gap-5 w-60">
            <div>
                <input {...register("firstName")} placeholder="First name" className="appearance-none border focus:ring-3 focus:outline-none rounded p-2 focus:ring-accent-500" type="text" name="firstName" />
                {errors.firstName?.message && <p className="text-red-500 font-medium mt-2">{errors.firstName?.message}</p>}

            </div>

            <div>
                <input {...register("lastName")} placeholder="Last name" className="appearance-none border focus:ring-3 focus:outline-none rounded p-2 focus:ring-accent-500" type="text" name="lastName" />
                {errors.lastName?.message && <p className="text-red-500 font-medium mt-2">{errors.lastName?.message}</p>}

            </div>


            <div>
                <input {...register("email")} placeholder="Email" className="appearance-none border focus:ring-3 focus:outline-none rounded p-2 focus:ring-accent-500" type="text" name="email" />
                {errors.email?.message && <p className="text-red-500 font-medium mt-2">{errors.email?.message}</p>}
            </div>
            <div>
                <input {...register("phone")} placeholder="Phone" className="appearance-none border focus:ring-3 focus:outline-none rounded p-2 focus:ring-accent-500" type="number" name="phone" />
                {errors.phone?.message && <p className="text-red-500 font-medium mt-2">{errors.phone?.message}</p>}
            </div>

        <div className="flex mt-5 gap-30">
  <Button submit={true} text="Confirm" />
  <div className="flex gap-2">
    <Link href={'/menu'}><Button text="Go back"/></Link>

       
       <Button text="Cancel" onClick={()=>clearAndRedirect('/menu')}/>
  

  </div>
 
        </div>
          
        </form>
    )
}