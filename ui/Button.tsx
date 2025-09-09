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
            
<button type={submit ? "submit" : "button"} onClick={onClick}  
className={`text-white text-nowrap font-sans cursor-pointer bg-accent-500 hover:bg-accent-500/90 font-medium rounded-lg text-sm sm:text-base px-1.5 py-1.5 sm:px-2 sm:py-2
${danger ? "bg-red-400": ""}`}>
    {isPending ? isPendingText : text }</button>

        </div>
    )
}