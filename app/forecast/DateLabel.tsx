import React from "react";
import { isToday } from "@/app/utils/utils"; // Importing the isToday function from your utils

interface DateLabelProps {
  date: string; // Assuming the date is in string format
}

const DateLabel: React.FC<DateLabelProps> = ({ date }) => {
  // Create a new Date object from the provided date string
  const currentDate = new Date(date);

  // Get the day of the week (abbreviated) and date components
  const dayOfWeek = currentDate.toLocaleDateString("en-US", {
    weekday: "short",
  });
  const dayOfMonth = currentDate.getDate();

  // Combine the day of the week and date components
  const formattedDate = `${dayOfWeek} ${dayOfMonth}`;

  // Checking if the date is today
  const today = isToday(date);

  // Displaying "Today" if the date is today, or the formatted date otherwise
  return (
    <span className="text-white text-xl">
      {today ? "Today" : formattedDate + "th"}
    </span>
  );
};

export default DateLabel;
