import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Clock = styled.time`
  font-size: small;
  color: #fff;
  background-color: #000;
`;

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
  }, [formattedDate]);

  return (
    <>
      <Clock>Dzisiaj jest {time}</Clock>
    </>
  );
}

export default Time;
