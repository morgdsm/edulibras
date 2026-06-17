export type OwlMood = 'happy' | 'thinking' | 'celebrate'

interface OwlMascotProps {
  size?: number
  mood?: OwlMood
  className?: string
}

const EYEBROWS: Record<OwlMood, { left: string; right: string }> = {
  happy: {
    left: 'M34 48c4-4 12-4 16 0',
    right: 'M70 48c4-4 12-4 16 0',
  },
  thinking: {
    left: 'M33 50c5-6 14-7 18-2',
    right: 'M71 47c4-2 11-1 15 2',
  },
  celebrate: {
    left: 'M33 50c4-7 13-9 18-4',
    right: 'M69 46c5-5 14-3 18 4',
  },
}

const PUPIL_OFFSET: Record<OwlMood, { dx: number; dy: number }> = {
  happy: { dx: 0, dy: 0 },
  thinking: { dx: 3, dy: -2 },
  celebrate: { dx: 0, dy: -1 },
}

const WING_ROTATE: Record<OwlMood, number> = {
  happy: 0,
  thinking: 0,
  celebrate: -22,
}

export function OwlMascot({ size = 48, mood = 'happy', className }: OwlMascotProps) {
  const eyebrows = EYEBROWS[mood]
  const pupil = PUPIL_OFFSET[mood]
  const wingRotate = WING_ROTATE[mood]
  const beakOpen = mood === 'celebrate'

  return (
    <svg
      viewBox="0 0 120 140"
      width={size}
      height={size * (140 / 120)}
      className={className}
      role="img"
      aria-label={`Coruja mascote do EduLibras, ${mood === 'happy' ? 'feliz' : mood === 'thinking' ? 'pensativa' : 'celebrando'}`}
    >
      {/* asa esquerda */}
      <ellipse
        cx="20"
        cy="80"
        rx="13"
        ry="20"
        fill="#6d28d9"
        transform={`rotate(${-18 + wingRotate} 20 80)`}
      />
      {/* asa direita */}
      <ellipse
        cx="100"
        cy="80"
        rx="13"
        ry="20"
        fill="#6d28d9"
        transform={`rotate(${18 - wingRotate} 100 80)`}
      />

      {/* pes */}
      <ellipse cx="48" cy="130" rx="8" ry="5" fill="#f59e0b" />
      <ellipse cx="72" cy="130" rx="8" ry="5" fill="#f59e0b" />

      {/* corpo */}
      <ellipse cx="60" cy="75" rx="42" ry="50" fill="#7c3aed" />

      {/* barriga */}
      <ellipse cx="60" cy="86" rx="26" ry="35" fill="#fff7ed" />
      <path
        d="M44 64c4 4 4 10 0 14M52 60c4 5 4 12 0 17M68 60c-4 5-4 12 0 17M76 64c-4 4-4 10 0 14M48 84c4 3 4 8 0 11M72 84c-4 3-4 8 0 11M58 94c2 3 2 6 0 9"
        fill="none"
        stroke="#e7c9a3"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* olho esquerdo */}
      <circle cx="44" cy="62" r="15" fill="white" />
      <circle cx="44" cy="62" r="10.5" fill="#f59e0b" />
      <circle cx={44 + pupil.dx} cy={62 + pupil.dy} r="5" fill="#1a1a1a" />
      <circle cx={42 + pupil.dx} cy={59 + pupil.dy} r="1.6" fill="white" />

      {/* olho direito */}
      <circle cx="76" cy="62" r="15" fill="white" />
      <circle cx="76" cy="62" r="10.5" fill="#f59e0b" />
      <circle cx={76 + pupil.dx} cy={62 + pupil.dy} r="5" fill="#1a1a1a" />
      <circle cx={74 + pupil.dx} cy={59 + pupil.dy} r="1.6" fill="white" />

      {/* sobrancelhas */}
      <path
        d={eyebrows.left}
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d={eyebrows.right}
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* bico */}
      {beakOpen ? (
        <ellipse cx="60" cy="76" rx="5" ry="6" fill="#f59e0b" />
      ) : (
        <path d="M60 70 54 80h12Z" fill="#f59e0b" />
      )}

      {/* chapeu de formatura */}
      <g>
        <path d="M60 8 28 22l32 13 32-13Z" fill="#1a1a1a" />
        <rect x="48" y="24" width="24" height="7" rx="2" fill="#1a1a1a" />
        <line x1="86" y1="22" x2="86" y2="40" stroke="#1a1a1a" strokeWidth="2" />
        <circle cx="86" cy="42" r="3" fill="#f59e0b" />
      </g>
    </svg>
  )
}
