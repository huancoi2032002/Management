import React from "react";
import './CardDashboard.scss';
import {Increase, Decrease } from "../../../../assets";

type CardDashboardProps = {
    ellipse: React.ReactNode
    icon: React.ReactNode
    title: string
    total: number
    percent: number
}


const CardDashboard: React.FC<CardDashboardProps> = ({ percent, title, total, icon, ellipse }) => { // Đây là card

    return (
        <div className="w-[186px] h-[120px] flex-shrink-0 carddashboard">
            <div className="w-full h-full py-2 px-3 flex flex-col justify-between">
                <div className="flex items-center gap-2">
                    <div className="relative w-[48px] h-[48px]">
                        {ellipse}
                        <div className="absolute top-0 w-[48px] h-[48px] flex justify-center items-center">
                            {icon}
                        </div>
                    </div>
                    <span className="text-gray-gray-400 font-nunito font-medium text-sm leading-[18px] text-wrap w-[64px] h-9">{title}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-gray-gray-400 font-nunito text-[30px] font-bold leading-[45px]">{total.toLocaleString('de-DE')}</span>
                    <div className={`w-12 flex-shrink-0 bg-[] tag-percent  ${percent > 0 ? "increase " : "decrease "}`}>
                        {percent > 0 ?
                            <div className="flex items-center"><Increase /> <span className="font-nunito text-[8px] leading-[12px] text-orange-orange-400">{percent}%</span></div>
                            :
                            <div className="flex items-center"><Decrease /> <span className="font-nunito text-[8px] leading-[12px] text-[#E73F3F]">{Math.abs(percent)}%</span></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDashboard;