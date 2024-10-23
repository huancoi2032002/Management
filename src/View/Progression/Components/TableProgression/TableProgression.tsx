import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../../../components/Pagination/Pagination";
import DotTable from "../../../../components/Dot/DotTable";

export interface TableProgressionData {
    progressionCode: string
    customerName: string
    serviceName: string
    timeIssue: string
    expiry: string
    isActiveStatus: number
    source: string
}

interface TableProgressionProps {
    data: TableProgressionData[]
}

interface TableProgressionTitle {
    title: string;
    width?: string;
}

const Columns: React.FC<TableProgressionTitle> = ({ title, width }) => {
    return (
        <div
            className={`h-[49px] font-medium bg-orange-orange-400 px-2 flex items-center`}
            style={{ width }} // Use width from props
        >
            <span className="font-nunito text-[16px] text-white">{title}</span>
        </div>
    );
};

const Row = (props: TableProgressionData & { index: number }) => {
    const { progressionCode, customerName, serviceName, timeIssue, expiry, isActiveStatus, source } = props;

    const bgColor = props.index % 2 === 1 ? "bg-orange-orange-50" : "bg-white";

    return (
        <div className={`w-full flex h-[49px] text-sm text-gray-gray-400 ${bgColor}`}>
            <div className="w-[93px] px-2 flex items-center">{progressionCode}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[162px] px-2 flex items-center">{customerName}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[171px] px-2 flex items-center">{serviceName}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[161px] px-2 flex items-center">{timeIssue}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[174px] px-2 flex items-center">{expiry}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[147px] px-2 flex items-center">
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

            <div className="w-[120px] px-2 flex items-center">{source}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[78px] px-2 flex items-center justify-between">
                <Link to="/progression/progression-details" className="font-nunito text-sm leading-[21px] text-Blue underline">Chi tiết</Link>
            </div>
        </div>
    );
};

const TableProgression: React.FC<TableProgressionProps> = ({ data }) => {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 9;

    const totalPages = Math.ceil(data.length / pageSize);
    const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="w-[1112px]">
            <div className="flex flex-col rounded-xl overflow-hidden">
                <div className="flex">
                    {[
                        { title: "STT", width: "93px" },
                        { title: "Tên khách hàng", width: "162px" },
                        { title: "Tên dịch vụ ", width: "171px" },
                        { title: "Thời gian cấp", width: "161px" },
                        { title: "Hạn sử dụng", width: "174px" },
                        { title: "Trạng thái", width: "147px" },
                        { title: "Nguồn cấp", width: "120px" },
                        { title: "", width: "78px" }
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

export default TableProgression;