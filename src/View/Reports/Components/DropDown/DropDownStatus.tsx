import React from "react";
import './Dropdown.scss';

interface DropDownStatusProps {
    status: string
}
const DropItem: React.FC<DropDownStatusProps> = ({ status }) => {
    return (
        <div className="h-11 py-[10px] px-3 items-center gap-6 self-stretch bg-white cursor-pointer hover:bg-orange-orange-50">
            <span className="text-sm leading-[21px]">
                {status}
            </span>
        </div>
    )
}
const DropDownStatus = () => {
    
    return (
        <div className="w-[216px] h-auto flex justify-center items-center dropdown relative z-20 rounded-lg" >
            <div className="w-full py-2 flex flex-col items-start gap-[2px] flex-shrink-0 ">
                <DropItem status="Tất cả" />
                <DropItem status="Đang chờ" />
                <DropItem status="Đã sử dụng" />
                <DropItem status="Bỏ qua" />
            </div>
        </div>
    );
};

export default DropDownStatus;