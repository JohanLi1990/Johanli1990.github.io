import { ExternalLink } from 'lucide-react'
import { projects } from '../data/resume'

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-16 py-20" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold mb-10" style={{ color: 'var(--color-purple)' }}>
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: typeof projects[number] }) {
  const inner = (
    <div
      className="bg-white rounded-lg p-6 border transition-colors flex flex-col gap-4 h-full"
      style={{ borderColor: 'var(--color-border)', cursor: project.url ? 'pointer' : 'default' }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-teal)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-base" style={{ color: 'var(--color-ink)' }}>
          {project.name}
        </h3>
        <div className="flex items-center gap-2 shrink-0">
          {project.wip && (
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#FEF9C3', color: '#92400E' }}>
              WIP
            </span>
          )}
          {project.url && <ExternalLink size={14} style={{ color: 'var(--color-muted)' }} />}
        </div>
      </div>
      <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-muted)' }}>
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs rounded"
            style={{ backgroundColor: '#EEF9FA', color: 'var(--color-teal)' }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )

  if (project.url) {
    return (
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    )
  }
  return inner
}
