import React from "react";
import './Styles.scss'
import { Link } from "react-router-dom";

interface DropDownNofiticationProps {

}

const CartNoti = () => {
    return (
        <Link to="">
            <div className="w-[360px] h-20 flex flex-col justify-center cursor-pointer hover:bg-orange-50 group relative">
                <h1 className="text-orange-orange-600 font-base font-semibold leading-[24px] font-nunito ml-6">Người dùng: Nguyễn Thị Thùy Dung</h1>
                <span className="text-gray-gray-400 font-base leading-[24px] font-nunito ml-6">Thời gian nhận số: 12h20 ngày 30/11/2021</span>
                <div className="h-[1.5px] w-[320px] bg-[#D4D4D7]/60 ml-5 bottom-0 absolute group-hover:hidden"></div>
            </div>
        </Link>
    )
}

const DropDownNofitication: React.FC<DropDownNofiticationProps> = () => {
    return (
        <div className="w-[360px] h-[525px] flex-shrink-0 notification overflow-hidden relative">
            <div className="w-full pl-[24px] py-[9px] bg-orange-orange-400">
                <h1 className="font-nunito text-xl font-bold leading-[30px] text-[#FFF] text-nowrap">Thông báo</h1>
            </div>
            <div className="overflow-y-auto h-full hide-scrollbar pb-[48px]">
                <CartNoti />
                <CartNoti />
                <CartNoti />
                <CartNoti />
                <CartNoti />
                <CartNoti />
                <CartNoti />
                <CartNoti />
                <CartNoti />
                <CartNoti />
                <CartNoti />
                <CartNoti />
                <CartNoti />
            </div>
            <div className="absolute top-[87px] right-1">
                <div className="w-1 h-[340px] flex-shrink-0 rounded-[43px] bg-orange-orange-200">
                    
                </div>
            </div>
        </div>
    );
}

export default DropDownNofitication;