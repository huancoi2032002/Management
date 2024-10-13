import React from "react";
import './Dropdown.scss';
import Rectangle from "../../../../components/Rectangle/Rectangle";

interface DropDownTimeIssueProps {
    timeIssue: string
}
const DropItem: React.FC<DropDownTimeIssueProps> = ({ timeIssue }) => {
    return (
        <div className="h-11 py-[10px] px-3 items-center gap-6 self-stretch bg-white cursor-pointer hover:bg-orange-orange-50">
            <span className="text-sm leading-[21px]">
                {timeIssue}
            </span>
        </div>
    )
}
const DropDownTimeIssue = () => {
    
    return (
        <div className="w-[238px] h-auto flex justify-center items-center rounded-lg dropdown relative z-20" >
            <div className="w-full py-2 flex flex-col items-start gap-[2px] flex-shrink-0 ">
                <DropItem timeIssue="Tất cả" />
                <DropItem timeIssue="07:10  01/10/2021" />
                <DropItem timeIssue="07:15  01/10/2021" />
                <DropItem timeIssue="07:28  01/10/2021" />
            </div>
            <div className="absolute right-1">
                <Rectangle height="64px" />
            </div>
        </div>
    );
};

export default DropDownTimeIssue;