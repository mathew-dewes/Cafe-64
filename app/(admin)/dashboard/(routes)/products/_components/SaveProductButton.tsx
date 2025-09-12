


export default function SaveButton({isPending}:{isPending?: boolean}){
    return(
           <button className="text-white text-nowrap font-sans cursor-pointer bg-accent-500 hover:bg-accent-500 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-accent-500 dark:hover:bg-blue-700">
            {isPending ? "Saving..." : "Save changes"}
           </button>

    )
}