import { SVGAttributes } from "react"

export const FontIcon = (element: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg {...element} fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6.2V5h11v1.2M8 5v14m-3 0h6m2-6.8V11h8v1.2M17 11v8m-1.5 0h3" />
    </svg>
  )
}