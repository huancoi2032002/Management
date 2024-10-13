import React from "react";
import './Dropdown.scss';

interface DropdownSourceProps {
    source: string
}
const DropItem: React.FC<DropdownSourceProps> = ({ source }) => {
    return (
        <div className="h-11 py-[10px] px-3 items-center gap-6 self-stretch bg-white cursor-pointer hover:bg-orange-orange-50">
            <span className="text-sm leading-[21px]">
                {source}
            </span>
        </div>
    )
}
const DropdownSource = () => {
    
    return (
        <div className="w-[196px] h-auto flex justify-center items-center rounded-lg dropdown relative z-20" >
            <div className="w-full py-2 flex flex-col items-start gap-[2px] flex-shrink-0 ">
                <DropItem source="Tất cả" />
                <DropItem source="Kiosk" />
                <DropItem source="Hệ thống" />
            </div>
        </div>
    );
};

export default DropdownSource;