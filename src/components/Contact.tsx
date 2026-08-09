import { motion } from 'framer-motion'
import { contactEmail, socialLinks } from '../data/social'
import ContactForm from './ContactForm'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-pad bg-bg-secondary">
      <div className="container-mota">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr,1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              id="contact-heading"
              eyebrow="Have a Project in Mind?"
              heading="Let's make it move."
              description="Tell us about your product and what you need. We will review your request and suggest the right production format."
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-10 space-y-4"
            >
              <a
                href={`mailto:${contactEmail}`}
                className="link-underline inline-block font-display text-lg font-semibold"
              >
                {contactEmail}
              </a>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-line bg-bg p-6 sm:p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
