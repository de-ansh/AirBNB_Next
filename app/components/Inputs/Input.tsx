'use client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface INputProps{
    id:String;
    label: String;
    type?: String;
    disabled?: boolean;
    formatprice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
}

const Input:React.FC<INputProps> = ({
    id,
    label,
    type= "text",
    formatprice,
    required,
    register,
    errors
    
}) => {
    return ( 
        <div className="w-full relative ">
            {formatprice && ( <BiDollar size= {24} className="text-neutral-700 absolute top-5 left-2   "/>)}
        </div>
     );
}
 
export default Input;
