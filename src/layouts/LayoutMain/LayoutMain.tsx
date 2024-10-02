import React from "react";
import Menubar from "../../components/Menubar/Menubar";

type LayoutMainProps =  {
    children: React.ReactNode
}
 
const LayoutMain: React.FC<LayoutMainProps> = ({children}) => { // Đây là layout chính
    return (  
        <div className="bg-black w-full h-screen flex justify-center items-center">
            <div className="w-[1440px] h-[810px] bg-bg-dashboard rounded-2xl overflow-hidden flex">
                <div className="h-full">
                    <Menubar />
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}
 
export default LayoutMain;