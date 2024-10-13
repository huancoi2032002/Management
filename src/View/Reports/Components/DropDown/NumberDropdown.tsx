import React from "react";
import './Dropdown.scss';
import Rectangle from "../../../../components/Rectangle/Rectangle";

interface NumberDropdownProps {
    stt: string
}

const DropItem: React.FC<NumberDropdownProps> = ({ stt }) => {
    return (
        <div className="h-11 py-[10px] px-3 items-center gap-6 self-stretch bg-white cursor-pointer hover:bg-orange-orange-50">
            <span className="text-sm leading-[21px]">
                {stt}
            </span>
        </div>
    )
}

const NumberDropdown = () => {

    return (
        <div className="w-[226px] h-auto flex justify-center items-center rounded-lg dropdown relative z-30" >
            <div className="w-full py-2 flex flex-col items-start gap-[2px] flex-shrink-0 ">
                <DropItem stt="Tất cả" />
                <DropItem stt="2040001" />
                <DropItem stt="2060001" />
                <DropItem stt="2050002" />
            </div>
            <div className="absolute right-1">
                <Rectangle height="64px" />
            </div>
        </div>
    );
};

export default NumberDropdown;