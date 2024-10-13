import React from "react";
import Input from "../../../../components/Input/Input";
import { VectorStart } from "../../../../assets";
import Button from "../../../../components/Button/Button";
import { useNavigate } from "react-router-dom";

interface UpdateServiceProps {

}
interface AddServiceProps {
    label: string
    placeholder: string
    type: "TextInput" | "Password" | "TextInputBigForm";
    width: string
    height: string
}

type InputProps = {
    value: number
}

const InputText: React.FC<AddServiceProps> = ({ label, placeholder, type, width, height }) => {
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
const UpdateService = (props: UpdateServiceProps) => {

    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate('/service')
    }

    return (
        <div className="flex-1 mt-[106px] pl-6 flex flex-col gap-4">
            <h1 className="text-2xl font-nunito font-bold leading-[36px] text-orange-orange-500">Quản lý dịch vụ</h1>
            <div className="flex flex-col gap-4 devicemanagement w-[1152px] h-[550px] flex-shrink-0 px-6 pt-4">
                <h1 className="text-orange-orange-500 font-nunito text-xl font-semibold leading-[36px]">Thông tin dịch vụ</h1>
                <div className="w-full grid grid-cols-2 gap-y-4 gap-x-6">
                    <InputText type="TextInput" label="Mã dịch vụ:" placeholder="Nhập mã dịch vụ" width="540px" height="44px" />
                    <div className="row-span-2">
                        <InputText type="TextInput" label="Mô tả:" placeholder="Mô tả dịch vụ" width="540px" height="136px" />
                    </div>
                    <InputText type="TextInput" label="Tên dịch vụ:" placeholder="Nhập tên dịch vụ" width="540px" height="44px" />
                </div>
                <h1 className="text-orange-orange-500 font-nunito text-xl font-semibold leading-[36px]">Quy tắc cấp số</h1>
                <div className="flex flex-col gap-3">
                    <div className="w-[330px] grid grid-cols-2 items-center">
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="w-5 h-5 border border-Blue" />
                            <span className="text-gray-gray-500 font-medium leading-[24px]">Tăng tự động từ:</span>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Input type="TextInput" status="Pressing" haveIcon="NoIcon" placeholder="0001" width="65px" />
                            <span className="">đến</span>
                            <Input type="TextInput" status="Pressing" haveIcon="NoIcon" placeholder="9999" width="65px" />
                        </div>
                    </div>
                    <div className="w-[330px] grid grid-cols-2 items-center">
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="w-5 h-5 border border-Blue" />
                            <span className="text-gray-gray-500 font-medium leading-[24px] mr-[7px]">Prefix:</span>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Input type="TextInput" status="Pressing" haveIcon="NoIcon" placeholder="0001" width="65px" />
                        </div>
                    </div>
                    <div className="w-[330px] grid grid-cols-2 items-center">
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="w-5 h-5 border border-Blue" />
                            <span className="text-gray-gray-500 font-medium leading-[24px] mr-[7px]">Surfix:</span>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Input type="TextInput" status="Pressing" haveIcon="NoIcon" placeholder="0001" width="65px" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" className="w-5 h-5 border border-Blue" />
                        <span className="text-gray-gray-500 font-medium leading-[24px] mr-[7px]">Reset mỗi ngày</span>
                    </div>
                </div>
                <div className="flex items-center gap-1 h-[21px]">
                    <VectorStart />
                    <span className="text-sm leading-[21px] text-gray-gray-300">Là trường thông tin bắt buộc</span>
                </div>
            </div>
            <div className="mt-3 w-full flex justify-center gap-8">
                <Button type="Hover" size="Normal" skin="Outline" icon="NoIcon" title="Hủy bỏ" width="152px" onClick={handleClickBack} />
                <Button type="Hover" size="Normal" skin="Fill" icon="NoIcon" title="Cập nhật" width="152px" />
            </div>
        </div>
    );
};

export default UpdateService;