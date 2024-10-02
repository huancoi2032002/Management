import React from "react";
import LayoutLogin from "../../layouts/LayoutLogin/LayoutLogin";
import UserLogin from "./Components/UserLogin/UserLogin";
import RightUserLogin from "./Components/UserLogin/RightUserLogin";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import RightForgetPassword from "./Components/ForgetPassword/RightForgetPassword";


//Em chưa chỉnh route cho quên mất khẩu
const Login: React.FC = () => {
    return (
        <LayoutLogin> 
            <div className="w-full h-full flex">
                {/* Div bên trái với flex-grow */}
                <div className="flex-1">
                    <ForgetPassword />
                </div>
                {/* Div bên phải với chiều rộng cố định */}
                <div className="w-[848px] bg-white">
                    {/* Nội dung bên phải */}
                    <RightForgetPassword /> 
                </div>
            </div>
        </LayoutLogin>
    );
}

export default Login;