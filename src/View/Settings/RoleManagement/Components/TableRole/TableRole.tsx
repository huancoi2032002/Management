import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../../../../components/Pagination/Pagination";

export interface TableRoleItem {
    roleName: string;
    numberPerson: string;
    describe: string;
    roleUpdate: string;
}

export interface TableRoleProps {
    data: TableRoleItem[];
}

interface TableRoleTitle {
    title: string;
    width?: string;
}
const Columns: React.FC<TableRoleTitle> = ({ title, width }) => {
    return (
        <div
            className={`h-[49px] font-medium bg-orange-orange-400 px-2 flex items-center`}
            style={{ width }} // Use width from props
        >
            <span className="font-nunito text-[16px] text-white">{title}</span>
        </div>
    );
};

const Row = (props: TableRoleItem & { index: number }) => {
    const { roleName, numberPerson, describe } = props;

    const bgColor = props.index % 2 === 1 ? "bg-orange-orange-50" : "bg-white";

    return (
        <div className={`w-full flex h-[49px] ${bgColor}`}>
            <div className="w-[224px] px-2 flex items-center">{roleName}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[224px] px-2 flex items-center">{numberPerson}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[537px] flex items-start justify-center flex-col px-[17px]">
                <span className="w-full text-sm font-nunito leading-[21px] overflow-hidden truncate">{describe}</span>
            </div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[125px] px-2 flex items-center justify-center">
                <Link to="/settings/role-management/update-role" className="font-nunito text-sm leading-[21px] text-Blue underline">Cập nhật</Link>
            </div>
        </div>
    );
};
const TableRole = (props: TableRoleProps) => {
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
                        { title: "Mã dịch vụ", width: "224px" },
                        { title: "Tên dịch vụ", width: "224px" },
                        { title: "Mô tả", width: "537px" },
                        { title: "", width: "125px" }
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

export default TableRole;