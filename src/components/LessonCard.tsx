import type { Lesson } from '../types/lesson'

interface LessonCardProps {
  lesson: Lesson
  onPractice: (lesson: Lesson) => void
}

export function LessonCard({ lesson, onPractice }: LessonCardProps) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-3xl bg-white p-6 text-center shadow-lg ring-1 ring-violet-100 transition-transform hover:-translate-y-1">
      <div
        className="flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 text-5xl"
        role="img"
        aria-label={`Sinal de ${lesson.word}: ${lesson.signDescription}`}
      >
        {lesson.emoji}
      </div>
      <p className="text-2xl font-semibold text-slate-800">{lesson.word}</p>
      <button
        type="button"
        onClick={() => onPractice(lesson)}
        className="rounded-full bg-violet-600 px-5 py-2 text-base font-medium text-white transition-colors hover:bg-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
      >
        Praticar
      </button>
    </div>
  )
}
