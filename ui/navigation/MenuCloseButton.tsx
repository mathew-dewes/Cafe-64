"use client"

import Image from "next/image"


export default function MenuCloseButton({onClick}:
    {onClick: React.MouseEventHandler<HTMLButtonElement>}
){
    return (
        <button onClick={()=>onClick} className="cursor-pointer sm:block">
            <Image width={42} height={24} alt="Menu close" src={'/close.png'}/>
        </button>
    )
}