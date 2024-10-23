import LayoutMain from "../../layouts/LayoutMain/LayoutMain";
import { Routes, Route } from "react-router-dom";
import ProgressionList from "./Components/ProgressionList/ProgressionList";
import AddProgression from "./Components/AddProgression/AddProgression";

interface ProgressionProps {

}

const Progression = () => {

    return (
        <LayoutMain>
            <div className="relative w-full h-full flex">
                <Routes>
                    <Route path="/" element={<ProgressionList />} />
                    <Route path="/add-progression" element={<AddProgression />} />
                </Routes>
            </div>
        </LayoutMain>
    );
};

export default Progression;