import { Routes, Route } from "react-router-dom";
import LayoutMain from "../../layouts/LayoutMain/LayoutMain";
import ServiceList from "./Components/ServiceList/ServiceList";
import AddService from "./Components/AddService/AddService";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";
import UpdateService from "./Components/UpdateService/UpdateService";

interface ServiceProps {

}

const Service = (props: ServiceProps) => {

    return (
        <LayoutMain>
            <div className="relative w-full h-full flex">
                <Routes>
                    <Route path="/" element={<ServiceList />} />
                    <Route path="/addservice" element={<AddService />} />
                    <Route path="/servicedetail" element={<ServiceDetails />} />
                    <Route path="/updateservice" element={<UpdateService />} />
                </Routes>
            </div>
        </LayoutMain>
    );
};

export default Service;