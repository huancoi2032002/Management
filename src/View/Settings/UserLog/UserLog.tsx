import DateFilter from "../../../components/DatePicker/DateFilter";
import TableUserLog, { TableUserLogItem } from "./Components/TableUserLog/TableUserLog";
import Search from "../../../components/Search/Search";

interface UserLogProps {

}
const FakeDataProvider = (): TableUserLogItem[] => { // dũ liệu fake để test
    return Array.from({ length: 25 }, (_, index) => ({
        username: `tuyetnguyen@1${index + 1}`,
        timeImpact: `01/12/2021 15:12:17`,
        IP: `192.168.3.1`,
        operation: `Cập nhật thông tin dịch vụ DV_01`
    }));
};
const UserLog = (props: UserLogProps) => {
    const fakeData = FakeDataProvider();
    return (

        <div className="w-full h-full">
            <div className="flex-1 mt-[106px] pl-6 flex flex-col gap-4">
                <div className="flex justify-between items-center pr-[104px]">
                    <DateFilter />
                    <Search icon="Icon"/>
                </div>
                <div className="flex h-auto justify-between items-start">
                    <TableUserLog data={fakeData} />
                </div>
            </div>
        </div>
    );
};

export default UserLog;