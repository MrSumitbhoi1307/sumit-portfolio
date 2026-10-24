import ProjectSection from './ProjectSection.jsx'
import { projects } from '../data/portfolio.js'

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      {projects.map((p, i) => (
        <ProjectSection key={p.id} project={p} index={i} />
      ))}
    </section>
  )
}
