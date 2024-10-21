import React from "react";
import Button from "../../../../../components/Button/Button";
import Input from "../../../../../components/Input/Input";
import { VectorStart } from "../../../../../assets";
import Selection from "../../../../../components/Selection/Selection";
import { useNavigate } from "react-router-dom";

interface AddAccountProps {
    label: string
    placeholder: string
    type: "TextInput" | "Password" | "TextInputBigForm";
    width: string
    height: string
}
const InputText: React.FC<AddAccountProps> = ({ label, placeholder, type, width, height }) => {
    return (
        <div className="w-[540px] inline-flex flex-col items-start gap-2">
            <div className="flex gap-1 items-center">
                <span className=" text-base font-medium leading-[24px]">{label}</span>
                <VectorStart />
            </div>
            <Input type={type} haveIcon="NoIcon" status="ReadOnly" placeholder={placeholder} width={width} height={height}/>
        </div>
    )
}
const dataRoles = [
    { value: "", label: "Chọn vai trò" },
    { value: "accountant", label: "Kế toán" },
    { value: "manage", label: "Quản lý" },
    { value: "admin", label: "Admin" },
];
const dataStatus = [
    { value: "all", label: "Tất cả" },
    { value: "accountant", label: "Ngưng hoạt động" },
    { value: "manage", label: "Hoạt động" },
];
const AddAccount = () => {

    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate('/settings/account-management')
    }

    return (
        <div className="flex-1 mt-[106px] pl-6 flex flex-col gap-4">
            <h1 className="text-2xl font-nunito font-bold leading-[36px] text-orange-orange-500">Danh sách vai trò</h1>
            <div className="flex flex-col gap-4 devicemanagement w-[1192px] h-[550px] flex-shrink-0 px-6 pt-4">
                <h1 className="text-orange-orange-500 font-nunito text-xl font-semibold leading-[36px]">Thông tin tài khoản</h1>
                <div className="grid grid-cols-2 gap-6">
                    <InputText label="Họ tên" placeholder="Nhập họ tên" width="560px" type="TextInput" height="44px"/>
                    <InputText label="Tên đăng nhập:" placeholder="Nhập tên đăng nhập" width="560px" type="TextInput" height="44px"/>
                    <InputText label="Số điện thoại" placeholder="Nhập số điện thoại" width="560px" type="TextInput" height="44px"/>
                    <InputText label="Mật khẩu:" placeholder="" width="560px" type="Password" height="44px" />
                    <InputText label="Email" placeholder="Nhập email" width="560px" type="TextInput" height="44px"/>
                    <InputText label="Nhập lại mật khẩu" placeholder="" width="560px" type="Password" height="44px"/>
                    <Selection title="Vai trò" icon="Icon" options={dataRoles} color="#535261" width="560px" height="72px"/>
                    <Selection title="Vai trò" icon="Icon" options={dataStatus} color="#535261" width="560px" height="72px"/>
                </div>
                <div className="flex items-center gap-1 h-[21px]">
                    <VectorStart />
                    <span className="text-sm leading-[21px] text-gray-gray-300">Là trường thông tin bắt buộc</span>
                </div>
            </div>
            <div className="mt-3 w-full flex justify-center gap-8">
                <Button type="Hover" size="Normal" skin="Outline" icon="NoIcon" title="Hủy bỏ" width="152px" onClick={handleClickBack} />
                <Button type="Hover" size="Normal" skin="Fill" icon="NoIcon" title="Thêm" width="152px" />
            </div>
        </div>
    );
};

export default AddAccount;