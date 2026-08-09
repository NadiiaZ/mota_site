export interface TeamMember {
  // REPLACE: insert the real name.
  name: string
  role: string
  // REPLACE: insert a short, real biography (1–2 sentences). Do not invent one.
  bio: string
  // REPLACE: swap for a real cropped portrait, e.g. /media/team/<id>.jpg
  portraitLabel: string
  accent: 'orange' | 'blue'
}

export const team: TeamMember[] = [
  {
    name: '[NAME]',
    role: 'Motion Designer & Co-founder',
    bio: '[Short biography to be added]',
    portraitLabel: 'PORTRAIT — CO-FOUNDER 01',
    accent: 'orange',
  },
  {
    name: '[NAME]',
    role: 'Animator & Co-founder',
    bio: '[Short biography to be added]',
    portraitLabel: 'PORTRAIT — CO-FOUNDER 02',
    accent: 'blue',
  },
]
