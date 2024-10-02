import React from "react";
import { DashboardIcon, MonitorIcon, DotRowIcon, MessageIcon, QuestionMarkIcon, ListIcon, ChartIcon, SettingIcon, ColDotIcon, LogOutIcon } from "../../assets/constrain";
import { Link } from "react-router-dom";
import { LogoAlta } from "../../assets/logo";
import './Menubar.scss'

// Đây là Menubar
type MenubarProps = {

}
type ItemMenuProps = {
    icon: React.ReactNode
    title: string
}

const SvgService = () => { //
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

const ItemMenu: React.FC<ItemMenuProps> = ({ icon, title }) => {
    return (
        <div className="w-[200px] h-[48px] px-3 rounded-lg flex justify-center items-center hover:bg-orange-orange-50 group">
            <Link to="" className="w-full h-full ">
                <div className="flex w-[176px] p-3 items-center gap-2 flex-shrink-0">
                    {icon}
                    <span className="text-gray-gray-300 font-medium text-base leading-[24px] font-nunito group-hover:text-orange-orange-500">{title}</span>
                </div>
            </Link>
        </div>
    )
}

const Menubar: React.FC<MenubarProps> = () => {
    return (
        <div className="w-[200px] h-full relative menubar">
            <div className="w-full h-auto flex items-center justify-center py-[60px]">
                <LogoAlta className="w-[88px] h-[64px]" />
            </div>
            <div className="w-full flex flex-col gap-[6px]">
                <ItemMenu icon={<DashboardIcon className="group-hover:stroke-orange-orange-500 " />} title="Dashboard" />
                <ItemMenu icon={<MonitorIcon className="group-hover:stroke-orange-orange-500 " />} title="Thiết bị" />
                <ItemMenu icon={<SvgService />} title="Dịch vụ" />
                <ItemMenu icon={<ListIcon className="group-hover:stroke-orange-orange-500 " />} title="Cấp số" />
                <ItemMenu icon={<ChartIcon className="group-hover:stroke-orange-orange-500 " />} title="Báo cáo" />
                <div className="w-[200px] h-[48px] px-3 rounded-lg flex justify-center items-center hover:bg-orange-orange-50 group">
                    <Link to="" className="w-full h-full ">
                        <div className="flex w-[176px] h-auto p-3  items-center gap-2 flex-shrink-0">
                            <SettingIcon className="group-hover:stroke-orange-orange-500 flex-shrink-0" />
                            <span className="text-gray-gray-300 font-medium text-xs leading-[24px] font-nunito group-hover:text-orange-orange-500">Cài đặt hệ thống</span>
                            <ColDotIcon className="group-hover:stroke-orange-orange-500 " />
                        </div>
                    </Link>
                </div>
            </div>

            <div className="absolute w-[200px] h-[48px] px-3 rounded-lg flex justify-center items-center bottom-[30px]">
                <Link to="" className="w-full h-full bg-orange-orange-50 group">
                    <div className="flex w-[176px] p-3  items-center gap-2 flex-shrink-0">
                        <LogOutIcon className="group-hover:stroke-orange-orange-500 " />
                        <span className="font-medium text-base leading-[24px] font-nunito text-orange-orange-500">Đăng xuất</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Menubar;