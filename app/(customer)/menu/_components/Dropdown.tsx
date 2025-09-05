import { Milk_type, Sugar_level } from "@/app/generated/prisma";
import { milkType, sugarLevel } from "./constants";

type DropdownProps = {
  type: "milk" | "sugar";
  onChange?: (value: string) => void;
    value?: Milk_type | Sugar_level;
};

export default function Dropdown({type, onChange, value}:DropdownProps){
    let dropDownType;

    if (type === "milk"){
        dropDownType = milkType
    } else{
        dropDownType = sugarLevel


    }  
    


         const defaultValues = type === "milk" ?  "whole" : "less";
    return(
        <div className="flex items-center gap-3">
            <label className="font-semibold text-lg">{type == "milk" ? "Milk type" : "Sugar level"}:</label>
            <select defaultValue={defaultValues} value={value} onChange={(e) => onChange?.(e.target.value)} className="border border-black px-1 py-2 rounded" name={type}>
                {dropDownType.map((type, key)=>{
                    
                    return <option key={key} className="text-black border" value={type.value}>{type.text}</option>
                })}
    
            </select>
        </div>
    )
}