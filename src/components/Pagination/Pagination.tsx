import React, { useEffect, useState } from 'react';
import { AngleLeftIcon, AngleRightIcon } from '../../assets';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const pageNumbers = () => {
        const pages: (number | string)[] = [];

        if (isWideScreen) {
            // Display all pages for wide screens
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Display a limited number of pages with ellipsis for small screens
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }

        return pages;
    };

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className="flex items-center justify-center py-1">
            <button
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 xl:py-2 mx-2"
            >
                <AngleLeftIcon className={currentPage === 1 ? 'fill-[#A9A9B0] stroke-[#A9A9B0]' : 'fill-[#7E7D88] stroke-[#7E7D88]'} />
            </button>
            {pageNumbers().map((page, index) =>
                typeof page === 'number' ? (
                    <button
                        key={index}
                        onClick={() => handlePageChange(page)}
                        className={`rounded-[4px] px-3 py-1 mx-1 ${currentPage === page ? 'bg-orange-orange-500 text-white' : 'text-[#7E7D88]'}`}
                    >
                        {page}
                    </button>
                ) : (
                    <span key={index} className="px-4 py-2 mx-1 text-[#7E7D88]">
                        {page}
                    </span>
                )
            )}
            <button
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-2"
            >
                <AngleRightIcon className={currentPage === totalPages ? 'fill-[#A9A9B0] stroke-[#A9A9B0]' : 'fill-[#7E7D88] stroke-[#7E7D88]'} />
            </button>
        </div>
    );
};

export default Pagination;