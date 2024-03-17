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
export const formatUnixTimestampToDate = (unixTimestamp: number): string => {
  const date = new Date(unixTimestamp * 1000);
  return date.toDateString();
};

export const setWeatherIconSource = (description: string) => {
  const imgElement = document.getElementById("weatherIcon");

  if (imgElement) {
    const fullPath = `https://openweathermap.org/img/wn/${description}@2x.png`;
    imgElement.setAttribute("src", fullPath);
  } else {
    console.log("Image not found");
  }
};
