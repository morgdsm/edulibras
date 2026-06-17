interface SmileIconProps {
  className?: string
}

export function SmileIcon({ className }: SmileIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
      />
      <circle cx="8.7" cy="10.2" r="1.2" fill="currentColor" />
      <circle cx="15.3" cy="10.2" r="1.2" fill="currentColor" />
      <path
        d="M8 14.2c.9 1.4 2.4 2.2 4 2.2s3.1-.8 4-2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
      />
    </svg>
  )
}
