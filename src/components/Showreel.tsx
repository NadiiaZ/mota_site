import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const clips = [
  '/media/work/showreel-1.mp4',
  '/media/work/showreel-2.mp4',
  '/media/work/showreel-1.mp4',
  '/media/work/showreel-2.mp4',
  '/media/work/showreel-1.mp4',
  '/media/work/showreel-2.mp4',
]

export default function Showreel() {
  const [index, setIndex] = useState(0)

  const goToPrev = () => setIndex((i) => (i - 1 + clips.length) % clips.length)
  const goToNext = () => setIndex((i) => (i + 1) % clips.length)

  return (
    <div className="relative">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-bg-secondary sm:aspect-[16/10] lg:aspect-[4/5]">
        <AnimatePresence mode="wait">
          <motion.video
            key={clips[index]}
            src={clips[index]}
            muted
            autoPlay
            loop
            playsInline
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur-sm sm:left-6 sm:top-6">
