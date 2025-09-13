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
className={`text-white text-nowrap cursor-pointer bg-accent-500 hover:bg-accent-500/90 font-normal rounded-lg text-md md:text-base px-2.5 py-2 md:px-2 md:py-2
${danger ? "bg-red-400": ""}`}>
    {isPending ? isPendingText : text }</button>

        </div>
    )
}