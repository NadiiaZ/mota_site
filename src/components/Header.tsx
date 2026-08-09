import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { navItems } from '../data/navigation'
import { useActiveSection } from '../hooks/useActiveSection'
import LogoMark from './LogoMark'
import MobileMenu from './MobileMenu'

const sectionIds = ['hero', ...navItems.map((n) => n.href)]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (!el) return
    // Delay slightly so the mobile menu has closed and layout has settled.
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-mota ${
          scrolled
            ? 'h-16 border-b border-line bg-bg/85 backdrop-blur-md'
            : 'h-20 border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-mota flex h-full items-center justify-between">
          <motion.button
            type="button"
            onClick={() => scrollToSection('hero')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-ink sm:text-2xl"
            aria-label="MOTA — back to top"
          >
            <LogoMark className="h-6 w-6 sm:h-7 sm:w-7" />
            MOTA
          </motion.button>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navItems.map((item, i) => (
              <motion.button
                key={item.href}
                type="button"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                onClick={() => scrollToSection(item.href)}
                aria-current={activeSection === item.href ? 'true' : undefined}
                className={`link-underline pb-1 font-display text-sm font-medium uppercase tracking-wide transition-colors duration-200 ${
                  activeSection === item.href ? 'text-ink' : 'text-ink-muted hover:text-ink'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              onClick={() => scrollToSection('contact')}
              className="btn-primary hidden lg:inline-flex"
            >
              Start a Project
            </motion.button>

            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="btn-secondary min-h-[44px] px-4 text-xs lg:hidden"
            >
              Start
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />
    </>
  )
}
