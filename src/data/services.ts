export interface Service {
  id: string
  index: string
  title: string
  summary: string
  detail: string
  includes: string[]
  accent: 'orange' | 'pink' | 'blue'
  visual: 'ad' | 'product' | 'character'
  span: 'wide' | 'tall'
}

export const services: Service[] = [
  {
    id: 'ad-creatives',
    index: '01',
    title: 'Social Media Ad Creatives',
    summary: 'Short, engaging advertising videos created for social media and digital platforms.',
    detail:
      'From concept and script to design, animation, editing and sound, we produce complete ready-to-use creatives.',
    includes: [
      'Animated ads',
      'UGC-style creatives',
      'AI-assisted visuals',
      'Multiple hooks and CTAs',
      'Editing and sound design',
      'Platform-ready formats',
    ],
    accent: 'orange',
    visual: 'ad',
    span: 'wide',
  },
  {
    id: 'product-service-animation',
    index: '02',
    title: 'Product & Service Animation',
    summary: 'Clear and engaging animation for apps, online platforms, services and physical products.',
    detail:
      'We show how a product or service works, explain its main value and make complex features easier to understand.',
    includes: [
      'Product demos',
      'Service explainers',
      'UI animation',
      'SaaS videos',
      'App presentations',
      'Feature and launch videos',
    ],
    accent: 'blue',
    visual: 'product',
    span: 'tall',
  },
  {
    id: '2d-character-animation',
    index: '03',
    title: '2D & Character Animation',
    summary: 'Expressive 2D animation for advertising, explainers and brand stories.',
    detail:
      'We use characters, graphic scenes and purposeful motion to make the message clear and memorable.',
    includes: [
      'Character animation',
      '2D motion design',
      'Animated explainers',
      'Advertising stories',
      'Illustrated scenes',
    ],
    accent: 'pink',
    visual: 'character',
    span: 'tall',
  },
]
