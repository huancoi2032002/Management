
import Selection from "../../../../components/Selection/Selection";
import Search from "../../../../components/Search/Search";
import AddButton from "../../../../components/AddButton/AddButton";
import { PlusButton } from "../../../../assets";
import TableService, { ServiceDataItem } from "../TableService/TableService";
interface ServiceListProps {

}
const optionActives = [ // Dữ liệu của select hoạt động
    { value: "all", label: "Tất cả" },
    { value: "", label: "Hoạt động" },
    { value: "", label: "Ngưng hoạt động" },
];
const FakeDataProvider = (): ServiceDataItem[] => {
    return Array.from({ length: 100 }, (_, index) => ({
        serviceCode: `DEV${index + 1}`,
        serviceName: `Thiết bị ${index + 1}`,
        isActiveStatus: Math.floor(Math.random() * 2) + 1,
        describe: `Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát ${index + 1}`,
        serivceDetail: "", 
        serivceUpdate: "" 
    }));
};

const ServiceList = () => {
    const fakeData = FakeDataProvider();
    return (
        <div className="flex-1 mt-[106px] pl-6 flex flex-col gap-4">
            <h1 className="text-2xl font-nunito font-bold leading-[36px] text-orange-orange-500">Danh sách thiết bị</h1>
            <div className="flex justify-between items-center pr-[104px]">
                <div className="flex items-center gap-6">
                    <Selection title="Trạng thái hoạt động" options={optionActives} width="300px" height="72px" color="#282739" icon="NoIcon" />
                </div>
                <Search icon="Icon"/>
            </div>
            <div className="flex h-auto justify-between items-start">
                <TableService data={fakeData} />
                <AddButton icon={<PlusButton />} title="Thêm dịch vụ" link="/service/addservice" />
            </div>

        </div>
    );
};

export default ServiceList;