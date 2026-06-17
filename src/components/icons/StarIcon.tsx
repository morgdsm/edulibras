import type { CSSProperties } from 'react'

interface StarIconProps {
  className?: string
  filled?: boolean
  style?: CSSProperties
}

export function StarIcon({ className, filled = true, style }: StarIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={style}
      aria-hidden="true"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 2}
    >
      <path
        d="M12 2.5c.3 0 .58.18.7.46l2.1 4.8 5.2.55c.78.08 1.1 1.05.5 1.58l-3.9 3.5 1.15 5.1c.17.77-.62 1.38-1.31.98L12 16.9l-4.44 2.57c-.69.4-1.48-.21-1.31-.98l1.15-5.1-3.9-3.5c-.6-.53-.28-1.5.5-1.58l5.2-.55 2.1-4.8c.12-.28.4-.46.7-.46Z"
        strokeLinejoin="round"
      />
    </svg>
  )
}
