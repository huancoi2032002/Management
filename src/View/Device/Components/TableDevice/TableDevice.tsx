import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../../../components/Pagination/Pagination";
import DotTable from "../../../../components/Dot/DotTable";

export interface DeviceDataItem {
    deviceCode: string;
    deviceName: string;
    IPAddress: string;
    isActiveStatus: number;
    isActiveConnection: number;
    serviceUse: string;
    deviceDetail: string;
    deviceUpdate: string;
}

interface TableDeviceProps {
    data: DeviceDataItem[];
}

interface DeviceDataTitle {
    title: string;
    width?: string;
}

const Columns: React.FC<DeviceDataTitle> = ({ title, width }) => {
    return (
        <div
            className={`h-[49px] font-medium bg-orange-orange-400 px-2 flex items-center`}
            style={{ width }} // Use width from props
        >
            <span className="font-nunito text-[16px] text-white">{title}</span>
        </div>
    );
};

const Row = (props: DeviceDataItem & { index: number }) => {
    const { deviceCode, deviceName, IPAddress, isActiveStatus, isActiveConnection, serviceUse } = props;

    const bgColor = props.index % 2 === 1 ? "bg-orange-orange-50" : "bg-white";

    return (
        <div className={`w-full flex h-[49px] text-sm ${bgColor}`}>
            <div className="w-[103px] px-2 flex items-center">{deviceCode}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[99px] px-2 flex items-center">{deviceName}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[138px] px-2 flex items-center">{IPAddress}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[171px] px-2 flex items-center">
                {isActiveStatus === 1 ? (
                    <DotTable bg="34CD26" width="8" height="8" label="Hoạt động" />
                ) : isActiveStatus === 2 ? (
                    <DotTable bg="EC3740" width="8" height="8" label="Ngưng hoạt động" />
                ) : (
                    <DotTable bg="EC3740" width="8" height="8" label="Ngưng hoạt động" />
                )}
            </div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[145px] px-2 flex items-center">
                {isActiveConnection === 1 ? (
                    <DotTable bg="34CD26" width="8" height="8" label="Kết nối" />
                ) : isActiveConnection === 2 ? (
                    <DotTable bg="EC3740" width="8" height="8" label="Mất kết nối" />
                ) : (
                    <DotTable bg="EC3740" width="8" height="8" label="Mất kết nối" />
                )}
            </div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[266px] flex items-start justify-center flex-col px-[17px]"><span className="w-full text-sm font-nunito leading-[21px] overflow-hidden truncate">{serviceUse}</span><Link to="" className="font-nunito text-sm leading-[21px] text-Blue underline">Xem thêm</Link></div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[82px] px-2 flex items-center justify-between">
                <Link to="/device/devicedetail" className="font-nunito text-sm leading-[21px] text-Blue underline">Chi tiết</Link>
            </div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[106px] px-2 flex items-center justify-between">
                <Link to="/device/updatedevice" className="font-nunito text-sm leading-[21px] text-Blue underline">Cập nhật</Link>
            </div>
        </div>
    );
};

const TableDevice = (props: TableDeviceProps) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 9;

    const totalPages = Math.ceil(props.data.length / pageSize);
    const paginatedData = props.data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="w-[1112px]">
            <div className="flex flex-col rounded-xl overflow-hidden">
                <div className="flex">
                    {[
                        { title: "Mã thiết bị", width: "103px" },
                        { title: "Tên thiết bị", width: "99px" },
                        { title: "Địa chỉ IP", width: "138px" },
                        { title: "Trạng thái hoạt động", width: "171px" },
                        { title: "Trạng thái kết nối", width: "145px" },
                        { title: "Dịch vụ sử dụng", width: "268px" },
                        { title: "", width: "82px" },
                        { title: "", width: "106px" }
                    ].map((column, index) => (
                        <React.Fragment key={index}>
                            <Columns title={column.title} width={column.width} />
                            {index < 7 && <div className="w-[1px] h-full bg-orange-orange-100"></div>} {/* Add vertical line */}
                        </React.Fragment>
                    ))}
                </div>

                <div className="flex flex-col">
                    {paginatedData.map((item, index) => (
                        <Row key={index} index={index} {...item} />
                    ))}
                </div>
            </div>


            <div className="w-full flex justify-end mt-2">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default TableDevice;
