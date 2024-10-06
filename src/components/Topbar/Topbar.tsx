import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, FocusBell } from "../../assets/dashboard";
import Avatar from "../../assets/avatar.jfif";
import DropDownNofitication from "./DropDownNofitication";


interface TopbarProps {

}

const Topbar: React.FC<TopbarProps> = () => { //Đây là topbar

    const [focusBell, setFocusBell] = useState(false); // Để thay đổi trạng thái đóng mở của Dropdown

    const handleOpen = () => {
        setFocusBell(prev => !prev)
    }

    return (
        <div className="w-[1240px] h-[88px] bg-transparent flex items-center justify-between pl-6 pr-[64px]">
            <div className="w-[120px] h-10 pr-[10px] flex items-center flex-shrink-0">
                <Link to="" className="text-orange-orange-400 font-nunito text-xl font-bold leading-[30px]">Dashboard</Link>
            </div>
            <div className="flex items-center gap-6 relative">
                {focusBell ?
                    <div className="flex justify-center items-center p-[6px] w-8 h-8 bg-orange-500 flex-shrink-0 cursor-pointer rounded-full" onClick={handleOpen}>
                        <FocusBell />
                    </div>
                    :
                    <div className="flex justify-center items-center p-[6px] w-8 h-8 bg-orange-50 flex-shrink-0 cursor-pointer rounded-full" onClick={handleOpen}>
                        <Bell />
                    </div>
                }
                <div className="flex gap-2 items-center">
                    <img src={Avatar} className="w-10 h-10 object-cover rounded-full" />
                    <div className="h-[42px] flex flex-col">
                        <span className="text-gray-gray-300 text-xs font-nunito leading-[18px]">Xin chào</span>
                        <span className="text-base font-nunito font-semibold leading-[24px] text-gray-gray-400">Lê Quỳnh Ái Vân</span>
                    </div>
                </div>
            </div>
            {focusBell && (
                <div className="absolute top-24 right-5">
                    <DropDownNofitication />
                </div>
            )}
        </div>
    );
}

export default Topbar;