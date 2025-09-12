"use client"


import { authClient } from "@/lib/auth/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";


const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be 8 of more characters").max(20, "Password must be 20 characters or less")
});

type FormFields = z.infer<typeof schema>;


export default function RegisterForm() {
    const router = useRouter();
    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<FormFields>({
        resolver: zodResolver(schema)

    });

    const onSubmit: SubmitHandler<FormFields> = async(data)=>{
        const {name, email, password} = data;
        console.log(name, email, password);

        try {
            await authClient.signUp.email({
                name, email, password
            },{
                onError: ({error})=>{
                    throw new Error(error.message)
                },
                onSuccess: ()=>{
                    router.push("/discover")
                }
            })
        } catch (error) {
                   setError("root", {
             message: error instanceof Error ? error.message : "Something went wrong"
            })
        }
        
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
            <div>
                <div>
                    <input {...register("name")} type="text" placeholder="Enter name" className="border rounded p-1" />
                    {errors.name && 
                    <p className="mt-1 text-red-500">{errors.name?.message}</p>
                    }
                </div>
                <div className="mt-2">
                    <input {...register("email")} name="email" placeholder="Enter email" type="email" className="border rounded p-1" />
        {errors.email && 
                    <p className="mt-1 text-red-500">{errors.email?.message}</p>
                    }
                </div>




                <div className="mt-2">
                    <input {...register("password")} name="password" type="password" placeholder="Enter password" className="border rounded p-1" />
        {errors.password && 
                    <p className="mt-1 text-red-500">{errors.password?.message}</p>
                    }
                </div>
                    {errors.root &&
                <div className='text-red-500 mt-1'>{errors.root.message}</div>
            }


            </div>


            <button disabled={isSubmitting} className="bg-accent-500 text-white p-2 rounded mt-10 cursor-pointer">{isSubmitting ? "Signing up" : "Sign up"}</button>


        </form>
    )
}