import React from "react";
import './CardMenu.scss';
import CircleProcess from "../CircleProcess/CircleProcess";

interface CardMenuProps {
    circleSize?: number;
    percent?: number;
    duration?: number;
    offset?: number;
    fontColor?: string;
    circleColor?: string;
    circleInnerColor?: string;
    total: number;
    isActive: number;
}

const CardMenu: React.FC<CardMenuProps> = ({ total, isActive, ...props }) => {
    return (
        <div className="w-[353px] h-[83px] flex-shrink-0 cardmenu">
            <div>
                
            </div>
        </div>
    );
};

export default CardMenu;
