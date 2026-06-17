import { Header } from '../components/Header'
import { StarIcon } from '../components/icons/StarIcon'
import { ModulePath } from '../components/ModulePath'
import { XpBar } from '../components/XpBar'

interface HomeProps {
  studentName: string
}

export function Home({ studentName }: HomeProps) {
  return (
    <div className="animate-page-in pb-6">
      <Header studentName={studentName} />

      <p className="flex items-center gap-1.5 px-4 pt-3 text-[clamp(20px,6vw,28px)] font-extrabold leading-snug text-slate-800">
        Oi, {studentName}! Vamos aprender hoje?
        <StarIcon className="h-6 w-6 shrink-0 text-secondary" />
      </p>

      <div className="mt-4">
        <XpBar xp={120} xpGoal={200} />
      </div>

      <div className="mt-8 px-4">
        <ModulePath />
      </div>
    </div>
  )
}
