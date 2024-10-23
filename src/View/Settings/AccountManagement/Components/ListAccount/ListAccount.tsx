import TableAccount, { TableAccountData } from "../TableAccount/TableAccount";
import Selection from "../../../../../components/Selection/Selection";
import Search from "../../../../../components/Search/Search";
import AddButton from "../../../../../components/AddButton/AddButton";
import { PlusButton } from "../../../../../assets";

interface ListAccountProps {

}
const FakeDataProvider = (): TableAccountData[] => { // dũ liệu fake để test
    return Array.from({ length: 25 }, (_, index) => ({
        accountName: `DEV${index + 1}`,
        name: `Thiết bị ${index + 1}`,
        phoneNumber: `038869911${index + 1}`,
        email: `tuyetnguyen123@gmail.com`,
        role: `Kế toán`,
        isActive: Math.floor(Math.random() * 2) + 1,
        updateAccount: ""
    }));
};
const optionActives = [ // Dữ liệu của select hoạt động
    { value: "all", label: "Tất cả" },
    { value: "", label: "Hoạt động" },
    { value: "", label: "Ngưng hoạt động" },
];
const ListAccount = (props: ListAccountProps) => {

    const fakeData = FakeDataProvider();

    return (
        <div className="flex-1 mt-[106px] pl-6 flex flex-col gap-4">
            <h1 className="text-2xl font-nunito font-bold leading-[36px] text-orange-orange-500">Danh sách tài khoản</h1>
            <div className="flex justify-between items-center pr-[104px]">
                <div className="flex items-center gap-6">
                    <Selection title="Trạng thái hoạt động" options={optionActives} width="300px" height="72px" color="#282739" icon="NoIcon" />
                </div>
                <Search icon="Icon" width="300px"/>
            </div>
            <div className="flex h-auto justify-between items-start">
                <TableAccount data={fakeData} />
                <AddButton icon={<PlusButton />} title="Thêm tài khoản" link="/settings/account-management/add-account" />
            </div>
        </div>
    );
};

export default ListAccount;