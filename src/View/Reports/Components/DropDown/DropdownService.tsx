import React from "react";
import './Dropdown.scss';
import Rectangle from "../../../../components/Rectangle/Rectangle";


interface DropdownServiceProps {
    serviceName: string
}
const DropItem: React.FC<DropdownServiceProps> = ({ serviceName }) => {
    return (
        <div className="w-full h-11 py-[10px] pl-3 pr-4 flex items-center justify-between gap-6 self-stretch bg-white cursor-pointer hover:bg-orange-orange-50">
            <span className="text-sm leading-[21px]">
                {serviceName}
            </span>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    className="w-5 h-5 appearance-none border-2 border-blue-500 checked:bg-blue-500 checked:border-blue-500 focus:ring-0 relative rounded-[4px]"
                    id="checkbox"
                />
            </div>


        </div>
    )
}
const DropdownService = () => {

    return (
        <div className="w-[232px] h-auto flex justify-center items-center dropdown relative rounded-lg z-20" >
            <div className="w-full py-2 flex flex-col items-start gap-[2px] flex-shrink-0 ">
                <DropItem serviceName="Tất cả" />
                <DropItem serviceName="2040001" />
                <DropItem serviceName="2060001" />
                <DropItem serviceName="2050002" />
            </div>
            <div className="absolute right-1">
                <Rectangle height="64px" />
            </div>
        </div>
    );
};

export default DropdownService;