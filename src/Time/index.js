import "./style.css";
import React from "react";

function Time() {
    const date = new Date();
    const newDate = date.toLocaleString("pl-PL");
    const day = date.toLocaleDateString("pl-PL", { weekday: "long" });


    return (
        <>
            <p className="date">Dzisiaj jest {day}, {newDate}</p>
        </>
    );

};

export default Time;
