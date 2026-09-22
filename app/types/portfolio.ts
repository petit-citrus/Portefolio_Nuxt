export interface Trace {
  texte: string
  image?: string
  alt?: string
  audio?: string
}

export interface CompetenceItem {
  id: string
  titre: string
  description: string
  icon: string
  traces: Trace[]
}
