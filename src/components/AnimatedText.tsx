import { motion } from 'framer-motion'

interface AnimatedTextProps {
  lines: string[]
  className?: string
  delay?: number
}

/**
 * Reveals an array of text lines with a clip-mask stagger. Used for the hero
 * headline so the first meaningful content is legible almost immediately.
 */
export default function AnimatedText({ lines, className = '', delay = 0 }: AnimatedTextProps) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.08,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
