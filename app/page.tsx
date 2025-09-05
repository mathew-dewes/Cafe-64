
import prisma from "@/server/db/prisma";
import Button from "@/ui/Button";
import Link from "next/link";

export default async function page(){

  const users = await prisma.customer.findMany()

  console.log(users);
  

return (
  <div className="flex flex-col items-center">
    <p className="text-center text-xl">Welcome to Cafe 64</p>
          <p className="mt-5 text-2xl">Open Weekdays 7am - 3pm & Weekends 8:00am - 3pm</p>
    <div className="flex mt-20 gap-20">
      <Link href={'/menu'}><Button text="View menu"/></Link>

      <Link href={'/dashboard'}><Button text="View Dashboard"/></Link>
  
 
    </div>


  </div>
)
}