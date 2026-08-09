import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { processClosing, processSteps } from '../data/process'
import SectionHeading from './SectionHeading'
import MediaPlaceholder from './MediaPlaceholder'

const artifactMeta: Record<
  (typeof processSteps)[number]['artifact'],
  { label: string; accent: 'orange' | 'pink' | 'blue' | 'lime' }
> = {
  form: { label: 'PROJECT REQUEST FORM', accent: 'blue' },
  brief: { label: 'PRODUCTION BRIEF', accent: 'blue' },
  script: { label: 'CONCEPT & SCRIPT', accent: 'orange' },
  storyboard: { label: 'STORYBOARD — GRAYSCALE', accent: 'lime' },
  production: { label: 'POLISHED ANIMATION', accent: 'pink' },
  delivery: { label: 'FINAL DELIVERY FORMATS', accent: 'orange' },
}

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.75', 'end 0.35'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const idx = Math.min(
      processSteps.length - 1,
      Math.max(0, Math.floor(progress * processSteps.length)),
    )
    setActiveIndex(idx)
  })

  const activeArtifact = artifactMeta[processSteps[activeIndex].artifact]

  return (
    <section id="process" aria-labelledby="process-heading" className="section-pad bg-bg-secondary">
      <div className="container-mota">
        <SectionHeading
          id="process-heading"
          eyebrow="How We Work"
          heading="From product information to a finished creative."
        />

        <div ref={containerRef} className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr,1fr] lg:gap-16">
          {/* Step list with progress line */}
          <ol className="relative">
            <div
              aria-hidden="true"
              className="absolute left-[19px] top-2 bottom-2 w-px bg-line lg:left-[23px]"
            />
            <motion.div
              aria-hidden="true"
              style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
              className="absolute left-[19px] top-2 bottom-2 w-px bg-mota-gradient lg:left-[23px]"
            />

            {processSteps.map((step, i) => {
              const isActive = i <= activeIndex
              return (
                <li key={step.index} className="relative py-6 pl-14 lg:pl-16">
                  <span
                    className={`absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-full border font-display text-sm font-bold transition-colors duration-300 lg:h-12 lg:w-12 ${
                      isActive
                        ? 'border-transparent bg-mota-gradient text-ink'
                        : 'border-line text-ink-muted'
                    }`}
                  >
                    {step.index}
                  </span>
                  <h3
                    className={`font-display text-xl font-semibold transition-colors duration-300 sm:text-2xl ${
                      isActive ? 'text-ink' : 'text-ink-muted'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted sm:text-base">
                    {step.description}
                  </p>

                  {/* Inline visual on mobile — no sticky behavior */}
                  <div className="mt-4 lg:hidden">
                    <MediaPlaceholder
                      label={artifactMeta[step.artifact].label}
                      accent={artifactMeta[step.artifact].accent}
                      ratioClassName="aspect-video w-full max-w-sm"
                    />
                  </div>
                </li>
              )
            })}
          </ol>

          {/* Sticky visual — desktop only */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <motion.div
                key={activeArtifact.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <MediaPlaceholder
                  label={activeArtifact.label}
                  accent={activeArtifact.accent}
                  showPlay={processSteps[activeIndex].artifact === 'production'}
                  ratioClassName="aspect-[4/5] w-full"
                />
              </motion.div>
              <p className="mt-4 text-center font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                Step {processSteps[activeIndex].index} of {processSteps.length}
              </p>
            </div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-16 max-w-2xl border-t border-line pt-8 text-lg font-medium text-ink sm:text-xl"
        >
          {processClosing}
        </motion.p>
      </div>
    </section>
  )
}
