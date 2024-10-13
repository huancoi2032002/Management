import React, { useState, useRef, useEffect } from "react";
import './Search.scss';
import { SearchIcon } from "../../assets";
import SearchDropdown from "./SearchDropdown";

type SearchProps = {
    icon?: "NoIcon" | "Icon"
    width?: string;
};

const Search: React.FC<SearchProps> = ({ width, icon }) => {
    const [searchText, setSearchText] = useState<string>('');
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [recentSearches, setRecentSearches] = useState<string[]>(['React', 'TypeScript', 'Tailwind CSS']);
    const searchRef = useRef<HTMLDivElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const handleClear = () => {
        setSearchText('');
        setShowDropdown(false);
    };

    const handleFocus = () => {
        setShowDropdown(true);
    };

    const handleSearchClick = (searchTerm: string) => {
        setSearchText(searchTerm);
        setShowDropdown(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const IconSearch = () => {
        if (icon === "NoIcon") {
            return (
                <div className="w-full h-11 flex py-[10px] pl-3 pr-4 justify-between items-center  bg-[#FFF] flex-shrink-0">
                    <input
                        type="text"
                        placeholder="Nhập từ khóa"
                        value={searchText}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        className="font-nunito"
                    />
                </div>
            )
        } else if (icon === "Icon") {
            return (
                <div className="w-full h-11 flex py-[10px] pl-3 pr-4 justify-between items-center bg-[#FFF] flex-shrink-0">
                    <input
                        type="text"
                        placeholder="Nhập từ khóa"
                        value={searchText}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        className="font-nunito flex-grow flex-shrink-0 w-0 outline-none text-gray-gray-300"
                    />
                    <SearchIcon className="cursor-pointer w-5 h-5 stroke-orange-500" />
                </div>
            )
        }
    }

    return (
        <div className="w-[300px] h-[72px] flex flex-col flex-shrink-0" style={{ width: width || 'full' }}>
            <span className="font-nunito text-base font-semibold leading-[24px] text-gray-gray-500">Từ khoá</span>
            <div
                className="flex h-11 gap-2 flex-col flex-shrink-0 relative z-30 bg-white border-[1.5px] border-gray-gray-100 rounded-lg overflow-hidden"
                style={{ width: width || 'full' }}
                ref={searchRef}
            >

                {IconSearch()}

                {showDropdown && (
                    <SearchDropdown
                        recentSearches={recentSearches}
                        onSearchClick={handleSearchClick}
                    />
                )}
            </div>
        </div>
    );
};

export default Search;