import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { services } from '../data/services'
import SectionHeading from './SectionHeading'
import ServiceVisual from './ServiceVisual'

const accentText: Record<string, string> = {
  orange: 'text-accent-orange',
  blue: 'text-accent-blue',
  pink: 'text-accent-pink',
}

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="section-pad bg-bg-secondary">
      <div className="container-mota">
        <SectionHeading
          id="services-heading"
          eyebrow="What We Do"
          heading="Three ways we make a product move."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {services.map((service, i) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
              className={`rounded-2xl border border-line bg-bg p-6 sm:p-8 ${
                service.span === 'wide' ? 'lg:col-span-2' : 'lg:col-span-1'
              }`}
            >
              <div
                className={`grid grid-cols-1 gap-8 ${
                  service.span === 'wide' ? 'lg:grid-cols-[1fr,1.1fr] lg:items-center' : ''
                }`}
              >
                <div>
                  <span className={`font-display text-sm font-semibold ${accentText[service.accent]}`}>
                    {service.index}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-[1.75rem]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink-muted">{service.summary}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{service.detail}</p>

                  <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-ink">
                        <Check className={`h-3.5 w-3.5 shrink-0 ${accentText[service.accent]}`} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <ServiceVisual
                  visual={service.visual}
                  className={service.span === 'wide' ? 'aspect-video' : 'aspect-[4/3]'}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
