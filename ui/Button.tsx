"use client"

type ButtonProps = {
  text?: string;
  submit?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isPending?: boolean,
  isPendingText?: string,
  danger?: boolean
};

export default function Button(
    {
        text = "Button", 
        submit = false, 
        onClick, 
        isPending,
        danger, 
        isPendingText}: ButtonProps){
    return (
        <div>
            
<button disabled={isPending} type={submit ? "submit" : "button"} onClick={onClick}  
className={`text-white text-nowrap font-sans cursor-pointer bg-accent-500 hover:bg-accent-500/90 font-medium rounded-lg text-sm md:text-base px-1.5 py-1.5 md:px-2 md:py-2
${danger ? "bg-red-400": ""}`}>
    {isPending ? isPendingText : text }</button>

        </div>
    )
}