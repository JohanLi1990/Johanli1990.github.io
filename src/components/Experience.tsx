import { experience } from '../data/resume'

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-16 py-20" style={{ backgroundColor: 'var(--color-base)' }}>
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold mb-10" style={{ color: 'var(--color-purple)' }}>
          Experience
        </h2>
        <div className="relative">
          {/* vertical timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{ backgroundColor: 'var(--color-teal)' }}
          />
          <div className="flex flex-col gap-10 pl-8">
            {experience.map(job => (
              <div key={job.company} className="relative">
                {/* timeline dot */}
                <div
                  className="absolute -left-10 top-1.5 w-3 h-3 rounded-full border-2"
                  style={{ borderColor: 'var(--color-teal)', backgroundColor: 'var(--color-base)' }}
                />
                <div
                  className="bg-white rounded-lg p-6"
                  style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)', border: '1px solid var(--color-border)' }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h3 className="font-semibold text-lg" style={{ color: 'var(--color-ink)' }}>
                      {job.company}
                    </h3>
                    <span className="text-sm" style={{ color: 'var(--color-muted)' }}>
                      {job.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium mb-1" style={{ color: 'var(--color-teal)' }}>
                    {job.role}
                  </p>
                  <p className="text-xs mb-4" style={{ color: 'var(--color-muted)' }}>
                    {job.domain}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {job.highlights.map((point, i) => (
                      <li key={i} className="text-sm leading-relaxed flex gap-2" style={{ color: 'var(--color-ink)' }}>
                        <span style={{ color: 'var(--color-teal)', flexShrink: 0 }}>–</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
