import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow: string
  heading: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  id?: string
}

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = 'left',
  id,
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="eyebrow mb-4"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        id={id}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-bold leading-[1.05]"
      >
        {heading}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
          className="mt-5 text-base sm:text-lg text-ink-muted leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
