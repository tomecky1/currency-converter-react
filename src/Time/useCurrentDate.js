import { useEffect, useState } from "react";

export const useCurrentDate = (date) => {
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
  return time;
};
