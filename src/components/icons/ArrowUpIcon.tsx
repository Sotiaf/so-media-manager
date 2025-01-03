import { SVGAttributes } from "react"

export const ArrowUpIcon = (element: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg {...element} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6v13m0-13 4 4m-4-4-4 4" />
    </svg>
  )
}