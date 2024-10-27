import LayoutMain from "../../layouts/LayoutMain/LayoutMain";
import './Profile.scss';
import Input from "../../components/Input/Input";
import React, { useState, useEffect } from "react";
import { fetchCustomer } from "../../Firebase/Firebase";
import { CustomerData } from "../../store/User/User";

interface InputTextProps {
    label: string;
    value: string;
}

const InputText: React.FC<InputTextProps> = ({ label, value }) => (
    <div className="inline-flex flex-col items-start gap-2">
        <div className="flex gap-1 items-center">
            <span className="text-base font-medium leading-[24px]">{label}</span>
        </div>
        <Input type="TextInput" haveIcon="NoIcon" status="ReadOnly" width="384px" height="44px" value={value} />
    </div>
);

const Profile: React.FC = () => {
    const [customerData, setCustomerData] = useState<CustomerData | null>(null); // Dùng null để xác định khi dữ liệu chưa được load

    useEffect(() => {
        const fetchData = async () => {
            try {
                fetchCustomer((data) => {
                    if (data.length > 0) {
                        setCustomerData(data[0]); // Lấy dữ liệu của khách hàng đầu tiên
                        console.log("Fetched customer data:", data[0]); // Log dữ liệu khách hàng đầu tiên
                    }
                });
            } catch (error) {
                console.error("Error fetching customer data:", error);
            }
        };
        fetchData();
    }, []);

    if (!customerData) return <div>Loading...</div>; // Hiển thị loading khi dữ liệu chưa sẵn sàng

    return (
        <LayoutMain>
            <div className="w-full h-full mt-[168px] pl-6">
                <div className="w-[1112px] pt-10 px-6 pb-[54px] bg-white rounded-[12px] profile">
                    <div className="w-full flex gap-6">
                        <div className="w-[248px] flex flex-col justify-center items-center gap-5">
                            <div className="w-[248px] h-[248px] flex-shrink-0 rounded-full overflow-hidden">
                                <img src={customerData.avatar} className="w-full h-full object-cover" alt="Avatar" />
                            </div>
                            <span className="text-gray-gray-500 text-2xl leading-[36px] font-semibold">
                                {customerData.name}
                            </span>
                        </div>
                        <div className="flex-grow grid grid-cols-2">
                            <InputText label="Tên người dùng" value={customerData.name} />
                            <InputText label="Tên đăng nhập" value={customerData.accountName} />
                            <InputText label="Số điện thoại" value={customerData.phoneNumber} />
                            <InputText label="Mật khẩu" value={customerData.password} />
                            <InputText label="Email:" value={customerData.email} />
                            <InputText label="Vai trò:" value={customerData.roleName} />
                        </div>
                    </div>
                </div>
            </div>
        </LayoutMain>
    );
};

export default Profile;
