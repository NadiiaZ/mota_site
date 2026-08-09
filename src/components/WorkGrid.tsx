import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { ProjectCategory } from '../data/projects'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectFilters from './ProjectFilters'
import SectionHeading from './SectionHeading'

export default function WorkGrid() {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All')

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="work" aria-labelledby="work-heading" className="section-pad">
      <div className="container-mota">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="work-heading"
            eyebrow="Selected Work"
            heading="Work built to explain, engage and get attention."
          />
        </div>

        <div className="mt-10 sm:mt-12">
          <ProjectFilters active={filter} onChange={setFilter} />
        </div>

        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-ink-muted">No projects in this category yet.</p>
        )}
      </div>
    </section>
  )
}
