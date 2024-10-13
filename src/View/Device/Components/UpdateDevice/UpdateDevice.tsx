import { VectorStart } from "../../../../assets";
import Input from "../../../../components/Input/Input";
import Selection from "../../../../components/Selection/Selection";
import Button from "../../../../components/Button/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
interface UpdateDeviceProps {
    label: string
    placeholder: string
    type: "TextInput" | "Password" | "TextInputBigForm"
    width: string
}
const InputText: React.FC<UpdateDeviceProps> = ({ label, placeholder, type, width }) => {
    return (
        <div className="w-[540px] inline-flex flex-col items-start gap-2">
            <div className="flex gap-1 items-center">
                <span className=" text-base font-medium leading-[24px]">{label}</span>
                <VectorStart />
            </div>
            <Input type={type} haveIcon="NoIcon" status="ReadOnly" placeholder={placeholder} width={width} />
        </div>
    )
}
const dataOptions = [
    { value: "", label: "Chọn loại thiết bị" },
    { value: "kiosk", label: "Kiosk" },
    { value: "counter", label: "Display Counter" },
];
const UpdateDevice: React.FC = () => {

    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate('/device')
    }

    return (
        <div className="flex-1 mt-[106px] pl-6 flex flex-col gap-4">
            <h1 className="text-2xl font-nunito font-bold leading-[36px] text-orange-orange-500">Quản lý thiết bị</h1>
            <div className="w-full flex flex-col h-auto justify-between items-start">
                <div className="flex flex-col gap-4 devicemanagement w-[1152px] h-[550px] flex-shrink-0 px-6 pt-4">
                    <h1 className="text-orange-orange-500 font-nunito text-xl font-semibold leading-[36px]">Thông tin thiết bị</h1>
                    <div className="w-full grid grid-cols-2 gap-y-4 gap-x-6">
                        <InputText type="TextInput" label="Mã thiết bị:" placeholder="Nhập mã thiết bị" width="540px" />
                        <Selection options={dataOptions} title="Loại thiết bị:" color="#282739" icon="Icon" width="540px" height="auto" />
                        <InputText type="TextInput" label="Tên thiết bị::" placeholder="Nhập tên thiết bị" width="540px" />
                        <InputText type="TextInput" label="Tên đăng nhập:" placeholder="Nhập tài khoản" width="540px" />
                        <InputText type="TextInput" label="Địa chỉ IP:" placeholder="Nhập địa chỉ IP" width="540px" />
                        <InputText type="Password" label="Mật khẩu:" placeholder="Nhập mật khẩu" width="540px" />
                    </div>
                    <div className="">
                        <InputText type="TextInput" label="Dịch vụ sử dụng:" placeholder="Nhập địa chỉ IP" width="1104px" />
                    </div>
                    <div className="flex items-center gap-1 h-[21px]">
                        <VectorStart />
                        <span className="text-sm leading-[21px] text-gray-gray-300">Là trường thông tin bắt buộc</span>
                    </div>
                </div>
                <div className="mt-6 w-full flex justify-center gap-8">
                    <Button type="Hover" size="Normal" skin="Outline" icon="NoIcon" title="Hủy bỏ" width="150px" onClick={handleClickBack} />
                    <Button type="Hover" size="Normal" skin="Fill" icon="NoIcon" title="Cập nhật" width="150px" />
                </div>
            </div>
        </div>

    );
};

export default UpdateDevice;