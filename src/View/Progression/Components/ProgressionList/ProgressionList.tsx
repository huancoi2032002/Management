import Selection from "../../../../components/Selection/Selection";
import TableProgression, { TableProgressionData } from "../TableProgression/TableProgression";
import AddButton from "../../../../components/AddButton/AddButton";
import { PlusButton } from "../../../../assets";
import DateFilter from "../../../../components/DatePicker/DateFilter";
import Search from "../../../../components/Search/Search";

interface ProgressionListProps {

}
const optionService = [
    { value: "all", label: "Tất cả" },
    { value: "1", label: "Khám sản - Phụ khoa" },
    { value: "2", label: "Khám răng hàm mặt" },
    { value: "3", label: "Khám tai mũi họng" },
];
const optionStatus = [
    { value: "all", label: "Tất cả" },
    { value: "1", label: "Đang chờ" },
    { value: "2", label: "Đã sử dụng" },
    { value: "3", label: "Bỏ qua" },
];
const optionSource = [
    { value: "all", label: "Tất cả" },
    { value: "1", label: "Kiosk" },
    { value: "2", label: "Hệ thống" },
];
const FakeDataProvider = (): TableProgressionData[] => { // dũ liệu fake để test
    return Array.from({ length: 25 }, (_, index) => ({
        progressionCode: `201000${index + 1}`,
        customerName: `Lê Huỳnh Ái Vân`,
        serviceName: `Khám tim mạch`,
        timeIssue: `14:35 - 07/11/2021`,
        expiry: `14:35 - 12/11/2021`,
        isActiveStatus: Math.floor(Math.random() * 3) + 1,
        source: `${index % 2 === 0 ? 'Kiosk' : 'Hệ thống'}`
    }));
};
const ProgressionList = (props: ProgressionListProps) => {

    const fakeData = FakeDataProvider();

    return (
        <div className="flex-1 mt-[106px] pl-6 flex flex-col gap-4">
            <h1 className="text-2xl font-nunito font-bold leading-[36px] text-orange-orange-500">Quản lý cấp số</h1>
            <div className="flex gap-6 items-center pr-[104px]">
                <div className="flex items-center gap-6">
                    <Selection width="154px" height="72px" title="Tên dịch vụ"  icon="NoIcon" options={optionService} color="#535261"/>
                    <Selection width="154px" height="72px" title="Tình trạng"  icon="NoIcon" options={optionStatus} color="#535261"/>
                    <Selection width="154px" height="72px" title="Nguồn cấp"  icon="NoIcon" options={optionSource} color="#535261"/>
                </div>
                <div className="flex-grow flex items-center justify-between">
                    <DateFilter />
                    <Search width="240px" icon="Icon" />
                </div>
            </div>
            <div className="flex h-auto justify-between items-start">
                <TableProgression data={fakeData} />
                <AddButton icon={<PlusButton />} title="Cấp số mới" link="/progression/add-progression" />
            </div>

        </div>
    );
};

export default ProgressionList;