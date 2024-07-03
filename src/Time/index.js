import React from "react";
import styled from "styled-components";
import { useCurrentDate } from "./useCurrentDate";

const Clock = styled.time`
  font-size: small;
  color: grey;
  background-color: #000;
  text-align: end;
`;

function formattedDate() {
  const fDate = new Date().toLocaleString("pl-PL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return fDate;
}

function Time() {
  const date = useCurrentDate();

  return (
    <Clock>
      <p>Dzisiaj jest {formattedDate(date)}</p>
    </Clock>
  );
}

export default Time;
