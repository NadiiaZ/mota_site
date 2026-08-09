import { ArrowUp } from 'lucide-react'
import { navItems } from '../data/navigation'
import { contactEmail, socialLinks } from '../data/social'
import LogoMark from './LogoMark'

interface FooterProps {
  onNavigate: (id: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="container-mota py-14 sm:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <button
              type="button"
              onClick={() => onNavigate('hero')}
              className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-ink"
            >
              <LogoMark className="h-7 w-7" />
              MOTA
            </button>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Motion design for products, services and brands.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => onNavigate(item.href)}
                className="link-underline text-sm font-medium text-ink-muted hover:text-ink"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="space-y-3">
            <a href={`mailto:${contactEmail}`} className="link-underline block text-sm font-medium">
              {contactEmail}
            </a>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-sm text-ink-muted hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-6 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-muted">© {year} MOTA. All rights reserved.</p>
          <button
            type="button"
            onClick={() => onNavigate('hero')}
            className="flex min-h-[44px] items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-medium text-ink-muted transition-colors duration-200 hover:border-ink/40 hover:text-ink"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
