import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import MediaPlaceholder from './MediaPlaceholder'
import type { Service } from '../data/services'

const visualFrames: Record<Service['visual'], { label: string; accent: 'orange' | 'pink' | 'blue' }[]> = {
  ad: [
    { label: 'ANIMATED AD', accent: 'orange' },
    { label: 'UGC-STYLE EDIT', accent: 'orange' },
    { label: 'AI-ASSISTED SCENE', accent: 'orange' },
  ],
  product: [
    { label: 'ONBOARDING FLOW', accent: 'blue' },
    { label: 'FEATURE HIGHLIGHT', accent: 'blue' },
    { label: 'PRODUCT FLOW — COMPLETE', accent: 'blue' },
  ],
  character: [{ label: 'CHARACTER ACTION', accent: 'pink' }],
}

interface ServiceVisualProps {
  visual: Service['visual']
  className?: string
}

export default function ServiceVisual({ visual, className = '' }: ServiceVisualProps) {
  const frames = visualFrames[visual]
  const [index, setIndex] = useState(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion || frames.length <= 1) return
    const interval = setInterval(() => setIndex((i) => (i + 1) % frames.length), 2600)
    return () => clearInterval(interval)
  }, [frames.length, reducedMotion])

  const frame = frames[index]

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={frame.label}
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="h-full w-full"
        >
          <MediaPlaceholder label={frame.label} accent={frame.accent} ratioClassName="h-full w-full rounded-xl" />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
