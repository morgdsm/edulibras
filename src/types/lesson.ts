export interface Lesson {
  id: string
  word: string
  category: 'cores' | 'animais' | 'familia' | 'numeros' | 'saudacoes'
  emoji: string
  /** Descrição textual do sinal, usada como alternativa acessível à ilustração. */
  signDescription: string
}
