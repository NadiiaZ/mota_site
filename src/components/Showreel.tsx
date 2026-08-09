import { motion } from 'framer-motion'

export default function Showreel() {
  return (
    <div className="relative">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-bg-secondary sm:aspect-[16/10] lg:aspect-[4/5]">
        <video
          src="/media/work/showreel-1.mp4"
          muted
          autoPlay
          loop
          playsInline
          className="h-full w-full object-cover"
        />

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
    </div>
  )
}
