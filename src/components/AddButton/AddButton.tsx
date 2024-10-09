import React from "react";
import './AddButton.scss';

interface AddButtonProps {
    icon: React.ReactNode;
    title: string;
}

const AddButton = (props: AddButtonProps) => { // Đây là nút add bên cạnh table
    return (
        <div className="w-auto h-auto py-3 px-1 inline-flex flex-col justify-center items-center gap-1 custom-addbutton cursor-pointer">
            {props.icon}
            <span className="w-[72px] font-nunito text-sm font-medium text-center text-orange-orange-500 text-wrap">{props.title}</span>
        </div>
    );
};

export default AddButton;
