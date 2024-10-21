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
                <Route path="/add-account" element={<AddAccount />} />
                <Route path="/update-account" element={<UpdateAccount />} />
            </Routes>
        </div>
    );
};

export default AccountManagement;