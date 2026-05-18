import { skillGroups } from '../data/resume'

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 py-20" style={{ backgroundColor: '#E6F4F6' }}>
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold mb-8" style={{ color: 'var(--color-purple)' }}>
          Skills
        </h2>
        <div className="flex flex-col gap-8">
          {skillGroups.map(group => (
            <div key={group.label}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-muted)' }}>
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillBadge({ label }: { label: string }) {
  return (
    <span
      className="px-3 py-1 text-sm rounded-full border cursor-default transition-colors"
      style={{
        borderColor: 'var(--color-border)',
        color: 'var(--color-ink)',
        backgroundColor: 'white',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--color-teal)'
        e.currentTarget.style.color = 'var(--color-teal)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--color-border)'
        e.currentTarget.style.color = 'var(--color-ink)'
      }}
    >
      {label}
    </span>
  )
}
