import React from "react";
import { CloseIcon } from "../../../../assets";

interface PopupProps {
    onClose: () => void
}

const Popup:React.FC<PopupProps> = ({onClose}) => {

    return (
        <div className="fixed inset-0 w-full h-full bg-black/50 z-50 flex justify-center items-center">
            <div className="w-[469px] h-[385px] bg-white rounded-[24px] flex flex-col relative overflow-hidden">
                <div className="absolute right-4 top-4 w-6 h-6 cursor-pointer" onClick={onClose}>
                    <CloseIcon />
                </div>
                <div className="w-full flex flex-col gap-6 flex-grow justify-center items-center">
                    <span className="text-[32px] font-semibold leading-[48px] text-gray-gray-400">Số thứ tự được cấp</span>
                    <span className="text-[56px] font-semibold leading-[48px] text-orange-orange-500">2001201</span>
                    <span className="text-gray-gray-500 text-lg">
                        DV: Khám răng hàm mặt <span className="font-semibold">(tại quầy số 1)</span>
                    </span>
                </div>
                <div className="w-full h-[110px] inline-flex px-[67px] py-4 flex-col justify-center items-start gap-3 bg-orange-orange-400">
                    <div className="grid grid-cols-2">
                        <span className="text-white text-xl font-semibold leading-[33px]">Thời gian cấp</span>
                        <span className="text-white text-xl font-semibold leading-[33px]">09:30 11/10/2021</span>
                    </div>
                    <div className="grid grid-cols-2">
                        <span className="text-white text-xl font-semibold leading-[33px]">Hạn sử dụng</span>
                        <span className="text-white text-xl font-semibold leading-[33px]">17:30 11/10/2021</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Popup;