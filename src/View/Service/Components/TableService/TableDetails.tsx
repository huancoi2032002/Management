import React, { useState } from "react";
import Pagination from "../../../../components/Pagination/Pagination";

export interface ServiceDetailsData {
    serviceCode: string;
    isActiveStatus: boolean;
}

export interface TableServiceProps {
    data: ServiceDetailsData[];
}

interface ServiceDetailTitle {
    title: string;
    width?: string;
}

const Columns: React.FC<ServiceDetailTitle> = ({ title, width }) => {
    return (
        <div
            className={`h-[49px] font-medium bg-orange-orange-400 px-2 flex items-center`}
            style={{ width }} // Use width from props
        >
            <span className="font-nunito text-[16px] text-white">{title}</span>
        </div>
    );
};

const Row = (props: ServiceDetailsData & { index: number }) => {
    const { isActiveStatus, serviceCode } = props;

    const bgColor = props.index % 2 === 1 ? "bg-orange-orange-50" : "bg-white";

    return (
        <div className={`w-full flex h-[49px] text-sm ${bgColor}`}>
            <div className="w-[334px] px-2 flex items-center">{serviceCode}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div>
            <div className="w-[334px] px-2 flex items-center">{isActiveStatus ? 'Active' : 'Inactive'}</div>
        </div>
    );
};

const TableDetails = (props: TableServiceProps) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 8;

    const totalPages = Math.ceil(props.data.length / pageSize);
    const paginatedData = props.data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };


    return (
        <div className="w-">
            <div className="flex flex-col rounded-xl overflow-hidden">
                <div className="flex">
                    {[
                        { title: "Mã dịch vụ", width: "334px" },         
                        { title: "Trạng thái hoạt động", width: "334px" },
                    ].map((column, index) => (
                        <React.Fragment key={index}>
                            <Columns title={column.title} width={column.width} />
                            {index < 1 && <div className="w-[1px] h-full bg-orange-orange-100"></div>} {/* Add vertical line */}
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

export default TableDetails;
