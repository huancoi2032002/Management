import { Routes, Route } from "react-router-dom";
import AddRole from "./Components/AddRole/AddRole";
import ListRole from "./Components/ListRole/ListRole";
import UpdateRole from "./Components/UpdateRole/UpdateRole";

const RoleManagement = () => {
    return (
        <div className="w-full h-full">
            <Routes>
                <Route path="/" element={<ListRole />} />
                <Route path="add-role" element={<AddRole />} />
                <Route path="update-role" element={<UpdateRole />} />
            </Routes>
        </div>
    );
};

export default RoleManagement;
