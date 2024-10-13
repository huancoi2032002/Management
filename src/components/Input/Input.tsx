import React, { useState } from "react";
import { MicIcon } from "../../assets";

interface InputProps {
    type: 'TextInput' | 'Password' | 'TextInputBigForm';
    status: 'Pressing' | 'ReadOnly' | 'Hover';
    haveIcon: 'NoIcon' | 'LeftIcon' | 'RightIcon';
    placeholder: string
    width?: string
    height?: string
}

const Input: React.FC<InputProps> = ({ type, status, haveIcon, placeholder, width, height }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const baseClass = "h-11 flex items-center pl-3 pr-4 py-[10px] flex-shrink-0 bg-white border-[1.5px] border-gray-gray-100 rounded-lg";

    const typeClasses = {
        TextInput: "text",
        Password: "password",
        TextInputBigForm: "TextInputBigForm",
    };

    const getStatusClasses = () => {
        if (isFocused) {
            return "bg-white border border-Blue"; // Pressing khi focus
        }
        if (isHovered) {
            return "bg-white border-[1.5px] border-gray-gray-100"; // Hover khi hover
        }
        return {
            Pressing: "bg-white border border-Blue",
            ReadOnly: "bg-gray-gray-100 Disable",
            Hover: "bg-white border-[1.5px] border-gray-gray-100",
        }[status]; 
    };

    const iconInput = () => {
        const inputProps = {
            type: typeClasses[type],
            className: "bg-transparent outline-none",
            onFocus: () => setIsFocused(true),
            onBlur: () => setIsFocused(false),
        };

        if (haveIcon === "NoIcon") {
            return (
                <div className="w-full">
                    <input {...inputProps} placeholder={placeholder} className="w-full outline-none text-gray-gray-300 leading-[18px]"/>
                </div>
            );
        } else if (haveIcon === "LeftIcon") {
            return (
                <div className="flex items-center gap-3">
                    <MicIcon />
                    <input {...inputProps} placeholder={placeholder} className="w-full outline-none text-gray-gray-300 leading-[18px]"/>
                </div>
            );
        } else if (haveIcon === "RightIcon") {
            return (
                <div className="flex items-center justify-between">
                    <input {...inputProps} placeholder={placeholder} className="w-full outline-none text-gray-gray-300 leading-[18px]"/>
                    <MicIcon />
                </div>
            );
        }
    };

    const inputClasses = `${baseClass} ${getStatusClasses()}`;

    return (
        <div
            className={inputClasses}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{width: width, height: height}}
        >
            {iconInput()}
        </div>
    );
};

export default Input;
