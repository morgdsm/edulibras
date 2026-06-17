import { modules } from '../data/modules'
import { ModuleNode } from './ModuleNode'

const CONNECTOR_HEIGHT = 56

const ALIGN_CLASS: Record<string, string> = {
  start: 'justify-start pl-2',
  center: 'justify-center',
  end: 'justify-end pr-2',
}

const ALIGN_X: Record<string, number> = {
  start: 18,
  center: 50,
  end: 82,
}

export function ModulePath() {
  return (
    <div className="mx-auto w-full max-w-[360px]" aria-label="Trilha de módulos">
      {modules.map((module, index) => {
        const next = modules[index + 1]
        const x0 = ALIGN_X[module.align]
        const x1 = next ? ALIGN_X[next.align] : x0
        const wiggle = index % 2 === 0 ? 10 : -10
        const isWalked = module.completed

        return (
          <div key={module.id}>
            <div className={`flex w-full ${ALIGN_CLASS[module.align]}`}>
              <ModuleNode module={module} />
            </div>
            {next && (
              <svg
                width="100%"
                height={CONNECTOR_HEIGHT}
                viewBox={`0 0 100 ${CONNECTOR_HEIGHT}`}
                preserveAspectRatio="none"
                className="block"
                aria-hidden="true"
              >
                <path
                  d={`M ${x0} 0 C ${x0 + wiggle} ${CONNECTOR_HEIGHT * 0.35}, ${x1 - wiggle} ${CONNECTOR_HEIGHT * 0.65}, ${x1} ${CONNECTOR_HEIGHT}`}
                  fill="none"
                  stroke={isWalked ? 'var(--color-path-done)' : 'var(--color-path-future)'}
                  strokeWidth={5}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            )}
          </div>
        )
      })}
    </div>
  )
}
