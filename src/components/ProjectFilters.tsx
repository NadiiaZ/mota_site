import type { ProjectCategory } from '../data/projects'
import { projectFilters } from '../data/projects'

interface ProjectFiltersProps {
  active: ProjectCategory | 'All'
  onChange: (value: ProjectCategory | 'All') => void
}

export default function ProjectFilters({ active, onChange }: ProjectFiltersProps) {
  return (
    <div
      role="group"
      aria-label="Filter work by category"
      className="flex flex-wrap gap-2 sm:gap-3"
    >
      {projectFilters.map((filter) => {
        const isActive = filter === active
        return (
          <button
            key={filter}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(filter)}
            className={`min-h-[44px] rounded-full border px-4 py-2 font-display text-xs font-semibold uppercase tracking-wide transition-colors duration-200 ease-mota sm:text-sm ${
              isActive
                ? 'border-ink bg-ink text-bg'
                : 'border-line text-ink-muted hover:border-ink/40 hover:text-ink'
            }`}
          >
            {filter}
          </button>
        )
      })}
    </div>
  )
}
