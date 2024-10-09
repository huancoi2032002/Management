import { PlusButton } from "../../assets";
import AddButton from "../../components/AddButton/AddButton";
import Search from "../../components/Search/Search";
import Selection from "../../components/Selection/Selection";
import LayoutMain from "../../layouts/LayoutMain/LayoutMain";
import TableDevice from "./Components/TableDevice/TableDevice";
import { DeviceDataItem } from "./Components/TableDevice/TableDevice"; 

interface DeviceProps {

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
        isActiveStatus: index % 2 === 0, // Chẵn: Active, Lẻ: Inactive
        isActiveConnection: index % 2 === 0, // Chẵn: Connected, Lẻ: Disconnected
        serviceUse: `Dịch vụ ${index + 1}`,
        deviceDetail: "",
        deviceUpdate: ""
    }));
};
const Device = (props: DeviceProps) => {

    const fakeData = FakeDataProvider();

    return (
        <LayoutMain>
            <div className="relative w-full h-full flex">
                <div className="flex-1 mt-[106px] pl-6 flex flex-col gap-4">
                    <h1 className="text-2xl font-nunito font-bold leading-[36px] text-orange-orange-500">Danh sách thiết bị</h1>
                    <div className="flex justify-between items-center pr-[104px]">
                        <div className="flex items-center gap-6">
                            <Selection title="Trạng thái hoạt động" options={optionActives} />
                            <Selection title="Trạng thái kết nối" options={optionConnect} />
                        </div>
                        <Search />
                    </div>
                    <div className="flex h-auto justify-between items-start">
                        <TableDevice data={fakeData} />
                        <AddButton icon={<PlusButton />} title="Thêm thiết bị" />
                    </div>
                    
                </div>
            </div>
        </LayoutMain>
    );
};

export default Device;