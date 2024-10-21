import React, {useState} from "react";
import { Link } from "react-router-dom";
import Pagination from "../../../../../components/Pagination/Pagination";

export interface TableAccountData {
    accountName: string
    name: string
    phoneNumber: string
    email: string
    role: string
    isActive: boolean
    updateAccount: string
}


export interface TableAccountProps {
    data: TableAccountData[];
}

interface TableAccountTitle {
    title: string;
    width?: string;
}

const Columns: React.FC<TableAccountTitle> = ({ title, width }) => {
    return (
        <div
            className={`h-[49px] font-medium bg-orange-orange-400 px-2 flex items-center`}
            style={{ width }} // Use width from props
        >
            <span className="font-nunito text-[16px] text-white">{title}</span>
        </div>
    );
};

const Row = (props: TableAccountData & { index: number }) => {
    const { accountName, name, phoneNumber, email, role, isActive } = props;

    const bgColor = props.index % 2 === 1 ? "bg-orange-orange-50" : "bg-white";

    return (
        <div className={`w-full flex h-[49px] text-sm ${bgColor}`}>
            <div className="w-[150px] px-2 flex items-center">{accountName}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[166px] px-2 flex items-center">{name}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[130px] px-2 flex items-center">{phoneNumber}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[255px] px-2 flex items-center">{email}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[114px] px-2 flex items-center">{role}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[193px] px-2 flex items-center">{isActive ? 'Active' : 'Inactive'}</div>
            <div className="w-[1px] h-full bg-orange-orange-100"></div> {/* Vertical line */}

            <div className="w-[99px] px-2 flex items-center justify-center">
                <Link to="/settings/account-management/update-account" className="font-nunito text-sm leading-[21px] text-Blue underline">Cập nhật</Link>
            </div>
        </div>
    );
};
const TableAccount: React.FC<TableAccountProps> = ({data}) => {
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
                        { title: "Tên đăng nhập", width: "150px" },
                        { title: "Họ tên", width: "166px" },
                        { title: "Số điện thoại", width: "130px" },
                        { title: "Email", width: "255px" },
                        { title: "Vai trò", width: "114px" },
                        { title: "Trạng thái hoạt động", width: "193px" },
                        { title: "", width: "99px" }
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

export default TableAccount;