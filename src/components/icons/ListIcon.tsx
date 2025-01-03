import { SVGAttributes } from "react"

export const ListIcon = (element: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg {...element} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1" d="M9 8h10M9 12h10M9 16h10M5 8h0m0 4h0m0 4h0" />
    </svg>
  )
}