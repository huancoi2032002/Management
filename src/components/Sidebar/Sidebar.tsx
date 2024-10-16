import React from "react";
import { DashboardIcon, MonitorIcon, DotRowIcon, MessageIcon, QuestionMarkIcon, ListIcon, ChartIcon, SettingIcon, ColDotIcon, LogOutIcon } from "../../assets/constrain";
import { Link, useLocation } from "react-router-dom";
import { LogoAlta } from "../../assets/logo";
import './Sidebar.scss'
import DropdownSettings from "../../View/Settings/Components/Dropdown/DropdownSettings";

// Đây là Sidebar
type SidebarProps = {
    isActive: boolean;
}
type ItemMenuProps = {
    icon: React.ReactElement;
    title: string;
    link: string;
    isActive: boolean;
};


export const SvgService = () => { //
    return (
        <div className="relative">
            <div className="absolute bottom-[4px] left-[3px]">
                <DotRowIcon className="group-hover:stroke-orange-orange-500" />
            </div>
            <div>
                <MessageIcon className="group-hover:stroke-orange-orange-500" />
            </div>
            <div className="absolute bottom-[10px] left-[11px]">
                <QuestionMarkIcon className="group-hover:stroke-orange-orange-500" />
            </div>
        </div>
    )
}
type ItemSettingProps = {
    icon1: React.ReactElement;
    icon2: React.ReactElement;
    title: string;
    link: string;
    isActive: boolean;
};
const ItemMenu: React.FC<ItemMenuProps> = ({ icon, title, link, isActive }) => {
    return (
        <div className={`w-[200px] h-[48px] px-3 rounded-lg flex justify-center items-center ${isActive ? 'bg-orange-orange-500 text-white' : 'hover:bg-orange-orange-50 group'}`}>
            <Link to={link} className="w-full h-full">
                <div className="flex w-[176px] p-3 items-center gap-2 flex-shrink-0">
                    {React.cloneElement(icon, { className: isActive ? 'stroke-white' : '' })}
                    <span className={`font-medium text-base leading-[24px] font-nunito ${isActive ? 'text-white' : 'text-gray-gray-300 group-hover:text-orange-orange-500'}`}>{title}</span>
                </div>
            </Link>
        </div>
    );
};

const ItemSettings: React.FC<ItemSettingProps> = ({ icon1, icon2, title, link, isActive }) => {
    return (
        <div className={`relative w-[200px] h-[48px] px-3 rounded-lg flex justify-center items-center group ${isActive ? 'bg-orange-orange-500 text-white' : 'hover:bg-orange-orange-50'}`}>
            <Link to={link} className="w-full h-full">
                <div className="flex w-[176px] h-auto p-3 items-center gap-2 flex-shrink-0">
                    {React.cloneElement(icon1, { className: `flex-shrink-0 ${isActive ? 'stroke-white group-hover:stroke-white' : ''} group-hover:stroke-orange-orange-500` })}
                    <span className={`font-medium text-sm leading-[24px] font-nunito ${isActive ? 'text-white' : 'text-gray-gray-300 group-hover:text-orange-orange-500'}`}>
                        {title}
                    </span>
                    {React.cloneElement(icon2, { className: `flex-shrink-0 ${isActive ? 'stroke-white group-hover:stroke-white' : ''} group-hover:stroke-orange-orange-500` })}
                </div>
            </Link>

            {/* Dropdown */}
            <div className="absolute w-[200px] top-[-8px] right-[-200px] mt-2 bg-white hidden group-hover:block shadow-lg rounded-lg z-30">
                <DropdownSettings />
            </div>
        </div>
    );
};



const Sidebar: React.FC<SidebarProps> = ({ isActive }) => {
    const location = useLocation(); // Lấy đường dẫn hiện tại

    return (
        <div className="w-[200px] h-full relative sidebar">
            <div className="w-full h-auto flex items-center justify-center py-[60px]">
                <LogoAlta className="w-[88px] h-[64px]" />
            </div>
            <div className="w-full flex flex-col gap-[6px]">
                <ItemMenu icon={<DashboardIcon className="group-hover:stroke-orange-orange-500 " />} title="Dashboard" link="/dashboard" isActive={location.pathname.startsWith("/dashboard")} />
                <ItemMenu icon={<MonitorIcon className="group-hover:stroke-orange-orange-500 " />} title="Thiết bị" link="/device" isActive={location.pathname.startsWith("/device")} />
                <ItemMenu icon={<SvgService />} title="Dịch vụ" link="/service" isActive={location.pathname.startsWith("/service")} />
                <ItemMenu icon={<ListIcon className="group-hover:stroke-orange-orange-500 " />} title="Cấp số" link="/progression" isActive={location.pathname.startsWith("/progression")} />
                <ItemMenu icon={<ChartIcon className="group-hover:stroke-orange-orange-500 " />} title="Báo cáo" link="/reports" isActive={location.pathname.startsWith("/reports")} />
                <ItemSettings icon1={<SettingIcon />} icon2={<DotRowIcon />} title="Cài đặt hệ thống" link="/settings" isActive={location.pathname.startsWith("/settings")} />
            </div>

            <div className="absolute w-[200px] h-[48px] px-3 rounded-lg flex justify-center items-center bottom-[30px]">
                <Link to="" className="w-full h-full bg-orange-orange-50 group">
                    <div className="flex w-[176px] p-3 items-center gap-2 flex-shrink-0">
                        <LogOutIcon className="group-hover:stroke-orange-orange-500 " />
                        <span className="font-medium text-base leading-[24px] font-nunito text-orange-orange-500">Đăng xuất</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}



export default Sidebar;