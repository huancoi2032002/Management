import { DeviceDataItem } from "../TableDevice/TableDevice";
import Selection from "../../../../components/Selection/Selection";
import Search from "../../../../components/Search/Search";
import TableDevice from "../TableDevice/TableDevice";
import AddButton from "../../../../components/AddButton/AddButton";
import { PlusButton } from "../../../../assets";
interface DeviceListProps {

}
const optionActives = [ // Dữ liệu của select hoạt động
    { value: "all", label: "Tất cả" },
    { value: "", label: "Hoạt động" },
    { value: "", label: "Ngưng hoạt động" },
];
const optionConnect = [// Dữ liệu của select kết nối
    { value: "all", label: "Tất cả" },
    { value: "", label: "Kết nối" },
    { value: "", label: "Mất kết nối" },
];
const FakeDataProvider = (): DeviceDataItem[] => { // dũ liệu fake để test
    return Array.from({ length: 25 }, (_, index) => ({
        deviceCode: `DEV${index + 1}`,
        deviceName: `Thiết bị ${index + 1}`,
        IPAddress: `192.168.1.${index + 1}`,
        isActiveStatus: Math.floor(Math.random() * 2) + 1,
        isActiveConnection: Math.floor(Math.random() * 2) + 1, 
        serviceUse: `Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát ${index + 1}`,
        deviceDetail: "",
        deviceUpdate: ""
    }));
};
const DeviceList = (props: DeviceListProps) => {
    const fakeData = FakeDataProvider();
    return (
        <div className="flex-1 mt-[106px] pl-6 flex flex-col gap-4">
            <h1 className="text-2xl font-nunito font-bold leading-[36px] text-orange-orange-500">Danh sách thiết bị</h1>
            <div className="flex justify-between items-center pr-[104px]">
                <div className="flex items-center gap-6">
                    <Selection title="Trạng thái hoạt động" options={optionActives} width="300px" height="72px" color="#282739" icon="NoIcon"/>
                    <Selection title="Trạng thái kết nối" options={optionConnect} width="300px" height="72px" color="#282739" icon="NoIcon" />
                </div>
                <Search icon="Icon" />
            </div>
            <div className="flex h-auto justify-between items-start">
                <TableDevice data={fakeData} />
                <AddButton icon={<PlusButton />} title="Thêm thiết bị" link="/device/devicemanagement" />
            </div>

        </div>
    );
};

export default DeviceList;