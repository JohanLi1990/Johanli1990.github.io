import { Mail, Linkedin, Github } from 'lucide-react'
import { profile } from '../data/resume'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[60vh] flex flex-col justify-center px-6 md:px-16 py-24"
      style={{ backgroundColor: '#EFEFEF' }}
    >
      <div className="relative max-w-5xl w-full flex flex-col md:flex-row md:items-center gap-10" style={{ zIndex: 1 }}>
        {/* Left: photo + text */}
        <div className="flex flex-col md:flex-row md:items-center gap-10 flex-1">
        {/* Profile photo */}
        <div className="shrink-0">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden" style={{ border: '3px solid var(--color-teal)' }}>
            <img
              src="/roblox_profile.png"
              alt="Li Chenyang"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex-1">
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--color-teal)' }}>
            {profile.location}
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-2" style={{ color: 'var(--color-ink)' }}>
            {profile.name}
          </h1>
          <div className="w-16 h-1 mb-6 rounded-full" style={{ backgroundColor: 'var(--color-teal)' }} />
          <div className="flex flex-col gap-2 mb-8">
            <p className="text-base" style={{ color: 'var(--color-ink)' }}>Just another guy who enjoys coding, basketball, and music.</p>
            <p className="text-base" style={{ color: 'var(--color-ink)' }}>Dabs in trading from time to time — made some, lost some.</p>
            <p className="text-base" style={{ color: 'var(--color-muted)' }}>Kill me softly... with AI.</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <a
              href={`mailto:${profile.contact.email}`}
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: 'var(--color-ink)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-teal)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-ink)')}
            >
              <Mail size={16} />
              {profile.contact.email}
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: 'var(--color-ink)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-teal)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-ink)')}
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: 'var(--color-ink)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-teal)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-ink)')}
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
        </div>{/* end left wrapper */}

        {/* Right: Hornets logo — decorative, large, semi-transparent */}
        <div className="hidden md:flex shrink-0 items-center justify-center select-none" aria-hidden="true">
          <img
            src="/charlotte-hornets-2.svg"
            alt=""
            style={{ width: 260, height: 260, opacity: 0.18, filter: 'drop-shadow(0 0 1px #00778B)' }}
          />
        </div>
      </div>
    </section>
  )
}
