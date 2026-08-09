import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import AnimatedText from './AnimatedText'
import Showreel from './Showreel'

const headlineLines = [
  'MOTION THAT MAKES',
  'PRODUCTS AND SERVICES',
  'CLEAR — AND HARD TO IGNORE.',
]

interface HeroProps {
  onNavigate: (id: string) => void
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center pb-20 pt-32 sm:pt-36 lg:pt-40"
    >
      <div className="container-mota grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="eyebrow mb-6"
          >
            MOTA — Motion Design Studio
          </motion.p>

          <h1 className="text-[clamp(2.25rem,6vw,4.25rem)] font-bold leading-[1.02]">
            <AnimatedText lines={headlineLines} delay={0.15} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            We create social media ad creatives and product animations for brands, products and
            services — from concept and design to animation, editing and sound.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <button
              type="button"
              onClick={() => onNavigate('work')}
              className="btn-primary bg-ink"
            >
              View Our Work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="btn-secondary"
            >
              Start a Project
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6"
        >
          <Showreel />
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => onNavigate('work')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-muted sm:flex"
        aria-label="Scroll to selected work"
      >
        <span className="font-display text-[10px] font-semibold uppercase tracking-[0.14em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
      </motion.button>
    </section>
  )
}
