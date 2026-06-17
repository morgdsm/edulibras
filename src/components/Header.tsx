import { OwlMascot } from './OwlMascot'

interface HeaderProps {
  studentName: string
}

export function Header({ studentName }: HeaderProps) {
  return (
    <header className="flex min-w-0 items-center justify-between gap-2 px-4 pt-5">
      <div className="flex min-w-0 items-center gap-2">
        <OwlMascot size={40} mood="happy" className="shrink-0" />
        <span className="truncate text-[clamp(18px,5vw,24px)] font-extrabold tracking-tight text-primary">
          EduLibras
        </span>
      </div>
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-secondary-dark text-lg font-extrabold text-white shadow-[0_4px_0_0_rgba(245,158,11,0.35)]"
        role="img"
        aria-label={`Avatar de ${studentName}`}
      >
        {studentName.charAt(0)}
      </div>
    </header>
  )
}
