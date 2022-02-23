import GreenBarDot from "src/Images/GreenBarDot.svg";
import "./ViewModeBar.scss";
import { useDrag } from 'react-dnd'
import DotElement from "./DotElement/DotElement";
import { useEffect, useState } from "react";
import { getEmptyImage } from "react-dnd-html5-backend";

export const dotAbsoluteLeftOffset = 16;
export const barWidth = 200;
export const elementToIterate = 5;

interface IViewModeBar {
    setTimeLineMode: React.Dispatch<React.SetStateAction<string>>
}

const ViewModeBar = ({setTimeLineMode}: IViewModeBar) => {
    const [dotOffset, setDotOffset] = useState<number>(108);
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: "BOX",
        item: { name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }));

    useEffect(() => {
      dragPreview(getEmptyImage(), { captureDraggingState: true })
    }, [])

    const renderSections = () => {
        const elements = [];
        for (let i = 0; i < elementToIterate; i++) {
            elements.push(
                <DotElement name={i} reversed={i === 0} setDotOffset={setDotOffset} dotOffset={dotOffset} setTimeLineMode={setTimeLineMode}/>
            )
        }
        return elements;
    }

    return <div className="time-line-main__header-mode-container">
        <img ref={drag} src={GreenBarDot} alt={"Green dot"} 
        className={"time-line-main__main-dot"} style={{ left: dotOffset }} />
        <div className="time-line_main__header-mode-bar" >
            {renderSections()}
        </div>
    </div>
}

export default ViewModeBar;