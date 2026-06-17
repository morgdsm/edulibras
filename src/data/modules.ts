import type { ModuleIconType } from '../components/ModuleIcon'

export type ModuleColor = 'primary' | 'secondary' | 'success'

export interface ModuleData {
  id: string
  label: string
  type: ModuleIconType
  unlocked: boolean
  completed: boolean
  /** Próximo módulo a ser praticado — recebe destaque com pulse/glow. */
  current: boolean
  color: ModuleColor
  /** Alinhamento horizontal na trilha sinuosa. */
  align: 'start' | 'center' | 'end'
}

export const modules: ModuleData[] = [
  {
    id: 'familia',
    label: 'Família',
    type: 'familia',
    unlocked: true,
    completed: true,
    current: false,
    color: 'primary',
    align: 'center',
  },
  {
    id: 'corpo',
    label: 'Corpo',
    type: 'corpo',
    unlocked: true,
    completed: true,
    current: false,
    color: 'secondary',
    align: 'end',
  },
  {
    id: 'cores',
    label: 'Cores',
    type: 'cores',
    unlocked: true,
    completed: false,
    current: true,
    color: 'success',
    align: 'center',
  },
  {
    id: 'animais',
    label: 'Animais',
    type: 'animais',
    unlocked: false,
    completed: false,
    current: false,
    color: 'primary',
    align: 'start',
  },
  {
    id: 'comidas',
    label: 'Comidas',
    type: 'comidas',
    unlocked: false,
    completed: false,
    current: false,
    color: 'secondary',
    align: 'center',
  },
  {
    id: 'numeros',
    label: 'Números',
    type: 'numeros',
    unlocked: false,
    completed: false,
    current: false,
    color: 'success',
    align: 'end',
  },
  {
    id: 'alfabeto',
    label: 'Alfabeto',
    type: 'alfabeto',
    unlocked: false,
    completed: false,
    current: false,
    color: 'primary',
    align: 'center',
  },
  {
    id: 'acoes',
    label: 'Ações',
    type: 'acoes',
    unlocked: false,
    completed: false,
    current: false,
    color: 'secondary',
    align: 'start',
  },
]
