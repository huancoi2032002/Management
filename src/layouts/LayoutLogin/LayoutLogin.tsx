import React from "react";
import './LayoutLogin.scss';

interface LayoutLoginProps {
    children: React.ReactNode
}

const LayoutLogin: React.FC<LayoutLoginProps> = ({ children }) => { // Đay là Layout của trang Login và ForgetPassword
    return (
        <div className="bg-black w-full h-screen flex justify-center items-center">
            <div className="w-[1440px] h-[810px] bg-[#F6F6F6] rounded-2xl relative flex-shrink-0 overflow-hidden">
                {children}
            </div>
        </div>
    );
}

export default LayoutLogin;