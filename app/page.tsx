

import { getSession } from "@/lib/auth/session";
import Button from "@/ui/Button";
import Image from "next/image";
import Link from "next/link";


export default async function page(){

  const session = await getSession()




  

return (
  <div className="flex flex-col items-center">
    <div className="mt-5">
    <h1 className="text-center sm:text-4xl">Cafe 64</h1>
    <Image className="mt-5" src={'/cafe.jpg'} height={300} width={600} alt="Coffee image"/>
    </div>
    <p className="text-2xl font-semibold mt-5 text-center">Where great coffee meets good company</p>

          <p className="mt-5 text-center">Open Weekdays 7am - 3pm & Weekends 8:00am - 3pm</p>
    <div className="flex mt-20 gap-5 md:gap-30">
      <Link href={'/menu'}><Button text="Place order"/></Link>

{session && <Link href={'/dashboard/auth'}><Button text="View Dashboard"/></Link>}


   


  
 
    </div>


  </div>
)
}