interface ProfileProps {
  studentName: string
}

export function Profile({ studentName }: ProfileProps) {
  return (
    <div className="animate-page-in flex h-[75vh] flex-col items-center justify-center gap-3 px-8 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-secondary-dark text-4xl font-extrabold text-white shadow-[0_6px_0_0_rgba(245,158,11,0.3)]">
        {studentName.charAt(0)}
      </div>
      <p className="text-[clamp(18px,5vw,22px)] font-extrabold text-slate-800">{studentName}</p>
      <p className="text-[clamp(14px,4vw,16px)] text-slate-500">
        Em breve você poderá editar seu perfil aqui!
      </p>
    </div>
  )
}
