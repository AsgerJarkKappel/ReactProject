import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

export function getImageUrl(item: {
  id?: number;
  img: any;
  title?: string;
  description?: string;
}) {
  return "/" + item.img + ".svg";
}

export function getLink(item: any) {
  return "/" + item.path;
}

/**Formatting data's date unix number to date
 *@param unixTimestamp is dt from api call
 * TODO: Use UTC stamp for calculating the date and time, so it isn't sunday in london, when it is saturday
 *
 */
export const formatUnixTimestampToDate = (
  unixTimestamp: number,
  timezoneOffset: number
): string => {
  const date = new Date((unixTimestamp + timezoneOffset) * 1000);
  return date.toDateString();
};

export const formatdt_text_dateTimestampToDate = (dt_txt: string): string => {
  const date = new Date(dt_txt);
  return date.toDateString();
};

export const importantDateCheckMethod = (
  dt: number,
  timezoneOffset: number
): string => {
  const localUnixTimestamp = dt + timezoneOffset;
  const localDate = new Date(localUnixTimestamp * 1000);
  const year: number = localDate.getUTCFullYear();
  const month = (localDate.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = localDate.getUTCDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const unixTimestampToHourStamp = (
  unixTimestamp: number,
  timezoneOffset: number
): string => {
  const date = new Date((unixTimestamp + timezoneOffset) * 1000);
  const hour = date.getUTCHours().toString().padStart(2, "0"); // Get UTC hours
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const timeLabel = `${hour}:${minutes}`;
  return timeLabel;
};

export const setWeatherIconSource = (description: string) => {
  const imgElement = document.getElementById("weatherIcon");
  console.log("This far test");

  if (imgElement) {
    const fullPath = `https://openweathermap.org/img/wn/${description}@2x.png`;
    imgElement.setAttribute("src", fullPath);
    imgElement.style.visibility = "visible";
  } else {
    console.log("Image not found");
  }
};

export const setForecastIconSource = (
  date: string,
  dt_txt: string,
  description: string
) => {
  const imgElement = document.getElementById(`forecastIcon_${date}_${dt_txt}`);
  console.log("This far test");

  if (imgElement) {
    const fullPath = `https://openweathermap.org/img/wn/${description}@2x.png`;
    imgElement.setAttribute("src", fullPath);
    imgElement.style.visibility = "visible";
  } else {
    console.log("Image not found");
  }
};

export const isToday = (dateString: string): boolean => {
  const today = new Date();
  const formattedDate = formatdt_text_dateTimestampToDate(dateString); // Format the given date string to a standard format
  const dateToCheck = new Date(formattedDate);

  return (
    today.getDate() === dateToCheck.getDate() &&
    today.getMonth() === dateToCheck.getMonth() &&
    today.getFullYear() === dateToCheck.getFullYear()
  );
};
