import { SVGAttributes } from "react"

export const ArrowDownIcon = (element: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg {...element} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 19V5m0 14-4-4m4 4 4-4" />
    </svg>
  )
}