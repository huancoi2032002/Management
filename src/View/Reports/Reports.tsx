import DateFilter from "../../components/DatePicker/DateFilter";
import LayoutMain from "../../layouts/LayoutMain/LayoutMain";
import AddButton from "../../components/AddButton/AddButton";
import { DownLoadIcon } from "../../assets";
import TableReports, { TableReportsData } from "./Components/TableReports/TableReports";


const FakeDataProvider = (): TableReportsData[] => { // dũ liệu fake để test
    return Array.from({ length: 25 }, (_, index) => ({
        stt: `201000${index + 1}`,
        serviceName: `Khám ${index + 1}`,
        timeIssue: `07:20 - 0${index + 1}/10/2021`,
        isActiveStatus: index % 2 === 0, // Chẵn: Active, Lẻ: Inactive
        source: index % 2 === 0,
    }));
};
const Reports = () => {
    const fakeData = FakeDataProvider();
    return (
        <LayoutMain>
            <div className="relative w-full h-full flex">
                <div className="flex-1 mt-[106px] pl-6 flex flex-col gap-4">
                    <h1 className="text-2xl font-nunito font-bold leading-[36px] text-orange-orange-500">Danh sách thiết bị</h1>
                    <div className="flex justify-between items-center pr-[104px]">
                        <DateFilter />
                    </div>
                    <div className="flex h-auto justify-between items-start">
                        <TableReports data={fakeData} />
                        <AddButton icon={<DownLoadIcon />} title="Tải về" link="/download" />
                    </div>
                </div>
            </div>
        </LayoutMain>
    );
};

export default Reports;