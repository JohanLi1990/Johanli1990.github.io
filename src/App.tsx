import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Interests from './components/Interests'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Outside Work', href: '#interests' },
]

export default function App() {
  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 h-14"
        style={{
          backgroundColor: 'rgba(250,250,250,0.92)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <a href="#hero" className="text-sm font-semibold" style={{ color: 'var(--color-ink)' }}>
          LC
        </a>
        <nav className="hidden sm:flex items-center gap-6">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors"
              style={{ color: 'var(--color-muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-teal)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="pt-14">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Interests />
      </main>

      <footer className="px-6 md:px-16 py-10 text-center" style={{ borderTop: '1px solid var(--color-border)' }}>
        <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
          Li Chenyang · Singapore · Built with React + Tailwind
        </p>
      </footer>
    </>
  )
}
