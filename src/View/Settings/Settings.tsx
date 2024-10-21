import LayoutMain from "../../layouts/LayoutMain/LayoutMain";
import { Routes, Route } from "react-router-dom";
import RoleManagement from "./RoleManagement/RoleManagement";
import AccountManagement from "./AccountManagement/AccountManagement";
import UserLog from "./UserLog/UserLog";

const Settings = () => {
    return (
        <LayoutMain>
            <div className="relative w-full h-full flex">
                <Routes>
                    <Route path="role-management/*" element={<RoleManagement />} />
                    <Route path="account-management/*" element={<AccountManagement />} />
                    <Route path="userlog" element={<UserLog />} />
                </Routes>
            </div>
        </LayoutMain>
    );
};

export default Settings;
