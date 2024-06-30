import React from "react";
import styled from "styled-components";
import { useCurrentDate } from "./useCurrentDate";

const Clock = styled.time`
  font-size: small;
  color: #fff;
  background-color: #000;
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

  return <Clock>Dzisiaj jest {formattedDate(date)}</Clock>;
}

export default Time;
