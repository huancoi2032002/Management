import React, { useState } from 'react';
import { ArrowDown, VectorStart } from '../../assets'; // Thay bằng đường dẫn đến icon của bạn

interface Option {
    value: string;
    label: string;
}

interface SelectionProps {
    options: Option[]
    title: string
    color: string
    icon: 'NoIcon' | 'Icon'
    width: string
    height: string
}

const Selection = (props: SelectionProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option>(props.options[0]);

    const handleSelect = (option: Option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const IconSelect = () => {
        if (props.icon === "NoIcon") {
            return <span className="font-nunito text-base font-medium leading-[24px" style={{color: props.color}}>{props.title}</span>
        }else if(props.icon === "Icon"){
            return(
                <div className='w-full flex items-center gap-1'>
                    <span className="font-nunito font-medium text-base leading-[24px" style={{color: props.color}}>{props.title}</span>
                    <VectorStart />
                </div>
            )
        }
    }

    return (
        <div className="flex flex-col flex-shrink-0 justify-between" style={{width: props.width, height: props.height}}>
            {IconSelect()}
            <div className="relative">
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className={` h-11 py-[10px] px-3 border-[1.5px] bg-white border-gray-gray-100 rounded-lg cursor-pointer flex justify-between items-center 
                            ${isOpen ? "outline outline-[1.5px] outline-orange-orange-400 border-none" : ""}` }
                    style={{width: props.width}}
                >
                    <span style={{color: props.color}}>{selectedOption ? selectedOption.label : 'Select an option'}</span>
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
