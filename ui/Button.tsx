

export default function Button({text = "Button", submit = false}:{text?: string, submit?: boolean}){
    return (
        <div>
            
<button type={submit ? "submit" : "button"} className="text-white text-nowrap font-sans cursor-pointer bg-accent-500 hover:bg-accent-500 font-medium rounded text-md px-2 py-2">{text}</button>

        </div>
    )
}