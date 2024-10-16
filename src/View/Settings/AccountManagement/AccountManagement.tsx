import AddAccount from "./Components/AddAccount/AddAccount";
import ListAccount from "./Components/ListAccount/ListAccount";
import UpdateAccount from "./Components/UpdateAccount/UpdateAccount";
import { Routes, Route } from "react-router-dom";

interface AccountManagementProps {
    
}

const AccountManagement = (props: AccountManagementProps) => {
    
    return (
        <div className="w-full h-full">
            <Routes>
                <Route path="/" element={<ListAccount />} />
            </Routes>
        </div>
    );
};

export default AccountManagement;