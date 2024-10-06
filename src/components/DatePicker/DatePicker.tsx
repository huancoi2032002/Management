import './DatePicker.scss';
import { AngleLeft, AngleRight } from "../../assets/index";


const DatePicker = () => {

    return (
        <div className="w-[353px] flex py-4 px-[10px] custom-datepicker justify-center items-center">
            <div className="">
                <div className="flex justify-between items-center" >
                    <AngleLeft />
                    <div className="w-[108px] h-10 flex font-nunito">
                        <div className="inline-flex h-10 py-[10px] px-1 justify-center items-center ">
                            <p className="custom-p-datepicker">19</p>
                        </div>
                        <div className="inline-flex h-10 py-[10px] px-1 justify-center items-center ">
                            <p className="custom-p-datepicker">Nov</p>
                        </div>
                        <div className="inline-flex h-10 py-[10px] px-1 justify-center items-center ">
                            <p className="custom-p-datepicker">2024</p>
                        </div>
                    </div>
                    <AngleRight />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="279" height="2" viewBox="0 0 279 2" fill="none">
                    <path d="M0 1H279" stroke="#666666" />
                </svg>
                <div className="inline-flex flex-col items-start">
                    <div className="w-[279px] flex justify-between items-start font-nunito">
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-title-day">Mo</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-title-day">Tu</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-title-day">We</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-title-day">Th</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-title-day">Fr</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-title-day">Sa</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-title-day">Su</p>
                        </div>
                    </div>
                    <div className="w-[279px] flex justify-between items-start font-nunito">
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day text-[#C2C2C2]">27</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day text-[#C2C2C2]">28</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day text-[#C2C2C2]">29</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day text-[#C2C2C2]">30</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">1</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">2</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">3</p>
                        </div>
                    </div>
                    <div className="w-[279px] flex justify-between items-start font-nunito">
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">4</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">5</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">6</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">7</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">8</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">9</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">10</p>
                        </div>
                    </div>
                    <div className="w-[279px] flex justify-between items-start font-nunito">
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">11</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">12</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">13</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">14</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">15</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">16</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">17</p>
                        </div>
                    </div>
                    <div className="w-[279px] flex justify-between items-start font-nunito">
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">18</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] bg-orange-orange-500 rounded-[8px] flex-shrink-0">
                            <p className="text-sm  text-[#FFF]">19</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">20</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">21</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">22</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">23</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">24</p>
                        </div>
                    </div>
                    <div className="w-[279px] flex justify-between items-start font-nunito">
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">25</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">26</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">27</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">28</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">29</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">30</p>
                        </div>
                        <div className="w-9 h-9 flex flex-col justify-center items-center gap-[10px] flex-shrink-0">
                            <p className="custom-p-day">31</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DatePicker // Đây là DatePicker, hiện chưa chọn được