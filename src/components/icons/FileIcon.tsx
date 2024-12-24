import { SVGAttributes } from "react"

export const FileIcon = (element: SVGAttributes<SVGSVGElement>) => {
  const { color, ...rest } = element
  let colorBg = "#37d60c";
  let colorVibrant = "#6def49";
  let needContrast = false;

  switch (color) {
    case "mint":
      colorBg = "#4CAF50";
      colorVibrant = "#A8D5BA";
      break;
    case "yellow":
      colorBg = "#FFD700";
      colorVibrant = "#FFA500";
      break;
    case "purple":
      colorBg = "#800080";
      colorVibrant = "#957DAD";
      break;
    case "cyan":
      colorBg = "#00B7EB";
      colorVibrant = "#87CEEB";
      break;
    case "pink":
      colorBg = "#FFC0CB";
      colorVibrant = "#E6E6FA";
      break;
    case "terracotta":
      colorBg = "#E2725B";
      colorVibrant = "#CC5500";
      break;
    case "black":
      colorBg = "#505050";
      colorVibrant = "#000000";
      break;
  }

  return (
    <svg {...element} xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 256 256">
      <g>
        <path d="m214.5,256H40.5c-8.01,0-14.5-6.49-14.5-14.5V14.57C26,6.56,32.49.07,40.5.07h114.33l.19.26,73.97,74.01v167.15c0,8.01-6.49,14.5-14.5,14.5Z" fill={colorBg}></path>
        <path d="m163.86,74.19h64.8L154.47,0v64.79c.36,5.03,4.36,9.03,9.39,9.4" fill={colorVibrant}></path>
      </g>
    </svg>
  )
}