

import Toast from "@/ui/ToastContainer"
import MobileNavigation from "../_components/MobileNavigation";





export default  function DashboardLayout({ children }: { children: React.ReactNode }) {


  
  

  return (
    <div>

    
      <main className="lg:flex-1 w-full lg:px-12 lg:mt-4 lg:pt-2">
        <h1 className="text-center lg:text-left">Dashboard</h1>
       <MobileNavigation/>
        {children}
      </main>
<Toast/>
    </div>
  )
}
