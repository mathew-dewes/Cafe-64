

import Button from "@/ui/Button";
import Image from "next/image";
import Link from "next/link";


export default async function page(){


  

return (
  <div className="flex flex-col items-center">
    <div className="mt-5">
    <h1 className="text-center text-3xl">Welcome to Cafe64</h1>
    <Image className="mt-5" src={'/cafe.jpg'} height={300} width={600} alt="Coffee image"/>
    </div>

          <p className="mt-5 text-lg">Open Weekdays 7am - 3pm & Weekends 8:00am - 3pm</p>
    <div className="flex mt-20 gap-20">
      <Link href={'/menu'}><Button text="View menu"/></Link>

      <Link href={'/dashboard'}><Button text="View Dashboard"/></Link>
  
 
    </div>


  </div>
)
}