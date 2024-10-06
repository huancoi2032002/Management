interface DotProps {
    width: string;
    height: string;
    bg: string;
    radius: string
}

const Dot = (props: DotProps) => {
    return (
        <div
            style={{
                width: `${props.width}px`,  // Thay đổi width
                height: `${props.height}px`, // Thay đổi height
                backgroundColor: `#${props.bg}`, // Thay đổi backgroundColor
                flexShrink: 0, // Giữ nguyên thuộc tính này
                borderRadius: `${props.radius}px`
            }}
        >
        </div>
    );
};

export default Dot;
