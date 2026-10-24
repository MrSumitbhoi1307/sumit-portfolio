import { Award, GraduationCap } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { education, experience, skills } from '../data/portfolio.js'

export default function ExperienceSkills() {
  return (
    <section id="experience" className="section exp">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Journey</span>
          <h2 className="title">Experience &amp; Skills</h2>
        </Reveal>

        <div className="exp__grid">
          <div className="exp__left">
            <Reveal className="card glass">
              <span className="card__tag">Experience</span>
              <div className="card__head">
                <span className="info__icon"><Award size={20} /></span>
                <div>
                  <h3>{experience.title}</h3>
                  <p className="muted">{experience.company}</p>
                  <p className="muted small">{experience.period}</p>
                </div>
              </div>
              <ul className="dots-list">
                {experience.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="card glass" delay={0.1}>
              <span className="card__tag">Education</span>
              <div className="card__head">
                <span className="info__icon"><GraduationCap size={20} /></span>
                <div>
                  <h3>{education.degree}</h3>
                  <p className="muted">{education.college}</p>
                  <p className="muted small">
                    {education.period} &nbsp;|&nbsp; CGPA: {education.cgpa}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div id="skills" className="exp__right">
            <Reveal className="card glass">
              <span className="card__tag">Technical Skills</span>
              {skills.map((s) => (
                <div key={s.group} className="skillgroup">
                  <h4 className="mini">{s.group}</h4>
                  <ul className="chips">
                    {s.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
