import React, { useState } from "react";
import Button from "../../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import Selection from "../../../../components/Selection/Selection";
import Popup from "./Popup";


interface AddProgressionProps {

}
const optionService = [
    { value: "4", label: "Khám tim mạch" },
    { value: "1", label: "Khám sản - Phụ khoa" },
    { value: "2", label: "Khám răng hàm mặt" },
    { value: "3", label: "Khám tai mũi họng" },
];
const AddProgression = () => {

    const [openPopUp, setOpenPopUp] = useState(false);

    const handleOpenPopUp = () => {
        setOpenPopUp(prev => !prev)
    }
    const handleClosePopUp = () => {
        setOpenPopUp(false)
    }

    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate('/progression')
    }

    return (
        <div className="flex-1 mt-[106px] pl-6 flex flex-col gap-4">
            <h1 className="text-2xl font-nunito font-bold leading-[36px] text-orange-orange-500">Quản lý cấp số</h1>
            <div className="flex flex-col devicemanagement w-[1192px] h-[550px] items-center flex-shrink-0 px-6 pt-6">
                <h1 className="text-[32px] font-nunito font-bold leading-[36px] text-orange-orange-500 ">CẤP SỐ MỚI</h1>
                <div className="w-full flex flex-col gap-3 items-center mt-[20px]">
                    <span className="text-xl leading-[30px] font-semibold text-gray-gray-400">Dịch vụ khách hàng lựa chọn</span>
                    <Selection title="" color="#A9A9B0" icon="NoIcon" width="400px" height="auto" options={optionService}/>
                </div>
                <div className="w-full flex justify-center gap-8 mt-[80px]">
                    <Button type="Hover" size="Normal" skin="Outline" icon="NoIcon" title="Hủy bỏ" width="152px" onClick={handleClickBack} />
                    <Button type="Hover" size="Normal" skin="Fill" icon="NoIcon" title="In số" width="152px" onClick={handleOpenPopUp}/>
                </div>
            </div>
            {openPopUp && (
                <Popup onClose={handleClosePopUp} />
            )}
        </div>
    );
};

export default AddProgression;