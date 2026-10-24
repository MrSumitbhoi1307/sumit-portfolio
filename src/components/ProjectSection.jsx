import { CheckCircle2, ExternalLink } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { GithubIcon } from './Icons.jsx'

// Link nasel tar button disabled + "Coming soon" (dead link nahi)
function LinkButton({ href, children, variant, icon }) {
  if (!href) {
    return (
      <span className={`btn btn--${variant} is-disabled`} aria-disabled="true" title="Link coming soon">
        {children}
      </span>
    )
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`btn btn--${variant}`}>
      {children}
      {icon}
    </a>
  )
}

function Preview({ project }) {
  if (project.image) {
    return <img className="preview__img" src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
  }
  // Screenshot nasel tar sundar mockup
  return (
    <div className="mock" role="img" aria-label={`${project.title} preview placeholder`}>
      <div className="mock__bar">
        <i /><i /><i />
        <span>{project.title.toLowerCase().replace(/\s+/g, '-')}.app</span>
      </div>
      <div className="mock__body">
        <div className="mock__side">
          <b /><b /><b /><b />
        </div>
        <div className="mock__main">
          <h4>{project.title}</h4>
          <div className="mock__cards">
            <b /><b /><b />
          </div>
          <div className="mock__lines">
            <b /><b /><b />
          </div>
        </div>
      </div>
      <p className="mock__note">Add screenshot: set <code>image</code> in portfolio.js</p>
    </div>
  )
}

export default function ProjectSection({ project, index }) {
  const num = String(index + 1).padStart(2, '0')
  return (
    <div className="project" id={project.id} style={{ zIndex: index + 1, top: 74 + index * 10 }}>
      <div className="container project__grid">
        <Reveal className="project__info">
          <span className="project__ghost" aria-hidden="true">{num}</span>
          <span className="eyebrow">Featured Project</span>
          <h3 className="project__title">
            {project.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="grad">{project.title.split(' ').slice(-1)}</span>
          </h3>
          <p className="project__desc">{project.description}</p>

          <div className="project__buttons">
            <LinkButton href={project.live} variant="primary" icon={<ExternalLink size={15} />}>
              Live Demo
            </LinkButton>
            <LinkButton href={project.source} variant="outline" icon={<GithubIcon width={15} height={15} />}>
              Source Code
            </LinkButton>
          </div>

          <div className="project__cols">
            <div>
              <h4 className="mini">Key Features</h4>
              <ul className="checks">
                {project.features.map((f) => (
                  <li key={f}>
                    <CheckCircle2 size={16} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mini">Tech Stack</h4>
              <ul className="chips">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal className="project__preview" delay={0.15}>
          <div className="preview glass">
            <Preview project={project} />
          </div>
        </Reveal>
      </div>
    </div>
  )
}