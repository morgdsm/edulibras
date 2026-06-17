interface HouseIconProps {
  className?: string
}

export function HouseIcon({ className }: HouseIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M4 11.5 12 4l8 7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 10.5V19a1 1 0 0 0 1 1H10v-4.5a2 2 0 0 1 4 0V20h3.5a1 1 0 0 0 1-1v-8.5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
