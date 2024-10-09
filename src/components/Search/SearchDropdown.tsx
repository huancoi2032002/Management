import React from "react";
import { Vector } from "../../assets";
import './Search.scss'

type SearchDropdownProps = {
    recentSearches: string[];
    onSearchClick: (searchTerm: string) => void;
};

const SearchDropdown: React.FC<SearchDropdownProps> = ({ recentSearches, onSearchClick }) => {
    return (
        <div className="w-full absolute left-0 right-0 top-[46px] bg-white border border-gray-200 rounded-md shadow-md custom-search-drop">
            <div className="p-4 font-bold border-b border-gray-100">
                Tìm kiếm gần đây
            </div>
            <ul className="list-none p-4">
                {recentSearches.length > 0 ? (
                    recentSearches.map((search, index) => (
                        <li
                            key={index}
                            className="py-2 hover:bg-gray-100 flex items-center justify-between"
                        >
                            <div
                                className="flex items-start cursor-pointer w-full"
                                onMouseDown={() => onSearchClick(search)}
                            >
                                {search}
                            </div>
                        </li>
                    ))
                ) : (
                    <li className="py-2 text-gray-500">
                        No recent searches found
                    </li>
                )}
            </ul>
        </div>
    );
};

export default SearchDropdown;