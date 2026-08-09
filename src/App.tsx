import Adaptations from './components/Adaptations'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProcessTimeline from './components/ProcessTimeline'
import Services from './components/Services'
import SkipLink from './components/SkipLink'
import Studio from './components/Studio'
import WorkGrid from './components/WorkGrid'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function App() {
  return (
    <>
      <SkipLink />
      <div className="grain-layer" aria-hidden="true" />
      <div className="relative z-[1]">
        <Header />
        <main id="main-content">
          <Hero onNavigate={scrollToSection} />
          <WorkGrid />
          <Services />
          <Adaptations />
          <ProcessTimeline />
          <Studio />
          <FAQ />
          <Contact />
        </main>
        <Footer onNavigate={scrollToSection} />
      </div>
    </>
  )
}
