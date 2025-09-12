import { auth } from "@/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function isAuthenticated(){
        const session = await auth.api.getSession({
                headers: await headers()
            });
        
            if (!session) redirect('/dashboard/auth')
}

export async function getSession(){
          return await auth.api.getSession({
    headers: await headers(),
  });

}

    