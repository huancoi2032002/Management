import React from "react";
import { VectorStart } from "../../../../../assets";
import Input from "../../../../../components/Input/Input";
import Button from "../../../../../components/Button/Button";
import { useNavigate } from "react-router-dom";

interface UpdateRoleProps {
    label: string
    placeholder: string
    type: "TextInput" | "Password" | "TextInputBigForm";
    width: string
    height: string
}


const InputText: React.FC<UpdateRoleProps> = ({ label, placeholder, type, width, height }) => {
    return (
        <div className="w-[540px] inline-flex flex-col items-start gap-2">
            <div className="flex gap-1 items-center">
                <span className=" text-base font-medium leading-[24px]">{label}</span>
                <VectorStart />
            </div>
            <Input type={type} haveIcon="NoIcon" status="ReadOnly" placeholder={placeholder} width={width} height={height} />
        </div>
    )
}
type FunctionProps = {
    title: string
}
const Function: React.FC<FunctionProps> = ({ title }) => {
    return (
        <div className="flex items-center gap-2">
            <input
                type="checkbox"
                className="w-5 h-5 appearance-none border-2 border-blue-500 checked:bg-blue-500 checked:border-blue-500 focus:ring-0 relative rounded-[4px]"
                id="checkbox"
            />
            <span className="text-gray-gray-400 text-base leading-[24px]">{title}</span>
        </div>
    )
}
const UpdateRole = () => {
    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate('/settings/role-management')
    }
    return (
        <div className="flex-1 mt-[106px] pl-6 flex flex-col gap-4">
            <h1 className="text-2xl font-nunito font-bold leading-[36px] text-orange-orange-500">Danh sách vai trò</h1>
            <div className="flex flex-col gap-4 devicemanagement w-[1192px] h-[550px] flex-shrink-0 px-6 pt-4">
                <h1 className="text-orange-orange-500 font-nunito text-xl font-semibold leading-[36px]">Thông tin vai trò</h1>
                <div className="grid grid-cols-2 ">
                    <div className="flex flex-col gap-3">
                        <InputText type="TextInput" label="Tên vai trò:" placeholder="Nhập tên vai trò" width="540px" height="44px" />
                        <InputText type="TextInput" label="Mô tả:" placeholder="Nhập mô tả" width="540px" height="160px" />
                        <div className="flex items-center gap-1 h-[21px]">
                            <VectorStart />
                            <span className="text-sm leading-[21px] text-gray-gray-300">Là trường thông tin bắt buộc</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-1 h-[21px]">
                            <span className="text-base leading-[21px] text-gray-gray-500">Phân quyền chức năng</span>
                            <VectorStart />
                        </div>
                        <div className="w-full h-[420px] bg-orange-orange-50 rounded-lg pl-6 pt-4 flex flex-col gap-4">
                            <div className="flex flex-col gap-3">
                                <h1 className="text-orange-orange-500 font-nunito text-xl leading-[30px]">Nhóm chức năng A</h1>
                                <Function title="Tất cả" />
                                <Function title="Chức năng x" />
                                <Function title="Chức năng y" />
                                <Function title="Chức năng z" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-orange-orange-500 font-nunito text-xl leading-[30px]">Nhóm chức năng b</h1>
                                <Function title="Tất cả" />
                                <Function title="Chức năng x" />
                                <Function title="Chức năng y" />
                                <Function title="Chức năng z" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="mt-3 w-full flex justify-center gap-8">
                <Button type="Hover" size="Normal" skin="Outline" icon="NoIcon" title="Hủy bỏ" width="152px" onClick={handleClickBack} />
                <Button type="Hover" size="Normal" skin="Fill" icon="NoIcon" title="Thêm" width="152px" />
            </div>
        </div>
    );
};

export default UpdateRole;
