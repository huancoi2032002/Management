import React, { useState, useEffect } from "react";

interface CircleProcessProps {
    circleSize: number; // Kích thước
    percent: number; //phần trăm
    duration: number; 
    offset: number;
    fontColor: string;
    circleColor: string;
    circleInnerColor: string;
    showPercent?: boolean;
}
// Đây là vòng circle quá trình
const CircleProcess: React.FC<CircleProcessProps> = ({
    circleColor,
    circleSize,
    duration,
    offset,
    fontColor,
    circleInnerColor,
    percent,
    showPercent = true,
}) => {
    const [percentText, setPercentText] = useState(0);
    const [currentPercent, setCurrentPercent] = useState(percent);

    // Cập nhật currentPercent khi percent thay đổi
    useEffect(() => {
        setCurrentPercent(Math.floor(Math.max(Math.min(percent, 100), 0)));
    }, [percent]);

    useEffect(() => {
        const divide = duration / currentPercent;
        const unit = Math.ceil(offset / divide);
        const time = currentPercent > 0 ? divide * unit : 0;

        let timeoutId: ReturnType<typeof setTimeout>;

        if (time) {
            const addPer = () => {
                timeoutId = setTimeout(() => {
                    setPercentText((prev) => {
                        const newPercentText = prev + unit > currentPercent ? currentPercent : prev + unit;
                        if (newPercentText < currentPercent) {
                            addPer();
                        }
                        return newPercentText;
                    });
                }, time);
            };
            addPer();
        }

        return () => clearTimeout(timeoutId);
    }, [currentPercent, duration, offset]);

    const viewbox = `0 0 ${circleSize} ${circleSize}`;
    const strokeWidth = circleSize / 20;
    const diameter = circleSize - strokeWidth;
    const radius = diameter / 2;
    const circumference = 2 * Math.PI * radius;
    const fakePercent = currentPercent === 98 || currentPercent === 99 ? 97 : currentPercent;
    const pCircumference = (circumference * fakePercent) / 100;
    const x = circleSize / 2;
    const y = (circleSize - diameter) / 2;
    const fontSize = circleSize / 3.73;
    const textX = circleSize / 2 - fontSize / 1.2;

    // Tạo keyframe animation
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(
        `@-webkit-keyframes progress${circleSize} { 0% { stroke-dasharray: 0 ${circumference}; } }`,
        styleSheet.cssRules.length,
    );

    const d = `M ${x} ${y} a ${radius} ${radius} 0 0 1 0 ${diameter} a ${radius} ${radius} 0 0 1 0 ${diameter * -1}`;

    return (
        <div
            id="progress"
            style={{
                position: 'relative',
                width: circleSize,
                height: circleSize,
            }}
        >
            <svg viewBox={viewbox} stroke={circleColor}>
                <path
                    style={{
                        fill: 'none',
                        stroke: circleInnerColor,
                        strokeWidth,
                    }}
                    d={d}
                />
                {currentPercent > 0 && (
                    <path
                        style={{
                            fill: 'none',
                            strokeWidth,
                            strokeLinecap: 'square',
                            animation: `progress${circleSize} ${duration}ms ease-out forwards`,
                        }}
                        d={d}
                        strokeDasharray={`${pCircumference} ${circumference}`}
                    />
                )}
            </svg>
            <div
                style={{
                    position: 'absolute',
                    width: '100%',
                    textAlign: 'center',
                    color: fontColor,
                    top: textX,
                    fontSize,
                }}
            >
                {showPercent && (
                    <>
                        {percentText}
                        <span style={{ fontSize: fontSize / 2 }}>%</span>
                    </>
                )}
            </div>
        </div>
    );
};

export default CircleProcess;
