import React, { useState } from "react";
import { DateIcon, PlayIcon } from "../../assets";
import DatePicker from "./DatePicker";

const DateFilter: React.FC = () => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    return (
        <div className="w-[280px] h-[72px] flex-shrink-0">
            <span className="text-gray-gray-500 text-base">Chọn thời gian</span>
            <div className="w-[280px] h-11 flex items-center gap-1">
                <div className="w-[130px] py-2 flex items-center justify-center gap-2 border-[1.5px] border-[#D4D4D7] rounded-lg bg-white">
                    <DateIcon className="w-5 h-5" />
                    <span className="text-gray-gray-200">10/10/2021</span>
                </div>
                <PlayIcon />
                <div className="w-[130px] py-2 flex items-center justify-center gap-2 border-[1.5px] border-[#D4D4D7] rounded-lg bg-white">
                    <DateIcon className="w-5 h-5" />
                    <span className="text-gray-gray-200">10/10/2021</span>
                </div>
            </div>
        </div>
    );
};

export default DateFilter;