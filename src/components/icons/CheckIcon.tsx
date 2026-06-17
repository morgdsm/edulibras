interface CheckIconProps {
  className?: string
  animate?: boolean
}

export function CheckIcon({ className, animate = true }: CheckIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${animate ? 'animate-check-pop' : ''} ${className ?? ''}`}
      aria-hidden="true"
    >
      <path
        d="M5 12.5 9.5 17 19 7"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
