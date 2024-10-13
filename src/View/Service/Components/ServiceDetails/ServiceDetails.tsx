import React from "react";
import AddButton from "../../../../components/AddButton/AddButton";
import { BackIcon, EditIcon } from "../../../../assets";
import Input from "../../../../components/Input/Input";
import Selection from "../../../../components/Selection/Selection";
import DateFilter from "../../../../components/DatePicker/DateFilter";
import Search from "../../../../components/Search/Search";
import TableDetails, { ServiceDetailsData } from "../TableService/TableDetails";



const dataOptions = [
    { value: "all", label: "Tất cả" },
    { value: "complete", label: "Đã hoàn thành" },
    { value: "done", label: "Đã thực hiện" },
    { value: "absent", label: "Vắng" },
];

const FakeDataProvider = (): ServiceDetailsData[] => {
    return Array.from({ length: 100 }, (_, index) => ({
        serviceCode: `201000${index + 1}`,
        isActiveStatus: index % 2 === 0, // Chẵn: Active, Lẻ: Inactive
    }));
};

const ServiceDetails: React.FC = () => {
    
    const fakeData = FakeDataProvider();

    return (
        <div className="flex-1 mt-[106px] pl-6 flex flex-col gap-4">
            <h1 className="text-2xl font-nunito font-bold leading-[36px] text-orange-orange-500">Quản lý thiết bị</h1>
            <div className="w-full flex items-start justify-between gap-6">

                <div className="flex flex-col gap-4 devicemanagement w-[370px] h-[604px] flex-shrink-0 px-6 pt-4">
                    <h1 className="text-orange-orange-500 font-nunito text-xl font-semibold leading-[36px]">Thông tin dịch vụ</h1>
                    <div className="w-full grid grid-cols-1 gap-y-4 gap-x-24">
                        <div className="grid grid-cols-2">
                            <span className="text-gray-gray-500 text-base leading-[24px] font-semibold">Mã dịch vụ:</span>
                            <span className="text-gray-gray-400 text-base leading-[24px] ">201</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <span className="text-gray-gray-500 text-base leading-[24px] font-semibold">Tên dịch vụ:</span>
                            <span className="text-gray-gray-400 text-base leading-[24px] ">Khám tim mạch</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <span className="text-gray-gray-500 text-base leading-[24px] font-semibold">Mô tả:</span>
                            <span className="text-gray-gray-400 text-base leading-[24px] ">Chuyên các bệnh lý về tim</span>
                        </div>
                    </div>
                    <h1 className="text-orange-orange-500 font-nunito text-xl font-semibold leading-[36px]">Quy tắc cấp số</h1>
                    <div className="flex flex-col gap-3">
                        <div className="w-[260px] grid grid-cols-2 items-center">
                            <div className="flex gap-2 items-center">
                                <span className="text-gray-gray-500 font-medium leading-[24px]">Tăng tự động từ:</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <Input type="TextInput" status="Pressing" haveIcon="NoIcon" placeholder="0001" width="65px" />
                                <span className="">đến</span>
                                <Input type="TextInput" status="Pressing" haveIcon="NoIcon" placeholder="9999" width="65px" />
                            </div>
                        </div>
                        <div className="w-[260px] grid grid-cols-2 items-center">
                            <div className="flex gap-2 items-center">

                                <span className="text-gray-gray-500 font-medium leading-[24px] mr-[7px]">Prefix:</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <Input type="TextInput" status="Pressing" haveIcon="NoIcon" placeholder="0001" width="65px" />
                            </div>
                        </div>
                        <div className="w-[260px] grid grid-cols-2 items-center">
                            <div className="flex gap-2 items-center">

                                <span className="text-gray-gray-500 font-medium leading-[24px] mr-[7px]">Surfix:</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <Input type="TextInput" status="Pressing" haveIcon="NoIcon" placeholder="0001" width="65px" />
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <span className="text-gray-gray-500 font-medium leading-[24px] mr-[7px]">Reset mỗi ngày</span>
                            <span>Ví dụ: 201-2001</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 devicemanagement w-[718px] h-[604px] flex-shrink-0 px-6 pt-4">
                    <div className="h-auto flex gap-3">
                        <Selection title="Trạng thái" options={dataOptions} width="160px" icon="NoIcon" color="#535261" height="44px" />
                        <DateFilter />
                        <Search width="206px" icon="Icon" />
                    </div>
                    <div className="">
                        <TableDetails data={fakeData} />
                    </div>
                </div>
                <div className="w-full flex flex-col justify-end gap-1">
                    <AddButton icon={<EditIcon />} title="Cập nhật danh sách" link="/service/updateservice" />
                    <AddButton icon={<BackIcon />} title="Quay lại" link="/service" />
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;