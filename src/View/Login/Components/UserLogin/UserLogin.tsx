import React, { useState, useEffect } from "react";
import { LogoAlta } from "../../../../assets/logo";
import Button from "../../../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { ErrorIcon, EyeIcon, HiddenEyeIcon } from "../../../../assets";
import RightUserLogin from "../../../../assets/Login.svg";
import { fetchCustomer } from "../../../../Firebase/Firebase";
import { CustomerData } from "../../../../store/User/User";

const UserLogin: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [accountName, setAccountName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [customerData, setCustomerData] = useState<CustomerData[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                fetchCustomer((data) => {
                    setCustomerData(data);
                    console.log("Fetched customer data:", data); // Logs data to console
                });
            } catch (error) {
                console.error("Error fetching customer data:", error);
            }
        };
        fetchData();
    }, []);

    const togglePassword = () => setShowPassword((prev) => !prev);

    const handleLogin = () => {
        const user = customerData.find(
            (customer) => customer.accountName === accountName && customer.password === password
        );

        if (user) {
            setErrorMessage("");
            navigate('/dashboard');
        } else {
            setErrorMessage("Sai mật khẩu hoặc tên đăng nhập");
        }
    };

    return (
        <div className="w-full h-full flex">
            {/* Left section */}
            <div className="flex-1">
                <div className="w-full h-full flex flex-col items-center">
                    <div className="w-full flex justify-center mb-[75px] mt-[82px]">
                        <LogoAlta className="h-[136px] w-[170px]" />
                    </div>
                    <div className="w-auto h-auto flex flex-col gap-1 justify-center items-start mb-4">
                        <span className="text-[#37474F] text-lg font-nunito font-normal leading-[27px]">
                            Tên đăng nhập *
                        </span>
                        <div>
                            <input
                                type="text"
                                value={accountName}
                                onChange={(e) => setAccountName(e.target.value)}
                                className={`w-100 h-11 outline-none border border-gray-gray-100 rounded-lg py-[10px] px-3 ${errorMessage ? "border-red-500" : ""}`}
                            />
                        </div>
                    </div>
                    <div className="w-auto h-auto flex flex-col gap-1 justify-center items-start">
                        <span className="text-[#37474F] text-lg font-nunito font-normal leading-[27px]">
                            Mật khẩu *
                        </span>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-100 h-11 outline-none border border-gray-gray-100 rounded-lg py-[10px] px-3 ${errorMessage ? "border-red-500" : ""}`}
                            />
                            <div
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={togglePassword}
                            >
                                {showPassword ? <EyeIcon /> : <HiddenEyeIcon />}
                            </div>
                        </div>
                    </div>
                    <div className="w-100 mb-12 mt-3">
                        {errorMessage ? (
                            <div className="text-red-500 mb-4 text-sm flex gap-1 items-center">
                                <ErrorIcon />{errorMessage}
                            </div>
                        ) : (
                            <span className="font-nunito text-sm font-normal leading-[21px] text-queue-red">
                                <Link to="/login/forgetpassword">Quên mật khẩu?</Link>
                            </span>
                        )}
                    </div>
                    <div className="w-full h-auto flex flex-col justify-center items-center gap-2">
                        <Button
                            type="Hover"
                            size="Small"
                            skin="Fill"
                            title="Đăng nhập"
                            icon="NoIcon"
                            isTag={false}
                            width="162px"
                            onClick={handleLogin}
                        />
                    </div>
                </div>
            </div>
            {/* Right section */}
            <div className="w-[848px] h-full bg-white relative">
                <img src={RightUserLogin} className="absolute bottom-[83px] left-[79px]" alt="Login illustration" />
            </div>
        </div>
    );
};

export default UserLogin;
