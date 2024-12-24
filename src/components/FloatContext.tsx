import { useEffect, useRef } from "react";

interface FloatContextProps {
  className?: string
  width?: number
  side?: "left" | "right"
  x: number
  y: number
  children: string | JSX.Element | JSX.Element[]
  open: boolean
  close: Function
}

export const FloatContext: React.FC<FloatContextProps> = ({ className = "", width = 160, side="right", x, y, children, close }) => {
  const contextDiv = useRef<HTMLInputElement | null>(null);
  const display = useRef<boolean>(false);

  const handleClickOutside = (e: MouseEvent) => {
    if (display.current && !contextDiv.current?.contains(e.target as Node)) {
      display.current = false
      close()
    } else {
      display.current = true
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div
      ref={contextDiv}
      className={"so-mm-context-menu " + className}
      style={{
        width: width+"px",
        top: y+"px",
        left: (side === "right" ? x-width : x)+"px",
        display: (display ? "block" : "none")
      }}
    >
      {children}
    </div>
  );
};