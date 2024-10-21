import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../../../../components/Pagination/Pagination";

export interface TableUserLogItem {
    username: string;
    timeImpact: string;
    IP: string;
    operation: string;
}

export interface TableUserLogProps {
    data: TableUserLogItem[];
}

interface TableUserLogTitle {
    title: string;
    width?: string;
}
const Columns: React.FC<TableUserLogTitle> = ({ title, width }) => {
    return (
        <div
            className={`h-[49px] font-medium bg-orange-orange-400 px-2 flex items-center`}
            style={{ width }} // Use width from props
        >
            <span className="font-nunito text-[16px] text-white">{title}</span>
        </div>
    );
};

const Row = (props: TableUserLogItem & { index: number }) => {
    const { username, timeImpact, IP, operation } = props;

    const bgColor = props.index % 2 === 1 ? "bg-orange-orange-50" : "bg-white";

    return (
        <div className={`w-full flex h-[49px] ${bgColor}`}>
            <div className="w-[266px] text-sm text-gray-gray-400 px-2 flex items-center">{username}</div>
            <div className="w-[1px] h-full  bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[240px] text-sm text-gray-gray-400 px-2 flex items-center">{timeImpact}</div>
            <div className="w-[1px] h-full  bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[216px] flex items-start justify-center flex-col px-[17px]">
                <span className="w-full text-gray-gray-400 text-sm font-nunito leading-[21px] overflow-hidden truncate">{IP}</span>
            </div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[386px] px-2 flex items-center justify-center">
                <span className="w-full text-gray-gray-400 text-sm font-nunito leading-[21px] overflow-hidden truncate">{operation}</span>
            </div>
        </div>
    );
};
const TableUserLog = (props: TableUserLogProps) => {
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
                        { title: "Tên đăng nhập", width: "266px" },
                        { title: "Thời gian tác động", width: "240px" },
                        { title: "IP thực hiện", width: "216px" },
                        { title: "Thao tác thực hiện", width: "386px" }
                    ].map((column, index) => (
                        <React.Fragment key={index}>
                            <Columns title={column.title} width={column.width} />
                            {index < 5 && <div className="w-[1px] h-full bg-orange-orange-100"></div>} {/* Add vertical line */}
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

export default TableUserLog;