import React, { useState } from "react";
import { LogoAlta } from "../../../../assets/logo";
import { EyeIcon, HiddenEyeIcon } from "../../../../assets";
import Button from "../../../../components/Button/Button";

type ForgetPasswordProps = {
    
}

const ForgetPassword: React.FC<ForgetPasswordProps> = () => {

    const [step, setStep] = useState(1);// Tạo step để hoàn thành từng bước
    const [showPassword, setShowPassword] = useState(false);
    const [inputText, setInputText] = useState("");
    const [isPasswordFocused, setIsPasswordFocused] = useState(false); // Thêm state để theo dõi focus

    const togglePassword = () => setShowPassword((prev) => !prev);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleNext = () => {
        setStep(step + 1)
    } 

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="w-full flex justify-center mb-[102px] mt-[82px]">
                <LogoAlta className="h-[136px] w-[170px]" />
            </div>
            {step === 1 && ( // step 1 thì  nhập gmail mới 
                <div className="w-full h-auto flex flex-col items-center gap-2">
                    <h1 className="font-nunito text-[22px] font-bold leading-[33px]">Đặt lại mật khẩu</h1>
                    <div className="w-auto h-auto flex flex-col gap-1 justify-center items-center mb-12">
                        <span className="text-[#37474F] text-lg font-nunito font-normal leading-[27px]">
                            Vui lòng nhập email để đặt lại mật khẩu của bạn *
                        </span>
                        <div className="relative">
                            <input
                                type="email"
                                className="w-100 h-11 outline-none border border-gray-gray-100 rounded-lg py-[10px] px-3"
                            />
                        </div>
                    </div>
                    <div className="w-full h-auto flex  justify-center items-center gap-6">
                        <Button
                            type="Enable"
                            size="Small"
                            skin="Outline"
                            title="Hủy"
                            icon="NoIcon"
                            isTag={false}
                            width="162px"
                        />
                        <Button
                            type="Hover"
                            size="Small"
                            skin="Fill"
                            title="Tiếp tục"
                            icon="NoIcon"
                            isTag={false}
                            width="162px"
                            onClick={handleNext}
                        />
                    </div>
                </div>
            )}
            {step === 2 && ( //step 2
                <div className="w-full h-auto flex flex-col items-center gap-3">
                    <h1 className="font-nunito text-[22px] font-bold leading-[33px]">Đặt lại mật khẩu mới</h1>
                    <div className="w-auto h-auto flex flex-col gap-1 justify-center items-start mb-4">
                        <span className="text-[#37474F] text-lg font-nunito font-normal leading-[27px]">
                            Mật khẩu
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
                                    {showPassword ? <HiddenEyeIcon /> : <EyeIcon />}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="w-auto h-auto flex flex-col gap-1 justify-center items-start mb-12">
                        <span className="text-[#37474F] text-lg font-nunito font-normal leading-[27px]">
                        Nhập lại mật khẩu 
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
                                    {showPassword ? <HiddenEyeIcon /> : <EyeIcon />}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="w-full h-auto flex  justify-center items-center gap-6">
                        <Button
                            type="Hover"
                            size="Small"
                            skin="Fill"
                            title="Xác nhận"
                            icon="NoIcon"
                            isTag={false}
                            width="162px"
                            onClick={handleNext}
                        />
                    </div>
                </div>
            )}

        </div>
    );
}

export default ForgetPassword;