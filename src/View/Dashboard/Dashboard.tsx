import React from "react";
import LayoutMain from "../../layouts/LayoutMain/LayoutMain";
import Topbar from "../../components/Topbar/Topbar";
import CardDashboard from "./Components/CardDashboard/CardDashboard";
import { Ellipse10, Ellipse11, Ellipse12, Ellipse13, PersonCall, Saved, Schedule, Schedule1 } from "../../assets";
import { DotRowIcon, ListIcon, MessageIcon, QuestionMarkIcon } from "../../assets/constrain";
import CircleProcess from "./Components/CircleProcess/CircleProcess";
import './Dashboard.scss'
import { MonitorIcon } from "../../assets/constrain";
import Dot from "../../components/Dot/Dot";
import DatePicker from "../../components/DatePicker/DatePicker";


interface DashboardProps {

}

const Dashboard: React.FC<DashboardProps> = () => { //Đây là trang Dashboard

    let totalEquipment = 4221; //Tổng số thiết bị
    let totalEquipmentActive = 3799;
    let percentEquipment = Math.ceil((totalEquipmentActive / totalEquipment) * 100); // Phần trăm

    let totalService = 276;//Tổng số Dịch vụ
    let totalServiceActive = 210;
    let percentService = Math.ceil((totalServiceActive / totalService) * 100);

    let totalSeries = 4221 // Tổng số Cấp số
    let totalSeriesActive = 3721;
    let seriesWaitting = 486;
    let seriesSkip =totalSeries - totalSeriesActive - seriesWaitting;
    let percentTotalSeries = Math.ceil((totalSeriesActive / totalSeries) * 100);
    let percentTotalSeriesWatting = Math.ceil((seriesWaitting / totalSeries) * 100);
    let percentTotalSeriesSkip = Math.ceil((seriesSkip / totalSeries) * 100);



    return (
        <LayoutMain>
            <div className="relative w-full h-full flex">
                <div className="absolute top-0 z-[1]">
                    <Topbar />
                </div>
                <div className="flex-1 mt-[106px] px-6 flex flex-col gap-4">
                    <div>
                        <h1 className="text-2xl font-nunito font-bold leading-[36px] text-orange-orange-500">Biểu đồ cấp số</h1>
                    </div>
                    <div className="w-full flex justify-between">
                        <CardDashboard
                            ellipse={<Ellipse10 />}
                            title="Số thứ tự đã cấp"
                            total={4221}
                            icon={<Schedule />}
                            percent={32.41}
                        />
                        <CardDashboard
                            ellipse={<Ellipse11 />}
                            title="Số thứ tự đã sử dụng"
                            total={3721}
                            icon={<Schedule1 />}
                            percent={-32.41}
                        />
                        <CardDashboard
                            ellipse={<Ellipse12 />}
                            title="Số thứ tự đang chờ"
                            total={468}
                            icon={<PersonCall />}
                            percent={56.41}
                        />
                        <CardDashboard
                            ellipse={<Ellipse13 />}
                            title="Số thứ tự đã bỏ qua"
                            total={32}
                            icon={<Saved />}
                            percent={-22.41}
                        />
                    </div>
                </div>
                <div className="h-full bg-white pt-[106px]">
                    <div className="w-[401px] h-full flex-shrink-0 menubar px-6 flex flex-col gap-4">
                        <div className="">
                            <h1 className="text-2xl font-nunito font-bold leading-[36px] text-orange-orange-500">Tổng quan</h1>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="w-[353px] h-[83px] flex-shrink-0 cardmenu flex items-center px-4 gap-4">{/*Đây là card ở tổng quan */}
                                <div className="flex items-center gap-3">
                                    <div className="relative w-[60px] h-[60px]">
                                        <CircleProcess
                                            circleSize={60}
                                            duration={1000}
                                            offset={100}
                                            fontColor="#535261"
                                            circleInnerColor="#EAEAEC"
                                            percent={percentEquipment}
                                            circleColor="#FF7506"
                                        />
                                        <div className="absolute w-[60px] h-[60px] flex justify-center items-center top-0">
                                            <CircleProcess
                                                circleSize={50}
                                                duration={1000}
                                                offset={100}
                                                fontColor="#535261"
                                                circleInnerColor="#EAEAEC"
                                                percent={100 - percentEquipment}
                                                circleColor="#7E7D88"
                                                showPercent={false}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col ">
                                        <span className="text-gray-gray-400 font-nunito text-2xl font-bold leading-[36px] w-16 h-9">{totalEquipment.toLocaleString('de-DE')}</span>
                                        <div className="flex gap-1 items-center">
                                            <MonitorIcon className="stroke-orange-orange-500" />
                                            <span className="text-sm font-medium font-nunito leading-[21px] text-orange-orange-500">Thiết bị</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col gap-[5px]">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-[6px]">
                                            <Dot width="4" height="4" bg="FFD130" radius="4" />
                                            <span className="text-gray-gray-300 font-nunito text-xs leading-[21px] h-[21px]">Đang hoạt động</span>
                                        </div>
                                        <span className="text-orange-orange-500 font-nunito leading-[18px] text-sm font-semibold h-[21px]">{totalEquipmentActive.toLocaleString('de-DE')}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-[6px]">
                                            <Dot width="4" height="4" bg="7E7D88" radius="4" />
                                            <span className="text-gray-gray-300 font-nunito text-xs leading-[21px] h-[21px]">Ngưng hoạt động</span>
                                        </div>
                                        <span className="text-orange-orange-500 font-nunito leading-[18px] text-sm font-semibold h-[21px]">{(totalEquipment - totalEquipmentActive).toLocaleString('de-DE')}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[353px] h-[83px] flex-shrink-0 cardmenu flex items-center px-4 gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-[60px] h-[60px]">
                                        <CircleProcess
                                            circleSize={60}
                                            duration={1000}
                                            offset={100}
                                            fontColor="#535261"
                                            circleInnerColor="#EAEAEC"
                                            percent={percentService}
                                            circleColor="#4277FF"
                                        />
                                        <div className="absolute w-[60px] h-[60px] flex justify-center items-center top-0">
                                            <CircleProcess
                                                circleSize={50}
                                                duration={1000}
                                                offset={100}
                                                fontColor="#535261"
                                                circleInnerColor="#EAEAEC"
                                                percent={100 - percentService}
                                                circleColor="#7E7D88"
                                                showPercent={false}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col ">
                                        <span className="text-gray-gray-400 font-nunito text-2xl font-bold leading-[36px] w-16 h-9">{totalService.toLocaleString('de-DE')}</span>
                                        <div className="flex gap-1 items-center">
                                            <div className="relative">
                                                <div className="absolute bottom-[4px] left-[3px]">
                                                    <DotRowIcon className="stroke-[#4277FF]" />
                                                </div>
                                                <div>
                                                    <MessageIcon className="stroke-[#4277FF]" />
                                                </div>
                                                <div className="absolute bottom-[10px] left-[11px]">
                                                    <QuestionMarkIcon className="stroke-[#4277FF]" />
                                                </div>
                                            </div>
                                            <span className="text-sm font-medium font-nunito leading-[21px] text-[#4277FF]">Dịch vụ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col gap-[5px]">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-[6px]">
                                            <Dot width="4" height="4" bg="FFD130" radius="4" />
                                            <span className="text-gray-gray-300 font-nunito text-xs leading-[21px] h-[21px]">Đang hoạt động</span>
                                        </div>
                                        <span className="text-[#4277FF] font-nunito leading-[18px] text-sm font-semibold h-[21px]">{totalServiceActive.toLocaleString('de-DE')}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-[6px]">
                                            <Dot width="4" height="4" bg="7E7D88" radius="4" />
                                            <span className="text-gray-gray-300 font-nunito text-xs leading-[21px] h-[21px]">Ngưng hoạt động</span>
                                        </div>
                                        <span className="text-[#4277FF] font-nunito leading-[18px] text-sm font-semibold h-[21px]">{(totalService - totalServiceActive).toLocaleString('de-DE')}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[353px] h-[83px] flex-shrink-0 cardmenu flex items-center px-4 gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-[60px] h-[60px]">
                                        <CircleProcess
                                            circleSize={60}
                                            duration={1000}
                                            offset={100}
                                            fontColor="#535261"
                                            circleInnerColor="#EAEAEC"
                                            percent={percentTotalSeries}
                                            circleColor="#35C75A"
                                        />
                                        <div className="absolute w-[60px] h-[60px] flex justify-center items-center top-0">
                                            <CircleProcess
                                                circleSize={50}
                                                duration={1000}
                                                offset={100}
                                                fontColor="#535261"
                                                circleInnerColor="#EAEAEC"
                                                percent={percentTotalSeriesWatting}
                                                circleColor="#7E7D88"
                                                showPercent={false}
                                            />
                                        </div>
                                        <div className="absolute w-[60px] h-[60px] flex justify-center items-center top-0">
                                            <CircleProcess
                                                circleSize={40}
                                                duration={1000}
                                                offset={100}
                                                fontColor="#535261"
                                                circleInnerColor="#EAEAEC"
                                                percent={percentTotalSeriesSkip}
                                                circleColor="#F178B6"
                                                showPercent={false}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col ">
                                        <span className="text-gray-gray-400 font-nunito text-2xl font-bold leading-[36px] w-16 h-9">{totalSeries.toLocaleString('de-DE')}</span>
                                        <div className="flex gap-1 items-center">
                                            <ListIcon className="stroke-[#35C75A]" />
                                            <span className="text-sm font-medium font-nunito leading-[21px] text-[#35C75A]">Cấp số</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col gap-[5px]">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-[6px]">
                                            <Dot width="4" height="4" bg="35C75A" radius="4" />
                                            <span className="text-gray-gray-300 font-nunito text-xs leading-[21px] h-[21px]">Đang hoạt động</span>
                                        </div>
                                        <span className="text-[#35C75A] font-nunito leading-[18px] text-sm font-semibold h-[21px]">{totalSeriesActive.toLocaleString('de-DE')}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-[6px]">
                                            <Dot width="4" height="4" bg="7E7D88" radius="4" />
                                            <span className="text-gray-gray-300 font-nunito text-xs leading-[21px] h-[21px]">Ngưng hoạt động</span>
                                        </div>
                                        <span className="text-[#35C75A] font-nunito leading-[18px] text-sm font-semibold h-[21px]">{seriesWaitting.toLocaleString('de-DE')}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-[6px]">
                                            <Dot width="4" height="4" bg="FFD130" radius="4" />
                                            <span className="text-gray-gray-300 font-nunito text-xs leading-[21px] h-[21px]">Ngưng hoạt động</span>
                                        </div>
                                        <span className="text-[#35C75A] font-nunito leading-[18px] text-sm font-semibold h-[21px]">{seriesSkip.toLocaleString('de-DE')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <DatePicker />
                        </div>
                    </div>
                </div>
            </div>
        </LayoutMain>
    );
}

export default Dashboard;