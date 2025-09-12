
import Analytics from "./_components/Analytics";
import { Suspense } from "react";
import LoadingSpinner from "@/ui/LoadingSpinner";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";





export default async function page() {

        const session = await auth.api.getSession({
            headers: await headers()
        });
    
        if (!session){
            redirect('/dashboard/auth')
        }

    return (
        <div>
            <Suspense fallback={LoadingSpinner("analytics")}>
          <Analytics/>
            </Suspense>
  
        </div>
        
    )
}

