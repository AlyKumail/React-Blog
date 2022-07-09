import { useState } from "react";
import { Link } from "react-router-dom";

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleIndex = (id) => {
        setToggleState(id);
    };
    return (
        <div className="tabs">
            <Link
                to="/"
                className={toggleState === 1 ? "active" : ""}
                onClick={() => toggleIndex(1)}
            >
                All
            </Link>
            <Link
                to="/tech"
                className={toggleState === 2 ? "active" : ""}
                onClick={() => toggleIndex(2)}
            >
                Tech
            </Link>
            <Link
                to="/sports"
                className={toggleState === 3 ? "active" : ""}
                onClick={() => toggleIndex(3)}
            >
                Sports
            </Link>
            <Link
                to="/health"
                className={toggleState === 4 ? "active" : ""}
                onClick={() => toggleIndex(4)}
            >
                Health
            </Link>
            <Link
                to="/politics"
                className={toggleState === 5 ? "active" : ""}
                onClick={() => toggleIndex(5)}
            >
                Politics
            </Link>
        </div>
    );
};

export default Tabs;
