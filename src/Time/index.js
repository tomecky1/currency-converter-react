import "./style.css";
import React from "react";
import { useEffect, useState } from "react";

function Time() {
    const [time, setTime] = useState(new Date().toLocaleString("pl-PL"));
    console.log(time);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleString("pl-PL", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }));
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }
        , []);

    return (
        <>
            <p className="date">Dzisiaj jest {time}</p>
        </>
    );

};

export default Time;
