import React, { useState } from "react";
import { LogoAlta } from "../../../../assets/logo";
import Button from "../../../../components/Button/Button";
import { Link } from "react-router-dom";
import { EyeIcon, HiddenEyeIcon } from "../../../../assets";

interface UserLoginProps { }

const UserLogin: React.FC<UserLoginProps> = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [inputText, setInputText] = useState("");
    const [isPasswordFocused, setIsPasswordFocused] = useState(false); // Thêm state để theo dõi focus

    const togglePassword = () => setShowPassword((prev) => !prev);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    return (
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
                        className="w-100 h-11 outline-none border border-gray-gray-100 rounded-lg py-[10px] px-3"
                    />
                </div>
            </div>
            <div className="w-auto h-auto flex flex-col gap-1 justify-center items-start mb-12">
                <span className="text-[#37474F] text-lg font-nunito font-normal leading-[27px]">
                    Mật khẩu *
                </span>
                <div className="relative"> {/* Thêm class relative để định vị icon */}
                    <input
                        type={showPassword ? "text" : "password"}
                        className="w-100 h-11 outline-none border border-gray-gray-100 rounded-lg py-[10px] px-3"
                        onFocus={() => setIsPasswordFocused(true)} // Khi focus, set trạng thái
                        onBlur={() => setIsPasswordFocused(false)} // Khi blur, set lại trạng thái
                        onInput={handleInput}
                    />
                    {/* Chỉ hiển thị icon khi input có giá trị và được focus */}
                    {(inputText || isPasswordFocused) && (
                        <div
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                            onClick={togglePassword}
                        >
                            {showPassword ? <EyeIcon /> : <HiddenEyeIcon />}
                        </div>
                    )}
                </div>
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
                />
                <span className="font-nunito text-sm font-normal leading-[21px] text-queue-red">
                    <Link to="">Quên mật khẩu?</Link>
                </span>
            </div>
        </div>
    );
};

export default UserLogin;
