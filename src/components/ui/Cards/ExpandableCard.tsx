import PlusMinusSVG from "../../../assets/icons/PlusMinusSVG";
import "./ExpandableCard.css";
import { useEffect, useRef, useState } from "react";


interface ExtendableCardProps {
    title: React.ReactNode;
    activeComponent: React.ReactNode;
    inActiveComponent?: React.ReactNode;
    btnCss?: string;
    classname?: string;
    additionalCss?: string;
}

const ExtendableCard: React.FC<ExtendableCardProps> = ({
    title,
    inActiveComponent,
    activeComponent,
    btnCss = "extendable-card-btn",
    classname = "extendable-card",
    additionalCss = "",
}): JSX.Element => {
    const [active, setActive] = useState<boolean>(false);
    const inactiveRef = useRef<HTMLDivElement>(null);
    const activeRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        // Get the height of inactive or active component based on state
        const inactiveHeight = inactiveRef.current?.scrollHeight || 0;
        const activeHeight = activeRef.current?.scrollHeight || 0;

        if (!active) {
            setHeight(inactiveHeight); // Show inactive height
        } else {
            setHeight(activeHeight); // Expand to active height
        }
    }, [active]); // Runs when `active` changes

    return (
        <div className={`${classname} ${additionalCss}`}>
            {/* Top Section Title & Plus Sign */}
            <div className="extendable-card__top-section">
                {title}
                <div className={`${btnCss} cursor-pointer`} onClick={() => setActive(!active)}>
                    <PlusMinusSVG active={active} />
                </div>
            </div>
            {/* Switchable Area with Animated Height */}
            <div
                style={{
                    height: `${height}px`,
                    transition: "height 0.3s ease-in-out",
                    overflow: "hidden",
                    width: "100%"
                }}
            >
                {/* Render both inactive and active content but switch visibility */}
                <div ref={inactiveRef} style={{ display: active ? "none" : "block" }}>
                    {inActiveComponent}
                </div>
                <div ref={activeRef} style={{ display: active ? "block" : "none" }}>
                    {activeComponent}
                </div>
            </div>
        </div>
    );
};


export default ExtendableCard;