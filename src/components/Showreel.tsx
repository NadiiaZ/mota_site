import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import MediaPlaceholder from './MediaPlaceholder'

interface Frame {
  label: string
  accent: 'orange' | 'pink' | 'blue' | 'lime'
}

// REPLACE: each frame stands in for a real exported clip from the showreel.
const frames: Frame[] = [
  { label: 'VERTICAL SOCIAL AD', accent: 'orange' },
  { label: 'DELIVERY INTERFACE', accent: 'lime' },
  { label: 'MOBILITY APP', accent: 'blue' },
  { label: 'SAAS DASHBOARD', accent: 'orange' },
  { label: 'PRODUCT ANIMATION', accent: 'pink' },
  { label: '2D CHARACTER SCENE', accent: 'blue' },
]

export default function Showreel() {
  const [index, setIndex] = useState(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % frames.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [reducedMotion])

  const frame = frames[index]

  return (
    <div className="relative">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-bg-secondary sm:aspect-[16/10] lg:aspect-[4/5]">
        <AnimatePresence mode="wait">
          <motion.div
            key={frame.label}
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <MediaPlaceholder
              label={frame.label}
              accent={frame.accent}
              showPlay
              ratioClassName="h-full w-full rounded-none"
            />
          </motion.div>
        </AnimatePresence>

        {/* Muted showreel indicator — never implies audio */}
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur-sm sm:left-6 sm:top-6">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-lime" aria-hidden="true" />
          <span className="font-display text-[10px] font-semibold uppercase tracking-[0.14em] text-ink">
            Showreel — 00:30
          </span>
        </div>

        <div className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur-sm sm:bottom-6 sm:right-6">
          <span className="font-display text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
            Muted preview
          </span>
        </div>
      </div>

      {/* Format progress dots */}
      <div className="mt-4 flex items-center gap-2" role="tablist" aria-label="Showreel formats">
        {frames.map((f, i) => (
          <button
            key={f.label}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={f.label}
            onClick={() => setIndex(i)}
            className={`h-1.5 flex-1 rounded-full transition-all duration-300 ease-mota ${
              i === index ? 'bg-mota-gradient' : 'bg-white/10 hover:bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
