import React, {useEffect} from "react";

const Arrow = ({angle}) => {
    const setClasses = (angle) => {
        switch (angle) {
            case 0:
                return "arrow-up";
            case 90:
                return "arrow-left";
            case 180:
                return "arrow-down";
            case 270:
                return "arrow-right";
        }
    }

    const arrowClasses = setClasses(angle);

    return (
        <svg className={arrowClasses} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><g><path fill="#e5e5e5" d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"/></g></svg>
    )
}

export default Arrow;