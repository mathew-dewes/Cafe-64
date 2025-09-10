"use client"


import { authClient } from '@/server/auth/auth-client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from 'react-hook-form'
import z from 'zod';


const schema = z.object({
    email: z.email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be 8 of more characters").max(20, "Password must be 20 characters or less")
})

type FormFields = z.infer<typeof schema>;

export default function LoginForm() {
    const router = useRouter();
    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<FormFields>({
        resolver: zodResolver(schema)

    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const { email, password } = data;

        try {

            await authClient.signIn.email({
                email, password
            }, {
                onError: ({ error }) => {
                    throw new Error(error.message)
                },
                onSuccess: () => {
                    router.push("/dashboard/analytics")
                }
            })
        } catch (error) {            
            setError("root", {
             message: error instanceof Error ? error.message : "Something went wrong"
            })
        }


    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 text-center lg:text-left">
            <div>
                <input defaultValue={"cafe64@admin.com"} {...register("email")} placeholder='Email' type="text" className="border rounded p-1" />
                {errors.email &&
                    <div className='text-red-500 mt-1'>{errors.email.message}</div>
                }
            </div>



            <div className='mt-2'>
                <input defaultValue={"ilikepies"} {...register("password")} placeholder='Password' type="password" className="border rounded p-1" />
                {errors.password &&
                    <div className='text-red-500 mt-1'>{errors.password.message}</div>
                }
            </div>

    {errors.root &&
                <div className='text-red-500 mt-1'>{errors.root.message}</div>
            }



            <button disabled={isSubmitting} className="bg-accent-500 text-white p-2 rounded mt-10 cursor-pointer">
                {isSubmitting ? "Signing in" : "Sign in"}</button>
        


        </form>
    )
}