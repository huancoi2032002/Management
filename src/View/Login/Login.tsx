import React from "react";
import LayoutLogin from "../../layouts/LayoutLogin/LayoutLogin";
import UserLogin from "./Components/UserLogin/UserLogin";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import { Route, Routes } from "react-router-dom";


const Login: React.FC = () => {
    return (
        <LayoutLogin> 
            <Routes>
                <Route path="/" element={<UserLogin />} />
                <Route path="/forgetpassword" element={<ForgetPassword />} />
            </Routes>
        </LayoutLogin>
    );
}

export default Login;