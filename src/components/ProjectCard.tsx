import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'
import MediaPlaceholder from './MediaPlaceholder'

const sizeClasses: Record<Project['size'], string> = {
  featured: 'lg:col-span-6',
  large: 'sm:col-span-1 lg:col-span-3',
  medium: 'sm:col-span-1 lg:col-span-3',
  small: 'sm:col-span-1 lg:col-span-2',
}

const aspectClasses: Record<Project['aspect'], string> = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[4/5]',
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [active, setActive] = useState(false)
  const cardRef = useRef<HTMLElement>(null)

  return (
    <motion.article
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`group ${sizeClasses[project.size]}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    >
      <button
        type="button"
        onClick={() => setActive((v) => !v)}
        className="block w-full text-left"
        aria-label={`View project — ${project.title}`}
      >
        <div
          className={`relative w-full overflow-hidden rounded-xl ${
            project.size === 'featured' ? 'aspect-[16/10] sm:aspect-[21/9]' : aspectClasses[project.aspect]
          }`}
        >
          <motion.div
            animate={{ scale: active ? 1.04 : 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-full w-full"
          >
            <MediaPlaceholder
              label={project.posterLabel}
              accent={project.accent}
              showPlay={active}
              ratioClassName="h-full w-full rounded-xl"
            />
          </motion.div>

          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          />

          <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 opacity-0 backdrop-blur-sm transition-all duration-300 ease-mota group-hover:opacity-100 group-focus-visible:opacity-100 sm:translate-y-1 sm:group-hover:translate-y-0">
            <ArrowUpRight className="h-4 w-4 text-ink" aria-hidden="true" />
          </span>
        </div>

        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-semibold leading-snug sm:text-xl">
              {project.title}
            </h3>
            <p className="mt-1.5 text-sm text-ink-muted">{project.description}</p>
          </div>
        </div>
        <p className="mt-3 font-display text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
          {project.category}
        </p>
      </button>
    </motion.article>
  )
}
