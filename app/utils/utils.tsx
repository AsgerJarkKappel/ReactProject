export function getImageUrl(item: {
  id?: number;
  img: any;
  title?: string;
  description?: string;
}) {
  return "/" + item.img + ".svg";
}
