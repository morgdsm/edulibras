interface LockIconProps {
  className?: string
}

export function LockIcon({ className }: LockIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect
        x="5"
        y="11"
        width="14"
        height="9.5"
        rx="2.5"
        fill="currentColor"
      />
      <path
        d="M8 11V8a4 4 0 0 1 8 0v3"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
      />
      <circle cx="12" cy="15.5" r="1.4" fill="white" />
    </svg>
  )
}
