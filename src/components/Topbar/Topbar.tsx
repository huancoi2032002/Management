import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell, FocusBell } from "../../assets/dashboard";
import Avatar from "../../assets/avatar.jfif";
import DropDownNofitication from "./DropDownNofitication";
import { AngleRight, AngleRightIcon } from "../../assets";

interface Breadcrumb {
    title: string;
    path: string;
}

interface TopbarProps { }

const Topbar: React.FC<TopbarProps> = () => {
    const [focusBell, setFocusBell] = useState(false);
    const location = useLocation();

    const handleOpen = () => {
        setFocusBell(prev => !prev);
    };

    const titleMap: { [key: string]: string } = {
        'add-device': 'Thêm thiết bị',
        // Thêm các đường dẫn khác và tiêu đề của chúng ở đây
    };

    const getBreadcrumbs = (): Breadcrumb[] => {
        const pathParts = location.pathname.split('/').filter(part => part);
        const breadcrumbs: Breadcrumb[] = [];
        let currentPath = '';

        // Thiết lập breadcrumb mặc định cho từng trang
        if (pathParts.includes('device')) {
            breadcrumbs.push({ title: 'Thiết bị', path: '/device' });
            breadcrumbs.push({ title: 'Danh sách thiết bị', path: '/device' });
            if (pathParts.includes('devicemanagement')) {
                breadcrumbs.push({ title: 'Thêm thiết bị', path: '/device/devicemanagement' });
            }
            if (pathParts.includes('updatedevice')) {
                breadcrumbs.push({ title: 'Cập nhật thiết bị', path: '/device/updatedevice' });
            }
            if (pathParts.includes('devicedetail')) {
                breadcrumbs.push({ title: 'Chi tiết thiết bị', path: '/device/devicedetail' });
            }
        } else if (pathParts.includes('service')) {
            breadcrumbs.push({ title: 'Dịch vụ', path: '/service' });
            breadcrumbs.push({ title: 'Danh sách dịch vụ', path: '/service' });
        } else if (pathParts.includes('numbering')) {
            breadcrumbs.push({ title: 'Cấp số', path: '/numbering' });
            breadcrumbs.push({ title: 'Danh sách cấp số', path: '/numbering' });
        } else if (pathParts.includes('report')) {
            breadcrumbs.push({ title: 'Báo cáo', path: '/report' });
            breadcrumbs.push({ title: 'Danh sách báo cáo', path: '/report' });
        } else {
            // Nếu không có điều kiện nào khớp, xây dựng breadcrumb theo đường dẫn
            pathParts.forEach((part, index) => {
                currentPath += `/${part}`;
                const title = titleMap[part] || part.charAt(0).toUpperCase() + part.slice(1);
                breadcrumbs.push({ title, path: currentPath });
            });
        }

        return breadcrumbs;
    };




    const breadcrumbs = getBreadcrumbs();

    return (
        <div className="w-[1240px] h-[88px] bg-transparent flex items-center justify-between pl-6 pr-[64px]">
            <div className="flex items-center">
                <div className="flex items-center gap-2">
                    {breadcrumbs.map((crumb, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <Link
                                to={crumb.path}
                                className={`font-nunito text-base ${index === breadcrumbs.length - 1
                                    ? 'text-orange-orange-500 text-xl'
                                    : 'text-gray-gray-300 text-xl hover:text-orange-orange-500'
                                    }`}
                            >
                                {crumb.title}
                            </Link>
                            {index < breadcrumbs.length - 1 && <AngleRightIcon className="w-3 h-3 fill-gray-gray-300" />}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-6 relative">
                {focusBell ? (
                    <div className="flex justify-center items-center p-[6px] w-8 h-8 bg-orange-500 flex-shrink-0 cursor-pointer rounded-full" onClick={handleOpen}>
                        <FocusBell />
                    </div>
                ) : (
                    <div className="flex justify-center items-center p-[6px] w-8 h-8 bg-orange-50 flex-shrink-0 cursor-pointer rounded-full" onClick={handleOpen}>
                        <Bell />
                    </div>
                )}
                <div className="flex gap-2 items-center">
                    <img src={Avatar} className="w-10 h-10 object-cover rounded-full" />
                    <div className="h-[42px] flex flex-col">
                        <span className="text-gray-gray-300 text-xs font-nunito leading-[18px]">Xin chào</span>
                        <span className="text-base font-nunito font-semibold leading-[24px] text-gray-gray-400">Lê Quỳnh Ái Vân</span>
                    </div>
                </div>
            </div>
            {focusBell && (
                <div className="absolute top-24 right-5">
                    <DropDownNofitication />
                </div>
            )}
        </div>
    );
}

export default Topbar;
