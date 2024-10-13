import { ArrowDown } from '../../../../assets';
import React, { useState } from 'react';

interface DropdownProps {
    items: string[];
    defaultSelected?: string;
    onSelect?: (selected: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ items, defaultSelected = items[0], onSelect }) => {
    const [selectedItem, setSelectedItem] = useState(defaultSelected);

    const handleSelect = (item: string) => {
        setSelectedItem(item);
        if (onSelect) {
            onSelect(item); 
        }
    };

    return (
        <div className="drop-down group min-w-24 relative rounded-lg flex items-center ps-2 gap-2 justify-between bg-white border border-gray-400 hover:border-orange-500">
            <div className="selct-input capitalize">{selectedItem}</div>
            <div className="text-orange-500">
                <ArrowDown  />
            </div>

            <div className="drop-select absolute top-full bg-white w-full opacity-0 group-hover:opacity-100 group-hover:translate-y-1 left-0 rounded-lg shadow transition-all duration-300 ease-in-out">
                {items.map((item) => (
                    <div
                        key={item}
                        className="drop-item capitalize p-2 hover:bg-orange-100"
                        onClick={() => handleSelect(item)}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;