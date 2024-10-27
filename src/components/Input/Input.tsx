import React, { useState } from "react";
import { MicIcon } from "../../assets";

interface InputProps {
    type: 'TextInput' | 'Password' | 'TextInputBigForm';
    status: 'Pressing' | 'ReadOnly' | 'Hover';
    haveIcon: 'NoIcon' | 'LeftIcon' | 'RightIcon';
    placeholder?: string;
    width?: string;
    height?: string;
    value?: string;
}

const Input: React.FC<InputProps> = ({ type, status, haveIcon, placeholder, width, height, value }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const baseClass = "h-11 flex items-center pl-3 pr-4 py-[10px] flex-shrink-0 rounded-lg";

    const typeClasses = {
        TextInput: "text",
        Password: "password",
        TextInputBigForm: "text",
    };

    const getStatusClasses = () => {
        if (isFocused) {
            return "bg-white border border-Blue"; // Pressing when focused
        }
        if (isHovered) {
            return "bg-white border-[1.5px] border-gray-gray-100"; // Hover when hovered
        }
        return {
            Pressing: "bg-white border-[1.5px] border-[#4277FF]",
            ReadOnly: "bg-[#EAEAEC] cursor-not-allowed pointer-events-none",
            Hover: "bg-white border-[1.5px] border-[#D4D4D7]",
        }[status];
    };

    const iconInput = () => {
        const inputProps = {
            type: typeClasses[type],
            className: "bg-transparent outline-none",
            onFocus: () => setIsFocused(true),
            onBlur: () => setIsFocused(false),
            readOnly: status === "ReadOnly", // Make input read-only if status is "ReadOnly"
        };

        if (haveIcon === "NoIcon") {
            return (
                <div className="w-full">
                    <input {...inputProps} placeholder={placeholder} value={value} className="w-full outline-none text-gray-gray-300 leading-[18px] bg-transparent" />
                </div>
            );
        } else if (haveIcon === "LeftIcon") {
            return (
                <div className="flex items-center gap-3">
                    <MicIcon />
                    <input {...inputProps} placeholder={placeholder} value={value} className="w-full outline-none text-gray-gray-300 leading-[18px] bg-transparent" />
                </div>
            );
        } else if (haveIcon === "RightIcon") {
            return (
                <div className="flex items-center justify-between">
                    <input {...inputProps} placeholder={placeholder} value={value} className="w-full outline-none text-gray-gray-300 leading-[18px] bg-transparent" />
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
            style={{ width: width, height: height }}
        >
            {iconInput()}
        </div>
    );
};

export default Input;
