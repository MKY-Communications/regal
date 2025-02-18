import "./PlusMinusSVG.css"


interface PlusMinusSVGProps {
    active: boolean;
    className?: string;
}

const PlusMinusSVG: React.FC<PlusMinusSVGProps> = ({active, className="svg-plus-minus"}): JSX.Element => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="100%" height="100%" viewBox="0 0 32 33" fill="none">
            <circle cx="16" cy="16.1704" r="16" fill={active ? "#292768" : "#FAA225"}/>
            <line x1="8.5" y1="15.6704" x2="23.5" y2="15.6704" stroke="white"/>
            {!active && <line x1="16.1582" y1="8.67041" x2="16.1582" y2="23.6704" stroke="white"/>}
        </svg>
    )
}



export default PlusMinusSVG;