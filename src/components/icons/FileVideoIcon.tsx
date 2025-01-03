import { SVGAttributes } from "react"

export const FileVideoIcon = (element: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg {...element} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linejoin="round" stroke-width="1" d="M10 3v4c0 .6-.4 1-1 1H5m14-4v16c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V8c0-.4.1-.6.3-.8l4-4 .6-.2H18c.6 0 1 .4 1 1ZM9 12h2c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H9a1 1 0 0 1-1-1v-2c0-.6.4-1 1-1Zm5.7 2.4v-.7l1.3-1.3v3l-1.3-1Z" />
    </svg>
  )
}