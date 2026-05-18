import { Youtube } from 'lucide-react'

export default function Interests() {
  return (
    <section id="interests" className="px-6 md:px-16 py-20" style={{ backgroundColor: '#EFEFEF' }}>
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold mb-10" style={{ color: 'var(--color-purple)' }}>
          Outside Work
        </h2>
        <div className="grid sm:grid-cols-2 gap-10">

          <div className="flex flex-col gap-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: '#00778B22' }}>
              🏀
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-teal)' }}>
              Basketball
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink)' }}>
              Proud Charlotte Hornets fan. I’ve watched this team through the highs, the lows, and
              the very-much-lows. We are one piece away from being a playoff contender.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: '#1D116022' }}>
              🎹
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-teal)' }}>
              Music
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink)' }}>
              Two artists live rent-free in my head:{' '}
              <a
                href="https://www.youtube.com/@Animenzzz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold transition-colors"
                style={{ color: 'var(--color-ink)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FF0000')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-ink)')}
              >
                Animenz <Youtube size={13} />
              </a>
              , whose piano arrangements of anime soundtracks turn familiar
              melodies into something close to overwhelming; and{' '}
              <a
                href="https://www.youtube.com/channel/UCvtkFm0XlCLqyvtP7UpqAoA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold transition-colors"
                style={{ color: 'var(--color-ink)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FF0000')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-ink)')}
              >
                Ne-Yo <Youtube size={13} />
              </a>
              , whose R&B is the rare thing that sounds both polished and
              effortless. Quite different, yet both hit the same part of the brain.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
