
import Analytics from "./_components/Analytics";
import { Suspense } from "react";
import LoadingSpinner from "@/ui/LoadingSpinner";
import { isAuthenticated } from "@/lib/auth/session";





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

