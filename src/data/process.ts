export interface ProcessStep {
  index: string
  title: string
  description: string
  artifact: 'form' | 'brief' | 'script' | 'storyboard' | 'production' | 'delivery'
}

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Project Request',
    description:
      'Tell us about your product, audience, offer, goals, deadline and preferred platforms. You do not need to prepare a detailed brief.',
    artifact: 'form',
  },
  {
    index: '02',
    title: 'Discovery & Brief',
    description:
      'We review your materials, ask additional questions and turn your information into a clear production brief.',
    artifact: 'brief',
  },
  {
    index: '03',
    title: 'Concept & Script',
    description:
      'We develop the main idea, opening hook, script and call to action. You approve the direction before production begins.',
    artifact: 'script',
  },
  {
    index: '04',
    title: 'Storyboard & Style',
    description:
      'We create a storyboard and key visual frames to show the structure and visual direction.',
    artifact: 'storyboard',
  },
  {
    index: '05',
    title: 'Production',
    description:
      'We produce the design, animation, editing and sound. You review the creative at the agreed stages.',
    artifact: 'production',
  },
  {
    index: '06',
    title: 'Review & Delivery',
    description:
      'After the final adjustments, we prepare ready-to-use files for your selected platforms and formats.',
    artifact: 'delivery',
  },
]

export const processClosing =
  'You approve every key stage, so the process stays clear from the first idea to the final frame.'
