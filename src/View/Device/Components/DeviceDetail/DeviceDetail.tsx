import { EditIcon } from "../../../../assets";
import AddButton from "../../../../components/AddButton/AddButton";

interface DeviceDetailProps {

}

const DeviceDetail = (props: DeviceDetailProps) => {

    return (
        <div className="flex-1 mt-[106px] pl-6 flex flex-col gap-4">
            <h1 className="text-2xl font-nunito font-bold leading-[36px] text-orange-orange-500">Quản lý thiết bị</h1>
            <div className="w-full flex items-start justify-between">
                <div className="flex flex-col gap-4 devicemanagement w-[1112px] h-[604px] flex-shrink-0 px-6 pt-4">
                    <h1 className="text-orange-orange-500 font-nunito text-xl font-semibold leading-[36px]">Thông tin thiết bị</h1>
                    <div className="w-full grid grid-cols-2 gap-y-4 gap-x-24">
                        <div className="grid grid-cols-2">
                            <span className="text-gray-gray-500 text-base leading-[24px] font-semibold">Mã thiết bị:</span>
                            <span className="text-gray-gray-400 text-base leading-[24px] ">Nhập mã thiết bị</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <span className="text-gray-gray-500 text-base leading-[24px] font-semibold">Loại thiết bị:</span>
                            <span className="text-gray-gray-400 text-base leading-[24px] ">Nhập mã thiết bị</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <span className="text-gray-gray-500 text-base leading-[24px] font-semibold">Tên thiết bị:</span>
                            <span className="text-gray-gray-400 text-base leading-[24px] ">Nhập mã thiết bị</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <span className="text-gray-gray-500 text-base leading-[24px] font-semibold">Tên đăng nhập:</span>
                            <span className="text-gray-gray-400 text-base leading-[24px] ">Nhập mã thiết bị</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <span className="text-gray-gray-500 text-base leading-[24px] font-semibold">Địa chỉ IP:</span>
                            <span className="text-gray-gray-400 text-base leading-[24px] ">Nhập mã thiết bị</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <span className="text-gray-gray-500 text-base leading-[24px] font-semibold">Mật khẩu:</span>
                            <span className="text-gray-gray-400 text-base leading-[24px] ">Nhập mã thiết bị</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-gray-500 text-base leading-[24px] font-semibold">Dịch vụ sử dụng:</span>
                        <span className="text-gray-gray-400 text-base leading-[24px] ">Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.</span>
                    </div>
                </div>
                <div className="w-full flex justify-end gap-8">
                    <AddButton icon={<EditIcon />} title="Cập nhật thiết bị" link="/device/updatedevice" />
                </div>
            </div>
        </div>

    );
};

export default DeviceDetail;