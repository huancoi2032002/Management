import React from 'react';
import { PlusIcon, XIcon } from '../../assets';

interface ButtonProps {
    title?: string;
    type: 'Disable' | 'Enable' | 'Hover' | 'Pressing';
    size: 'Small' | 'Normal' | 'Medium';
    skin: 'Fill' | 'Outline' | 'NoFill';
    icon?: 'NoIcon' | 'OnlyIcon' | 'WithIcon';
    style?: React.CSSProperties;
    onClick?: () => void;
    isTag?: boolean;
    width?: string; // thêm prop width
}

const Button: React.FC<ButtonProps> = ({ type, size, skin, icon, style, isTag, onClick, title, width }) => {
    const baseClass = `w-full inline-flex items-center justify-center rounded-lg transition duration-300 gap-2 flex-shrink-0`;

    const typeClasses = {
        Disable: "bg-gray-blue-gray-3 cursor-not-allowed",
        Enable: "bg-orange-orange-300",
        Hover: "bg-orange-orange-400",
        Pressing: "bg-orange-orange-500",
    };

    const sizeClasses = {
        Small: `text-sm font-bold ${isTag ? 'text-sm' : ''}`,
        Normal: `text-base font-bold ${isTag ? 'text-sm' : ''}`,
        Medium: `text-lg font-bold ${isTag ? 'text-sm' : ''}`
    };

    const borderColor = {
        Disable: "border-gray-blue-gray-3",
        Enable: "border-orange-orange-300",
        Hover: "border-orange-orange-400",
        Pressing: "border-orange-orange-500"
    };

    const textColor = {
        Disable: "text-gray-blue-gray-3",
        Enable: "text-orange-orange-300",
        Hover: "text-orange-orange-400",
        Pressing: "text-orange-orange-500"
    };

    const skinClass = () => {
        if (skin === "Fill") {
            return `text-white`; // Màu chữ trắng cho skin Fill
        } else if (skin === "Outline") {
            return `border ${borderColor[type]} ${textColor[type]} bg-white`;
        } else if (skin === "NoFill") {
            return `bg-white ${textColor[type]}`; // Màu chữ cho chế độ NoFill
        }
        return ""; // Đảm bảo có giá trị trả về
    };

    const iconButton = () => {
        if (icon === "NoIcon") {
            return <span className="py-[10px] px-6 text-base font-bold leading-[24px]">{title}</span>
        } else if (icon === "WithIcon") {
            if (isTag) {
                return <div className="flex gap-2 py-[10px] px-3 items-center justify-center">{title} {<XIcon />}</div>
            } else {
                return <div className="flex gap-2 py-[10px] px-6 items-center justify-center">{<PlusIcon />}{title} </div>
            }
        } else if (icon === "OnlyIcon") {
            return <div className="flex gap-2 p-[10px] items-center justify-center">{<PlusIcon />}</div>
        }
    }

    const buttonClasses = `${baseClass} ${isTag ? 'h-8 rounded-[32px]' : ''} ${typeClasses[type]}  ${sizeClasses[size]} ${skinClass()}`;

    return (
        <div className="button" style={{ width }}> 
            <button className={buttonClasses} style={style} onClick={onClick} disabled={type === 'Disable'}>
                {iconButton()}
            </button>
        </div>
    );
}

export default Button;  //Cấu hình nút button có các kiểu định dạng khác nhau
