interface RectangleProps {
    height: string
}

const Rectangle = (props: RectangleProps) => {
    
    return (
        <div className="w-1 bg-orange-orange-200 rounded-[43px]" style={{height: props.height}}>
            
        </div>
    );
};

export default Rectangle;