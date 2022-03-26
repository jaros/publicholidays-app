import React from "react";

export const DigiClock: React.FC<{ time: Date }> = ({ time }) => {
  const padLeadingZeros = (num: number) => (num < 10 ? `0${num}` : num);

  const format = (date: Date) =>
    [date.getHours(), date.getMinutes(), date.getSeconds()]
      .map(padLeadingZeros)
      .join(":");

  return <div>{format(time)}</div>;
};
