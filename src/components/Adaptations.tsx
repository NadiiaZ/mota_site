import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import MediaPlaceholder from './MediaPlaceholder'

interface Format {
  label: string
  ratio: string
  accent: 'orange' | 'pink' | 'blue' | 'lime'
}

const formats: Format[] = [
  { label: '9:16', ratio: 'aspect-[9/16]', accent: 'orange' },
  { label: '1:1', ratio: 'aspect-square', accent: 'blue' },
  { label: '16:9', ratio: 'aspect-video', accent: 'pink' },
  { label: 'Alt hook', ratio: 'aspect-square', accent: 'lime' },
  { label: 'Subtitled', ratio: 'aspect-[9/16]', accent: 'blue' },
  { label: 'Localized', ratio: 'aspect-video', accent: 'orange' },
  { label: 'Alt CTA', ratio: 'aspect-square', accent: 'pink' },
  { label: 'Short cut', ratio: 'aspect-[9/16]', accent: 'lime' },
]

export default function Adaptations() {
  return (
    <section aria-labelledby="adaptations-heading" className="section-pad">
      <div className="container-mota">
        <SectionHeading
          id="adaptations-heading"
          eyebrow="Creative Adaptations"
          heading="One creative. More ways to use it."
          description="We can adapt your creative for different platforms, formats, languages, durations, subtitles, hooks and calls to action."
        />

        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr,1.4fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto w-full max-w-xs"
          >
            <MediaPlaceholder
              label="MASTER CREATIVE"
              accent="orange"
              showPlay
              ratioClassName="aspect-[4/5] w-full"
            />
          </motion.div>

          <div className="flex items-center gap-4">
            <ArrowRight
              className="hidden h-8 w-8 shrink-0 text-ink-muted lg:block"
              aria-hidden="true"
            />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {formats.map((format, i) => (
                <motion.div
                  key={format.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <MediaPlaceholder
                    label={format.label}
                    accent={format.accent}
                    ratioClassName={`${format.ratio} w-full`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
