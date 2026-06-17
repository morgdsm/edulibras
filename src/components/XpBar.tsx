import { StarIcon } from './icons/StarIcon'

const MILESTONE_STARS = 5

interface XpBarProps {
  xp: number
  xpGoal: number
}

export function XpBar({ xp, xpGoal }: XpBarProps) {
  const pct = Math.min(100, Math.round((xp / xpGoal) * 100))
  const filledStars = Math.round((pct / 100) * MILESTONE_STARS)

  return (
    <div className="px-4" role="group" aria-label="Progresso de experiência">
      <div className="flex items-center justify-between gap-2 text-[clamp(13px,3.5vw,16px)] font-extrabold text-primary">
        <span className="flex items-center gap-1">
          <StarIcon className="h-4 w-4 text-secondary" />
          {xp} XP
        </span>
        <span className="text-slate-400">{xpGoal} XP</span>
      </div>
      <div className="mt-1.5 h-4 w-full overflow-hidden rounded-full bg-card shadow-inner">
        <div
          className="h-full rounded-full bg-gradient-to-r from-secondary to-primary transition-[width] duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-1 flex justify-between px-0.5" aria-hidden="true">
        {Array.from({ length: MILESTONE_STARS }).map((_, i) => (
          <StarIcon
            key={i}
            className={`h-3.5 w-3.5 ${i < filledStars ? 'text-secondary' : 'text-slate-300'}`}
          />
        ))}
      </div>
    </div>
  )
}
