import React from "react";
import styled from "styled-components";
import { useCurrentDate } from "./useCurrentDate";

const Clock = styled.time`
  font-size: small;
  color: #fff;
  background-color: #000;
`;

function Time() {
  const date = useCurrentDate();

  return (
    <>
      <Clock>Dzisiaj jest {date}</Clock>
    </>
  );
}

export default Time;
