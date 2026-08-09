import { Play } from 'lucide-react'

type Accent = 'orange' | 'pink' | 'blue' | 'lime'

const accentGradients: Record<Accent, string> = {
  orange: 'from-accent-orange/30 via-bg-elevated to-bg-secondary',
  pink: 'from-accent-pink/30 via-bg-elevated to-bg-secondary',
  blue: 'from-accent-blue/30 via-bg-elevated to-bg-secondary',
  lime: 'from-accent-lime/25 via-bg-elevated to-bg-secondary',
}

const accentDot: Record<Accent, string> = {
  orange: 'bg-accent-orange',
  pink: 'bg-accent-pink',
  blue: 'bg-accent-blue',
  lime: 'bg-accent-lime',
}

interface MediaPlaceholderProps {
  label: string
  accent?: Accent
  showPlay?: boolean
  className?: string
  ratioClassName?: string
}

/**
 * Stands in for real portfolio media (video previews, posters, portraits).
 * REPLACE: swap the parent <video>/<img> for real assets — this component
 * only exists so the layout never breaks when a real file is missing.
 */
export default function MediaPlaceholder({
  label,
  accent = 'orange',
  showPlay = false,
  className = '',
  ratioClassName = '',
}: MediaPlaceholderProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${accentGradients[accent]} ${ratioClassName} ${className}`}
      role="img"
      aria-label={label}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(244,240,232,0.5) 0px, rgba(244,240,232,0.5) 1px, transparent 1px, transparent 14px)',
        }}
      />
      <div className="relative flex flex-col items-center gap-3 px-4 text-center">
        {showPlay && (
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-black/30 backdrop-blur-sm">
            <Play className="h-4 w-4 translate-x-[1px] fill-ink text-ink" aria-hidden="true" />
          </span>
        )}
        <span className="flex items-center gap-2 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
          <span className={`h-1.5 w-1.5 rounded-full ${accentDot[accent]}`} aria-hidden="true" />
          {label}
        </span>
      </div>
    </div>
  )
}
