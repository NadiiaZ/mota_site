import { motion } from 'framer-motion'
import type { TeamMember } from '../data/team'
import MediaPlaceholder from './MediaPlaceholder'

interface TeamCardProps {
  member: TeamMember
  index: number
}

export default function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-2xl border border-line bg-bg-secondary"
    >
      <MediaPlaceholder
        label={member.portraitLabel}
        accent={member.accent}
        ratioClassName="aspect-[3/4] w-full rounded-none"
      />

      {/* Storyboard-style annotation frame corners, echoing production artifacts */}
      <div className="pointer-events-none absolute inset-4 border border-dashed border-white/15" aria-hidden="true" />

      <div className="p-6">
        <h3 className="font-display text-xl font-semibold">{member.name}</h3>
        <p className="mt-1 text-sm font-medium text-ink-muted">{member.role}</p>
        <p className="mt-3 text-sm italic leading-relaxed text-ink-muted/80">{member.bio}</p>
      </div>
    </motion.article>
  )
}
