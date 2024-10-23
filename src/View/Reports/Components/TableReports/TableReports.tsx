import React, { useState } from "react";
import Pagination from "../../../../components/Pagination/Pagination";
import { ArrowRight } from "../../../../assets";
import NumberDropdown from "../DropDown/NumberDropdown";
import DropdownService from "../DropDown/DropdownService";
import DropDownTimeIssue from "../DropDown/DropDownTimeIssue";
import DropDownStatus from "../DropDown/DropDownStatus";
import DropdownSource from "../DropDown/DropdownSource";
import DotTable from "../../../../components/Dot/DotTable";


export interface TableReportsData {
    stt: string
    serviceName: string
    timeIssue: string
    isActiveStatus: number
    source: boolean
}
interface TableReportsProps {
    data: TableReportsData[];
}
interface TableReportTitle {
    title: string;
    width?: string;
    onClick: () => void
    isOpen: boolean
    dropdownComponent?: React.ReactNode;
}
const Columns: React.FC<TableReportTitle> = ({ title, width, onClick, isOpen, dropdownComponent }) => {
    return (
        <div
            className={`h-[49px] font-medium bg-orange-orange-400 px-2 flex items-center justify-between relative`} // Keep relative here
            style={{ width }} // Use width from props
        >
            <span className="font-nunito text-[16px] text-white">{title}</span>
            <div className="cursor-pointer" onClick={onClick}><ArrowRight /></div>
            {isOpen && dropdownComponent && (
                <div className="absolute top-12 left-0 bg-white shadow-lg z-30 rounded-lg"> {/* Adjust top value if necessary */}
                    {dropdownComponent}
                </div>
            )}
        </div>
    );
};


const Row = (props: TableReportsData & { index: number }) => {
    const { stt, serviceName, isActiveStatus, timeIssue, source } = props;

    const bgColor = props.index % 2 === 1 ? "bg-orange-orange-50" : "bg-white";

    return (
        <div className={`w-full flex h-[49px] ${bgColor} z-10 text-sm`}>
            <div className="w-[226px] px-2 flex items-center">{stt}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}
            <div className="w-[232px] px-2 flex items-center">{serviceName}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}
            <div className="w-[238px] px-2 flex items-center">{timeIssue}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}
            <div className="w-[216px] px-2 flex items-center">
                {isActiveStatus === 1 ? (
                    <DotTable bg="4277FF" width="8" height="8" label="Đang chờ" />
                ) : isActiveStatus === 2 ? (
                    <DotTable bg="E73F3F" width="8" height="8" label="Bỏ qua" />
                ) : isActiveStatus === 3 ? (
                    <DotTable bg="7E7D88" width="8" height="8" label="Đã sử dụng" />
                ) :  (
                    <DotTable bg="7E7D88" width="8" height="8" label="Đã sử dụng" />
                )}
            </div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}
            <div className="w-[196px] px-2 flex items-center">{source ? 'Kiosk' : 'Hệ thống'}</div>
        </div>
    );
};
const TableReports = (props: TableReportsProps) => {
    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 9;

    const totalPages = Math.ceil(props.data.length / pageSize);
    const paginatedData = props.data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleDropdownToggle = (index: number) => {
        console.log("Dropdown toggle:", index);
        setOpenDropdownIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const columns = [
        { title: "Số thứ tự", width: "226px", dropdownComponent: <NumberDropdown /> },
        { title: "Tên dịch vụ", width: "232px", dropdownComponent: <DropdownService /> },
        { title: "Thời gian cấp", width: "238px", dropdownComponent: <DropDownTimeIssue /> },
        { title: "Tình trạng", width: "216px", dropdownComponent: <DropDownStatus /> },
        { title: "Nguồn cấp", width: "196px", dropdownComponent: <DropdownSource /> },
    ];

    return (
        <div className="w-[1112px] z-10">
            <div className="flex flex-col rounded-xl overflow-hidden">
                <div className="flex">
                    {columns.map((column, index) => (
                        <React.Fragment key={index}>
                            <Columns
                                title={column.title}
                                width={column.width}
                                isOpen={openDropdownIndex === index}
                                onClick={() => handleDropdownToggle(index)}
                                dropdownComponent={column.dropdownComponent}
                            />
                            {index < columns.length - 1 && <div className="w-[1px] h-full bg-orange-orange-100"></div>} {/* Add vertical line */}
                        </React.Fragment>
                    ))}
                </div>

                <div className="flex flex-col z-10">
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

export default TableReports;