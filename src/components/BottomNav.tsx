import { HouseIcon } from './icons/HouseIcon'
import { SmileIcon } from './icons/SmileIcon'
import { StarIcon } from './icons/StarIcon'

export type NavTab = 'home' | 'achievements' | 'profile'

const ITEMS: { id: NavTab; label: string; Icon: typeof HouseIcon }[] = [
  { id: 'home', label: 'Início', Icon: HouseIcon },
  { id: 'achievements', label: 'Conquistas', Icon: StarIcon },
  { id: 'profile', label: 'Perfil', Icon: SmileIcon },
]

interface BottomNavProps {
  active: NavTab
  onChange: (tab: NavTab) => void
}

export function BottomNav({ active, onChange }: BottomNavProps) {
  return (
    <nav
      className="fixed bottom-0 left-1/2 z-10 w-full max-w-[500px] -translate-x-1/2 rounded-t-[24px] bg-card px-4 shadow-[0_-4px_20px_rgba(124,58,237,0.18)]"
      style={{
        height: 'calc(64px + env(safe-area-inset-bottom, 0px))',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
    >
      <ul className="flex h-16 items-center justify-between">
        {ITEMS.map(({ id, label, Icon }) => {
          const isActive = id === active
          return (
            <li key={id} className="flex-1">
              <button
                type="button"
                onClick={() => onChange(id)}
                aria-label={label}
                aria-current={isActive ? 'page' : undefined}
                className={`mx-auto flex flex-col items-center gap-1 rounded-full px-4 py-1.5 transition-transform duration-150 ${
                  isActive ? 'scale-110 text-primary' : 'text-slate-400 hover:scale-105'
                }`}
              >
                <Icon className="h-6 w-6" />
                <span
                  className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-primary' : 'bg-transparent'}`}
                />
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
