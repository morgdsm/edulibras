import type { CSSProperties } from 'react'
import type { ModuleColor, ModuleData } from '../data/modules'
import { CheckIcon } from './icons/CheckIcon'
import { LockIcon } from './icons/LockIcon'
import { ModuleIcon } from './ModuleIcon'

const BG_SOLID: Record<ModuleColor, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  success: 'bg-success',
}

const BG_GRADIENT: Record<ModuleColor, string> = {
  primary: 'bg-gradient-to-br from-primary to-primary-dark',
  secondary: 'bg-gradient-to-br from-secondary to-secondary-dark',
  success: 'bg-gradient-to-br from-success to-success-dark',
}

const LIFT_SHADOW: Record<ModuleColor, string> = {
  primary: 'shadow-[0_6px_0_0_rgba(124,58,237,0.3)] hover:shadow-[0_8px_14px_-2px_rgba(124,58,237,0.55)]',
  secondary: 'shadow-[0_6px_0_0_rgba(245,158,11,0.3)] hover:shadow-[0_8px_14px_-2px_rgba(245,158,11,0.55)]',
  success: 'shadow-[0_6px_0_0_rgba(34,197,94,0.3)] hover:shadow-[0_8px_14px_-2px_rgba(34,197,94,0.55)]',
}

const GLOW_COLOR: Record<ModuleColor, string> = {
  primary: 'rgba(124,58,237,0.45)',
  secondary: 'rgba(245,158,11,0.45)',
  success: 'rgba(34,197,94,0.45)',
}

interface ModuleNodeProps {
  module: ModuleData
}

export function ModuleNode({ module }: ModuleNodeProps) {
  const { label, type, unlocked, completed, current, color } = module

  if (!unlocked) {
    return (
      <div className="flex flex-col items-center gap-1.5 scale-[0.85]">
        <div
          className="relative flex h-[clamp(60px,17vw,80px)] w-[clamp(60px,17vw,80px)] items-center justify-center rounded-full bg-slate-200 grayscale-[60%]"
          aria-hidden="true"
        >
          <ModuleIcon type={type} className="h-[55%] w-[55%] opacity-60" />
          <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-slate-400 text-white shadow">
            <LockIcon className="h-4 w-4" />
          </span>
        </div>
        <span className="max-w-[clamp(60px,17vw,80px)] truncate text-[clamp(12px,3vw,16px)] font-bold text-slate-400">
          {label}
        </span>
      </div>
    )
  }

  const glowStyle = current ? ({ '--glow-color': GLOW_COLOR[color] } as CSSProperties) : undefined

  return (
    <button
      type="button"
      className="group flex flex-col items-center gap-1.5"
      aria-label={`Módulo ${label}${completed ? ', concluído' : current ? ', em andamento' : ', disponível'}`}
    >
      <div
        style={glowStyle}
        className={`relative flex h-[clamp(60px,17vw,80px)] w-[clamp(60px,17vw,80px)] items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-[1.08] group-active:scale-95 ${
          completed ? BG_GRADIENT[color] : BG_SOLID[color]
        } ${LIFT_SHADOW[color]} ${current ? 'animate-pulse-current' : ''}`}
      >
        <ModuleIcon type={type} className="h-[58%] w-[58%]" />
        {completed && (
          <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-success text-white ring-2 ring-card">
            <CheckIcon className="h-4 w-4" />
          </span>
        )}
      </div>
      <span className="max-w-[clamp(60px,17vw,80px)] truncate text-[clamp(12px,3vw,16px)] font-extrabold text-slate-700">
        {label}
      </span>
    </button>
  )
}
