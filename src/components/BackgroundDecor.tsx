import type { CSSProperties } from 'react'
import { StarIcon } from './icons/StarIcon'

interface Star {
  top: string
  left: string
  size: number
  delay: number
}

interface Cloud {
  top: string
  left: string
  width: number
  delay: number
}

const STARS: Star[] = [
  { top: '4%', left: '12%', size: 14, delay: 0 },
  { top: '9%', left: '78%', size: 10, delay: 0.4 },
  { top: '22%', left: '90%', size: 16, delay: 0.8 },
  { top: '30%', left: '6%', size: 12, delay: 1.2 },
  { top: '52%', left: '85%', size: 10, delay: 0.2 },
  { top: '68%', left: '10%', size: 14, delay: 1.6 },
  { top: '82%', left: '88%', size: 12, delay: 0.6 },
  { top: '92%', left: '20%', size: 16, delay: 1 },
]

const CLOUDS: Cloud[] = [
  { top: '7%', left: '55%', width: 70, delay: 0 },
  { top: '26%', left: '8%', width: 56, delay: 1 },
  { top: '60%', left: '60%', width: 64, delay: 2 },
  { top: '88%', left: '4%', width: 50, delay: 0.5 },
]

function CloudShape({ width }: { width: number }) {
  return (
    <svg viewBox="0 0 64 36" width={width} height={(width * 36) / 64} aria-hidden="true">
      <path
        d="M14 28c-7 0-12-5-12-11s5-10 11-10c2-6 8-10 15-10 8 0 14 5 16 12 6 0 11 5 11 10s-5 9-11 9Z"
        fill="white"
      />
    </svg>
  )
}

export function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {STARS.map((star, i) => (
        <StarIcon
          key={i}
          className="animate-twinkle absolute text-secondary"
          style={
            {
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: `${star.delay}s`,
            } as CSSProperties
          }
        />
      ))}
      {CLOUDS.map((cloud, i) => (
        <div
          key={i}
          className="animate-float-cloud absolute opacity-80"
          style={{ top: cloud.top, left: cloud.left, animationDelay: `${cloud.delay}s` }}
        >
          <CloudShape width={cloud.width} />
        </div>
      ))}
      <div className="absolute right-4 top-1/3 h-6 w-6 rounded-full bg-primary/20" />
      <div className="absolute left-6 top-2/3 h-4 w-4 rounded-full bg-success/20" />
      <div className="absolute right-10 bottom-10 h-5 w-5 rounded-full bg-secondary/20" />
    </div>
  )
}
