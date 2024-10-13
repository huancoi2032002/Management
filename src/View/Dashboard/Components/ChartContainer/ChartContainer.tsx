import LineChart from '../../../../components/Chart/Chart';
import Dropdown from '../Dropdown/Dropdown';
import { useState } from 'react';
function StaticChart() {
    const [selectedDropdown, setSelectedDropdown] = useState('ngày');

    const data = [
        2800, 3300, 3600, 3800, 4000, 4550, 4850, 4600, 4200, 4600, 4650, 4200, 4600, 4800, 4750, 4850, 4350, 3750,
        3800, 3700, 4600, 4700, 3900, 3850, 3800, 3700, 3750, 3800, 3750, 3700,
    ];
    const labels = Array.from({ length: 30 }, (_, i) => (i + 1).toString());
    return (
        <div className="line-chart-container bg-white p-5 rounded-lg    w-full">
            <div className="chart-header flex justify-between">
                <div className="title text-black  text-xl font-bold">Bảng thống kê theo {selectedDropdown}</div>
                <div className="filter-time flex gap-2 items-center">
                    <span className="text-base text-black font-semibold">Xem theo</span>
                    <Dropdown
                        items={['ngày', 'tháng', 'năm']}
                        defaultSelected={selectedDropdown}
                        onSelect={(item) => setSelectedDropdown(item)}
                    />
                </div>
            </div>
            <LineChart data={data} labels={labels} />
        </div>
    );
}

export default StaticChart;