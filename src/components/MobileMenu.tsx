import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { navItems } from '../data/navigation'
import LogoMark from './LogoMark'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  onNavigate: (href: string) => void
  activeSection: string
}

export default function MobileMenu({ open, onClose, onNavigate, activeSection }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      closeRef.current?.focus()
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab' && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])',
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex flex-col bg-bg lg:hidden"
        >
          <div className="flex h-20 items-center justify-between px-6">
            <span className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-ink">
              <LogoMark className="h-6 w-6" />
              MOTA
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-1 px-6" aria-label="Mobile">
            {navItems.map((item, i) => (
              <motion.button
                key={item.href}
                type="button"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onNavigate(item.href)}
                aria-current={activeSection === item.href ? 'true' : undefined}
                className={`min-h-[44px] border-b border-line py-4 text-left font-display text-3xl font-semibold ${
                  activeSection === item.href ? 'text-ink' : 'text-ink-muted'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          <div className="px-6 pb-10">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="btn-primary w-full bg-mota-gradient text-ink"
            >
              Start a Project
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
