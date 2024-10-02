import React from "react";
import { ChairPersonIcon, FloorIcon, KeyboardIcon, Person1Icon, ScreenIcon, TableIcon, VaseIcon, Person2Icon, Person3Icon, Person4Icon, Person5Icon, VectorPerson1Icon, VectorPerson2Icon, VectorPerson3Icon, VectorPerson4Icon, VectorPerson5Icon } from "../../../../assets";

interface RightUserLoginProps {
    
}
 
const RightUserLogin: React.FC<RightUserLoginProps> = () => {
    return (  
        <div className="w-full h-full ">
            <div className="h-full w-auto flex flex-col justify-end relative">
                <div className="absolute bottom-[302px] left-[454px]">
                    <h1 className="text-[34px] font-nunito leading-[51px] text-orange-orange-500 text-nowrap">Hệ thống</h1>
                    <h1 className="font-nunito text-[36px] font-black leading-[54px] text-orange-orange-500 text-nowrap">QUẢN LÝ XẾP HÀNG</h1>
                </div>
                <div className="absolute bottom-[353px] left-[137px] z-10">
                    <Person1Icon />
                </div>
                <div className="absolute bottom-[418px] left-[250px] z-10">
                    <Person2Icon />
                </div>
                <div className="absolute bottom-[484px] left-[361px] z-10">
                    <Person3Icon />
                </div>
                <div className="absolute bottom-[521px] left-[192px] z-10">
                    <Person4Icon />
                </div>
                <div className="absolute bottom-[587px] left-[305px] z-10">
                    <Person5Icon />
                </div>
                <div className="">
                    <div className="absolute bottom-[254px] left-[179px] z-[1]">
                        <VectorPerson1Icon />
                    </div>
                    <div className="absolute bottom-[282px] left-[293px] z-[1]">
                        <VectorPerson2Icon />
                    </div>
                    <div className="absolute bottom-[311px] left-[344px] z-[1]">
                        <VectorPerson3Icon />
                    </div>
                    <div className="absolute bottom-[300px] left-[232px] z-[1]">
                        <VectorPerson4Icon />
                    </div>
                    <div className="absolute bottom-[329px] left-[316px] z-[1]">
                        <VectorPerson5Icon />
                    </div>
                </div>
                <div className="absolute bottom-[118px] left-[139px] z-10">
                    <VaseIcon />
                </div>
                <div className= "">
                    <div className="absolute bottom-[253px] left-[245px] z-10">
                        <ScreenIcon />
                    </div>
                    <div className="absolute left-[298px] bottom-[218px] z-[9]">
                        <KeyboardIcon />
                    </div>
                    <div className="absolute left-[221px] bottom-[97px] z-[1]">
                        <TableIcon />
                    </div>
                    <div className="absolute bottom-[93px] left-[315px] z-10">
                        <ChairPersonIcon />
                    </div>
                </div>
                <div className="ml-[79px] mb-[83px]">
                    <FloorIcon />
                </div>
            </div>
        </div>
    );
}
 
export default RightUserLogin;