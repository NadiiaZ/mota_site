import { useState } from 'react'

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

  return (
    <div className="relative">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-bg-secondary sm:aspect-[16/10] lg:aspect-[4/5]">
        <video
          key={clips[index]}
          src={clips[index]}
          muted
          autoPlay
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

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

      <div className="mt-4 flex items-center gap-2" role="tablist" aria-label="Showreel clips">
        {clips.map((clip, i) => (
          <button
            key={clip}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Play clip ${i + 1}`}
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
