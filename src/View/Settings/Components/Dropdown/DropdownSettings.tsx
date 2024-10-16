import React from "react";
import './Styles.scss';
import { Link } from "react-router-dom";

interface DropdownSettingsProps {
    title: string
    link: string
}
const DropdownSettingsItem: React.FC<DropdownSettingsProps> = ({ title, link }) => {
    return (
        <Link to={link}>
            <div className="w-[200px] h-12 px-3 flex justify-start items-center hover:bg-orange-orange-50  flex-shrink-0">
                <span className="text-base text-gray-gray-300 leading-[24px] font-medium">{title}</span>
            </div>
        </Link>
    )
}
const DropdownSettings = () => {

    return (
        <div className="w-[200px] h-[144px] flex flex-col justify-center items-start rounded-xl DropdownSettingssetting">
            <DropdownSettingsItem title="Quản lý vai trò" link="/settings/role-management" />
            <DropdownSettingsItem title="Quản lý tài khoản" link="/settings/account-management" />
            <DropdownSettingsItem title="Nhật ký người dùng" link="/settings/userlog" />
        </div>
    );
};

export default DropdownSettings;