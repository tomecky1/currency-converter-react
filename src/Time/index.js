import "./style.css";
import React from "react";
import { useEffect, useState } from "react";

function Time() {
    const [time, setTime] = useState(new Date().toLocaleString("pl-PL"));
    console.log(time);

    const date = new Date();
    const newDate = date.toLocaleString("pl-PL");
    const day = date.toLocaleDateString("pl-PL", { weekday: "long" });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleString("pl-PL"));
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }
        , []);

    return (
        <>
            <p className="date">Dzisiaj jest {day}, {newDate}</p>
        </>
    );

};

export default Time;
