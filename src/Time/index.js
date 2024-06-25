import "./style.css";
import React from "react";
import { useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState(" ");
  console.log(time);

  const formattedDate = new Date().toLocaleString("pl-PL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(formattedDate);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, formattedDate);

  return (
    <>
      <p className="date">Dzisiaj jest {time}</p>
    </>
  );
}

export default Time;
