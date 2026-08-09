export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Do you run ad campaigns?',
    answer:
      'We focus on creative production. We create ready-to-use advertising content, but we do not manage media buying, campaign setup or promotion.',
  },
  {
    question: 'Do I need a ready brief or script?',
    answer:
      'No. You provide the product information, audience, offer and goals. We guide you through a short discovery process and turn this information into a clear creative and production brief.',
  },
  {
    question: 'Do you create sound?',
    answer:
      'Yes. Editing and sound design can be included in the production. If a project requires licensed music, the licensing terms are agreed before production begins.',
  },
  {
    question: 'Can you create different formats?',
    answer:
      'Yes. We can adapt the final creative for different platforms, aspect ratios, durations, languages, subtitles, hooks and calls to action.',
  },
  {
    question: 'How do revisions work?',
    answer:
      'The number of revision rounds and approval stages is defined before the project begins. Changes outside the approved concept or storyboard may require an additional estimate.',
  },
]
