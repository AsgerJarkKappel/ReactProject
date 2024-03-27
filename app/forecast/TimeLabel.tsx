import React from "react";
import { isToday, unixTimestampToHourStamp } from "@/app/utils/utils"; // Importing the isToday function from your utils

interface TimeLabelProps {
  dt: number;
  offset: number; // Assuming the date is in string format
}

const TimeLabel: React.FC<TimeLabelProps> = ({ dt, offset }) => {
  // Create a new Date object from the provided date string
  const hourStamp = unixTimestampToHourStamp(dt, offset);

  // Displaying "Today" if the date is today, or the formatted date otherwise
  return <p className="text-black text-xl">{hourStamp}</p>;
};

export default TimeLabel;
