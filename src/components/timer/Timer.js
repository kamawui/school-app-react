import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Timer = ({endTest, timeInSeconds, timeInMinutes}) => {
    const [minutes, setMinutes] = useState(20);
    const [seconds, setSeconds] = useState(0);
    const navigate = useNavigate();

    const setTime = () => {
        if (minutes === 0 && seconds === 0) {
            endTest();
            navigate("/result");
        } else {
            if (seconds === 0) {
                setMinutes(minutes - 1);
                setSeconds(59);

                if (minutes !== 20) {
                    timeInMinutes.current++;
                }

                timeInSeconds.current = 0;

            } else {
                setSeconds(seconds - 1);
                timeInSeconds.current++;
            }
        }

    }

    useEffect(() => {
        const timer = setInterval(() => setTime(), 1000);

        return () => clearInterval(timer);

    }, [seconds, minutes]);

    return (
        <div className="timer">
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </div>
    );
};

export default Timer;