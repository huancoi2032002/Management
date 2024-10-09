import React ,{ useState } from "react";

export interface DeviceDataItem {
    deviceCode: string;
    deviceName: string;
    IPAddress: string;
    isActiveStatus: boolean;
    isActiveConnection: boolean;
    serviceUse: string;
    deviceDetail: string;
    deviceUpdate: string;
}

export interface TableDeviceProps {
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
            style={{ width }} // Sử dụng width từ props
        >
            <span className="font-nunito text-[16px] text-white">{title}</span>
        </div>
    );
};

const Row = (props: DeviceDataItem & { index: number }) => {
    const { deviceCode, deviceName, IPAddress, isActiveStatus, isActiveConnection, serviceUse } = props;

    const bgColor = props.index % 2 === 1 ? "bg-orange-orange-50" : "bg-white";

    return (
        <div className={`w-full flex h-[49px] ${bgColor}`}>
            <div className="w-[103px] px-2 flex items-center">{deviceCode}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}
            <div className="w-[99px] px-2 flex items-center">{deviceName}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}
            <div className="w-[138px] px-2 flex items-center">{IPAddress}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}
            <div className="w-[171px] px-2 flex items-center">{isActiveStatus ? 'Active' : 'Inactive'}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}
            <div className="w-[145px] px-2 flex items-center">{isActiveConnection ? 'Connected' : 'Disconnected'}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}
            <div className="w-[268px] px-2 flex items-center">{serviceUse}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}
            <div className="w-[82px] px-2 flex items-center">
                <a href="">
                    <button className="">
                        Chi tiết
                    </button>
                </a>
            </div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}
            <div className="w-[106px] px-2 flex items-center">
                <a href="">
                    <button className="">
                        Cập nhật
                    </button>
                </a>
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
        </div>
    );
};

export default TableDevice;
