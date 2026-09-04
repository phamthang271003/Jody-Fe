export interface InstrumentCategory {
  slug: string
  label: string
}

export const instrumentCategories: InstrumentCategory[] = [
  { slug: 'piano-digital', label: 'Piano Digital' },
  { slug: 'piano-co', label: 'Piano Cơ' },
  { slug: 'guitar-acoustic', label: 'Guitar Acoustic' },
  { slug: 'guitar-classic', label: 'Guitar Classic' },
  { slug: 'guitar-dien', label: 'Guitar Điện' },
  { slug: 'guitar-bass', label: 'Guitar Bass' },
  { slug: 'violin', label: 'Violin' },
  { slug: 'trong', label: 'Trống' },
]
