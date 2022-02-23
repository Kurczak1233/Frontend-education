import { Dispatch, SetStateAction } from "react";
import { useDrop } from "react-dnd";
import GreenBarSmallDot from "src/Images/GreenBarSmallDot.svg";
import { barWidth, dotAbsoluteLeftOffset, elementToIterate } from "../ViewModeBar";
import "./DotElement.scss";

interface IDotElement {
    name: number;
    reversed: boolean;
    setDotOffset: Dispatch<SetStateAction<number>>;
    dotOffset: number;
    setTimeLineMode: React.Dispatch<React.SetStateAction<string>>;
}

const DotElement = ({dotOffset, name, reversed, setDotOffset, setTimeLineMode}: IDotElement) => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: "BOX",
        name: { name },
        drop: () => ({ name: name }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));

    const newDotOffset = (+name * (barWidth / (elementToIterate - 1))) + dotAbsoluteLeftOffset - 8;
    if(canDrop && isOver && dotOffset !== newDotOffset) {
        switch(newDotOffset)
        {
            case 8:{
                setTimeLineMode("day");
                break;
            } 
            case 58:{
                setTimeLineMode("week");
                break;
            } 
            case 108:{
                setTimeLineMode("month");
                break;
            } 
            case 158:{
                setTimeLineMode("quarter");
                break;
            } 
            case 208:{
                setTimeLineMode("year");
                break;
            } 
        }
        setDotOffset(newDotOffset);
    }

    return (reversed ? (<div className="time-line-main__section-wrapper-draggeable-space--small"  ref={drop}>
        <div className="time-line-main__section-wrapper-reversed">
            <img src={GreenBarSmallDot} alt={"Green dot"} />
        </div> 
        </div>) : (<div className="time-line-main__section-wrapper-draggeable-space" ref={drop}>
            <div className="time-line-main__section-wrapper">
                <div className="time-line-main__section-short-part" />
                <img src={GreenBarSmallDot} alt={"Green dot"} />
            </div>
        </div>))
}

export default DotElement;