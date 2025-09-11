
import { isAuthenticated } from "@/server/auth/session";
import Analytics from "./_components/Analytics";
import { Suspense } from "react";
import LoadingSpinner from "@/ui/LoadingSpinner";





export default async function page() {

    await isAuthenticated()


    return (
        <div>
            <Suspense fallback={LoadingSpinner("analytics")}>
          <Analytics/>
            </Suspense>
  
        </div>
        
    )
}

