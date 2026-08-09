import { motion } from 'framer-motion'
import { team } from '../data/team'
import SectionHeading from './SectionHeading'
import TeamCard from './TeamCard'

export default function Studio() {
  return (
    <section id="studio" aria-labelledby="studio-heading" className="section-pad">
      <div className="container-mota">
        <SectionHeading
          id="studio-heading"
          eyebrow="Meet MOTA"
          heading="Small team. Focused production."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            <p>
              MOTA is a motion design studio creating advertising creatives and product
              animations for products, services and brands.
            </p>
            <p>
              We work with apps, online platforms, delivery and mobility services, SaaS
              companies, marketplaces, physical products and other businesses that need clear
              and engaging visual communication.
            </p>
            <p>
              We combine strong ideas, clear design and purposeful motion to make products and
              services easier to understand — and harder to ignore.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {team.map((member, i) => (
              <TeamCard key={member.name + i} member={member} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
