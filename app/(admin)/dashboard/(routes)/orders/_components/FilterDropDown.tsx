"use client"

import { FilterDropdownProps } from "@/lib/types/types"
import { usePathname, useRouter, useSearchParams } from "next/navigation";





export default function FilterDropdown({ fields, name, defaultValue }: FilterDropdownProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set(e.target.name, e.target.value);
    router.push(`${pathname}?${newParams.toString()}`);
  };

    return (
        <div className="flex gap-2 items-center">
     
                    <select onChange={handleChange} defaultValue={defaultValue} name={name} className="border px-4 py-2 rounded">
                        {fields.map((field)=>{
                            return <option value={field.value} key={field.value} className="dark:text-black">{field.text}</option>
                        })}


            


                    </select>
                
   

        </div>
    )
}