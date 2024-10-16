import Search from "../../../../../components/Search/Search";
import TableRole from "../TableRole/TableRole";
import AddButton from "../../../../../components/AddButton/AddButton";
import { PlusButton } from "../../../../../assets";
import { TableRoleItem } from "../TableRole/TableRole";



const FakeDataProvider = (): TableRoleItem[] => {
    return Array.from({ length: 100 }, (_, index) => ({
        roleName: `Kế toán ${index + 1}`,
        numberPerson: `${index + 1}`,
        describe: `Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát ${index + 1}`,
        roleUpdate: "" 
    }));
};
const ListRole = () => {
    const fakeData = FakeDataProvider();
    return (
        <div className="flex-1 mt-[106px] pl-6 flex flex-col gap-4">
            <h1 className="text-2xl font-nunito font-bold leading-[36px] text-orange-orange-500">Danh sách vai trò</h1>
            <div className="flex justify-end items-center pr-[104px]">
                <Search icon="Icon" width="240px"/>
            </div>
            <div className="flex h-auto justify-between items-start">
                <TableRole data={fakeData} />
                <AddButton icon={<PlusButton />} title="Thêm vai trò" link="/settings/role-management/add-role" />
            </div>
        </div>
    );
};

export default ListRole;