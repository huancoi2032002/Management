
import { Route, Routes } from "react-router-dom";
import LayoutMain from "../../layouts/LayoutMain/LayoutMain";
import DeviceList from "./Components/DeviceList/DeviceList";
import DeviceManagement from "./Components/DeviceManagement/DeviceManagement";
import UpdateDevice from "./Components/UpdateDevice/UpdateDevice";
import DeviceDetail from "./Components/DeviceDetail/DeviceDetail";

interface DeviceProps {

}


const Device = (props: DeviceProps) => {
    return (
        <LayoutMain>
            <div className="relative w-full h-full flex">
                <Routes>
                    <Route path="/" element={<DeviceList />}/>
                    <Route path="/updatedevice" element={<UpdateDevice />}/>
                    <Route path="/devicedetail" element={<DeviceDetail />}/>
                    <Route path="/devicemanagement" element={<DeviceManagement />} />
                </Routes>
            </div>
        </LayoutMain>
    );
};

export default Device;