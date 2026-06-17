import type { ReactNode } from 'react'

export type ModuleIconType =
  | 'familia'
  | 'corpo'
  | 'cores'
  | 'animais'
  | 'comidas'
  | 'numeros'
  | 'alfabeto'
  | 'acoes'

interface ModuleIconProps {
  type: ModuleIconType
  className?: string
}

const STROKE = '#1a1a1a'

function Familia() {
  return (
    <g stroke={STROKE} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
      <path d="M14 34c-2 6 0 16 0 16h12s2-10 0-16" fill="#7c3aed" />
      <circle cx="20" cy="24" r="7" fill="#fbbf7c" />
      <path d="M26 38c4-5 10-5 12 0v12H26Z" fill="#22c55e" />
      <circle cx="32" cy="30" r="6" fill="#fbbf7c" />
      <path d="M38 34c-2 6 0 16 0 16h12s2-10 0-16" fill="#7c3aed" />
      <circle cx="44" cy="24" r="7" fill="#fbbf7c" />
      <path d="M24 40c2-3 5-3 6 0M34 40c2-3 5-3 6 0" fill="none" />
    </g>
  )
}

function Corpo() {
  return (
    <g stroke={STROKE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="15" r="8" fill="#fbbf7c" />
      <path d="M32 23v18" fill="none" />
      <path d="M32 26 12 16M32 26l20-10" fill="none" />
      <path d="M32 41 14 58M32 41l18 17" fill="none" stroke="#22c55e" strokeWidth="6" />
      <path d="M32 23c-6 0-10 4-10 9s4 9 10 9 10-4 10-9-4-9-10-9Z" fill="#22c55e" />
    </g>
  )
}

function Cores() {
  return (
    <g stroke={STROKE} strokeWidth="2.5" strokeLinejoin="round">
      <path
        d="M32 10c13 0 22 9 22 20 0 9-6 14-13 14-3 0-4-2-4-4s2-3 2-6c0-3-3-5-7-5-9 0-15-7-15-14C17 14 23 10 32 10Z"
        fill="#fbbf7c"
      />
      <circle cx="35" cy="13" r="2.5" fill="white" stroke="none" />
      <circle cx="24" cy="20" r="4" fill="#ef4444" />
      <circle cx="38" cy="18" r="4" fill="#7c3aed" />
      <circle cx="46" cy="26" r="4" fill="#22c55e" />
      <circle cx="22" cy="30" r="4" fill="#f59e0b" />
    </g>
  )
}

function Animais() {
  return (
    <g stroke={STROKE} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
      <path d="M14 20c-4-6-2-12 4-12 4 0 5 5 6 9Z" fill="#f59e0b" />
      <path d="M50 20c4-6 2-12-4-12-4 0-5 5-6 9Z" fill="#f59e0b" />
      <circle cx="32" cy="30" r="18" fill="#fbbf7c" />
      <ellipse cx="32" cy="38" rx="8" ry="6" fill="#fff7ed" />
      <circle cx="32" cy="35" r="2.5" fill="#1a1a1a" stroke="none" />
      <circle cx="25" cy="27" r="2.4" fill="#1a1a1a" stroke="none" />
      <circle cx="39" cy="27" r="2.4" fill="#1a1a1a" stroke="none" />
      <path d="M28 41c2 2 6 2 8 0" fill="none" />
    </g>
  )
}

function Comidas() {
  return (
    <g strokeLinejoin="round" strokeLinecap="round">
      <path
        d="M32 22c-10-7-22-1-21 11 1 12 12 22 21 22s20-10 21-22c1-12-11-18-21-11Z"
        fill="#ef4444"
        stroke={STROKE}
        strokeWidth="2.5"
      />
      <path d="M32 22c-1-4 1-7 4-9" fill="none" stroke={STROKE} strokeWidth="2.5" />
      <path d="M34 13c5-3 10 0 9 5-5 2-9-1-9-5Z" fill="#22c55e" stroke={STROKE} strokeWidth="2" />
      <ellipse cx="24" cy="32" rx="4" ry="6" fill="white" opacity="0.5" stroke="none" />
    </g>
  )
}

function Numeros() {
  return (
    <g stroke={STROKE} strokeWidth="2.5" strokeLinejoin="round">
      <rect x="12" y="12" width="40" height="40" rx="9" fill="#fff7ed" />
      <circle cx="22" cy="22" r="4" fill="#7c3aed" stroke="none" />
      <circle cx="42" cy="22" r="4" fill="#f59e0b" stroke="none" />
      <circle cx="32" cy="32" r="4" fill="#22c55e" stroke="none" />
      <circle cx="22" cy="42" r="4" fill="#f59e0b" stroke="none" />
      <circle cx="42" cy="42" r="4" fill="#7c3aed" stroke="none" />
    </g>
  )
}

function Alfabeto() {
  return (
    <g stroke={STROKE} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
      <path
        d="M32 10 16 50h7l3-8h12l3 8h7L32 10Zm-3 25 3-10 3 10Z"
        fill="#7c3aed"
      />
      <path d="M14 50h6M44 50h6" fill="none" stroke="#7c3aed" strokeWidth="3" />
    </g>
  )
}

function Acoes() {
  return (
    <g stroke={STROKE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="36" cy="14" r="7" fill="#fbbf7c" />
      <path d="M36 21v14" fill="none" />
      <path d="M36 24 24 18M36 28l16-4" fill="none" />
      <path d="M36 35 24 50M36 35l14 8" fill="none" stroke="#f59e0b" strokeWidth="6" />
      <path d="M8 20c4 1 7 3 8 6M6 30c4 0 8 1 10 4M9 40c4-1 8 0 10 2" fill="none" stroke="#cbd5e1" strokeWidth="2.5" />
    </g>
  )
}

const ICONS: Record<ModuleIconType, () => ReactNode> = {
  familia: Familia,
  corpo: Corpo,
  cores: Cores,
  animais: Animais,
  comidas: Comidas,
  numeros: Numeros,
  alfabeto: Alfabeto,
  acoes: Acoes,
}

export function ModuleIcon({ type, className }: ModuleIconProps) {
  const Icon = ICONS[type]
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <Icon />
    </svg>
  )
}
