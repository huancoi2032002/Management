import React, { useState } from 'react';
import { ArrowDown } from '../../assets'; // Thay bằng đường dẫn đến icon của bạn

interface Option {
    value: string;
    label: string;
}

interface SelectionProps {
    options: Option[];
    title: string;
}

const Selection = (props: SelectionProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option>(props.options[0]);

    const handleSelect = (option: Option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="w-[300px] h-[72px] flex flex-col flex-shrink-0 justify-between">
            <span className="font-nunito text-base font-semibold leading-[24px] text-gray-gray-500">{props.title}</span>
            <div className="relative">
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-[300px] h-11 py-[10px] px-3 border-[1.5px] bg-white border-gray-gray-100 rounded-lg cursor-pointer flex justify-between items-center 
                            ${isOpen ? "outline outline-[1.5px] outline-orange-orange-400 border-none" : ""}`}
                >
                    <span>{selectedOption ? selectedOption.label : 'Select an option'}</span>
                    <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}> {/* Icon xoay khi isOpen */}
                        <ArrowDown />
                    </div>
                </div>

                {isOpen && (
                    <div className="absolute w-full bg-white border border-gray-gray-100 mt-[1px] rounded-lg shadow-lg z-10 py-2">
                        {props.options.map((option, index) => (
                            <div
                                key={index}
                                onClick={() => handleSelect(option)}
                                className={`py-2 px-3 cursor-pointer font-nunito leading-[24px] text-[#535261] hover:bg-orange-orange-50
                                ${selectedOption?.value === option.value ? "bg-orange-orange-50" : ""}`}  // chỗ này khi chọn option nào thì thêm bg cho nó
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}

            </div>

        </div>
    );
};

export default Selection;
