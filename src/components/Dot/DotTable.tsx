interface DotTableProps {
    width: string;
    height: string;
    bg: string;
    label: string
}

const DotTable = (props: DotTableProps) => {
    return (
        <div className="w-auto h-auto flex items-center gap-1">
            <div
                style={{
                    width: `${props.width}px`,  // Thay đổi width
                    height: `${props.height}px`, // Thay đổi height
                    backgroundColor: `#${props.bg}`, // Thay đổi backgroundColor
                    flexShrink: 0, // Giữ nguyên thuộc tính này
                    borderRadius: `100%`
                }}
            >
            </div>
            <span className="text-sm ">{props.label}</span>
        </div>
    );
};

export default DotTable;
