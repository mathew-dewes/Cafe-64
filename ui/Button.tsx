"use client"

type ButtonProps = {
  text?: string;
  submit?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isPending?: boolean,
  isPendingText?: string
};

export default function Button(
    {
        text = "Button", 
        submit = false, 
        onClick, 
        isPending, 
        isPendingText}: ButtonProps){
    return (
        <div>
            
<button type={submit ? "submit" : "button"} onClick={onClick}  className="text-white text-nowrap font-sans cursor-pointer bg-accent-500 hover:bg-accent-500 font-medium rounded-lg text-md px-2 py-2">
    {isPending ? isPendingText : text }</button>

        </div>
    )
}