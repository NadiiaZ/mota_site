export type ProjectCategory =
  | 'Advertising'
  | 'Product & Service'
  | 'SaaS & UI'
  | '2D & Character'
  | 'AI & UGC'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  description: string
  // Layout sizing hint for the editorial grid.
  size: 'featured' | 'large' | 'medium' | 'small'
  aspect: 'video' | 'square' | 'portrait'
  accent: 'orange' | 'pink' | 'blue' | 'lime'
  // REPLACE: swap for a real poster frame (e.g. /media/work/<id>-poster.jpg)
  posterLabel: "/media/work/ANB-12_v3_en_1080x1350.mp4"
  // REPLACE: point to a real hosted preview clip (e.g. /media/work/<id>-preview.mp4)
  videoSrc?: string
}

export const projects: Project[] = [
  {
    id: 'delivery-social-ad',
    title: 'Delivery Service — Social Ad',
    category: 'Advertising',
    description:
      'A vertical ad campaign built around a single hook: your order, faster than you can explain why you needed it.',
    size: 'featured',
    aspect: 'portrait',
    accent: 'orange',
    posterLabel: 'DELIVERY — SOCIAL AD',
  },
  {
    id: 'mobility-product-animation',
    title: 'Mobility App — Product Animation',
    category: 'Product & Service',
    description: 'Explaining a ride-matching flow through clean, confident motion instead of screen recordings.',
    size: 'large',
    aspect: 'video',
    accent: 'blue',
    posterLabel: 'MOBILITY — PRODUCT',
  },
  {
    id: 'saas-feature-demo',
    title: 'SaaS Platform — Feature Demo',
    category: 'SaaS & UI',
    description: 'A feature launch video that turns a settings panel into something worth watching twice.',
    size: 'medium',
    aspect: 'square',
    accent: 'lime',
    posterLabel: 'SAAS — FEATURE DEMO',
  },
  {
    id: 'consumer-campaign-creative',
    title: 'Consumer Product — Campaign Creative',
    category: 'Advertising',
    description: 'Product-first campaign visuals designed to hold attention in the first half second of a feed.',
    size: 'medium',
    aspect: 'square',
    accent: 'pink',
    posterLabel: 'PRODUCT — CAMPAIGN',
  },
  {
    id: 'ugc-style-social-ad',
    title: 'UGC-Style — Social Media Ad',
    category: 'AI & UGC',
    description: 'A creator-style edit built for scroll-stopping honesty, scripted and paced like a real review.',
    size: 'large',
    aspect: 'portrait',
    accent: 'orange',
    posterLabel: 'UGC-STYLE — SOCIAL AD',
  },
  {
    id: 'character-brand-story',
    title: 'Character Animation — Brand Story',
    category: '2D & Character',
    description: 'A short 2D brand story built around one character, one problem, and one clear resolution.',
    size: 'medium',
    aspect: 'video',
    accent: 'pink',
    posterLabel: 'CHARACTER — BRAND STORY',
  },
]

export const projectFilters: Array<ProjectCategory | 'All'> = [
  'All',
  'Advertising',
  'Product & Service',
  'SaaS & UI',
  '2D & Character',
  'AI & UGC',
]
