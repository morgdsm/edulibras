import { OwlMascot } from '../components/OwlMascot'

export function Achievements() {
  return (
    <div className="animate-page-in flex h-[75vh] flex-col items-center justify-center gap-3 px-8 text-center">
      <OwlMascot size={120} mood="celebrate" />
      <p className="text-[clamp(18px,5vw,22px)] font-extrabold text-slate-800">
        Suas conquistas estão a caminho!
      </p>
      <p className="text-[clamp(14px,4vw,16px)] text-slate-500">
        Continue praticando os módulos para desbloquear medalhas.
      </p>
    </div>
  )
}
