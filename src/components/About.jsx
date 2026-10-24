import { ArrowRight, GraduationCap, Languages, MapPin } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { profile } from '../data/portfolio.js'

const info = [
  { icon: MapPin, label: 'Location', value: profile.location },
  { icon: GraduationCap, label: 'Education', value: profile.education },
  { icon: Languages, label: 'Languages', value: profile.languages },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <Reveal className="about__text">
          <span className="eyebrow">About Me</span>
          <h2 className="title">Who Am I?</h2>
          <p className="lead">{profile.about}</p>

          <ul className="info">
            {info.map(({ icon: Icon, label, value }) => (
              <li key={label} className="glass">
                <span className="info__icon">
                  <Icon size={18} />
                </span>
                <div>
                  <small>{label}</small>
                  <p>{value}</p>
                </div>
              </li>
            ))}
          </ul>

          <a href="#projects" className="btn btn--primary">
  Take a look at my project <ArrowRight size={16} />
</a>
        </Reveal>

        <Reveal className="about__photo" delay={0.15}>
          <div className="portrait">
           <div className="portrait">
  <video
    src="/images/sumit-profile.mp4"
    autoPlay
    loop
    muted
    playsInline
    aria-label="Sumit Bhoi"
  />
  <span className="portrait__sign" aria-hidden="true">Sumit Bhoi</span>
</div>
            <span className="portrait__sign" aria-hidden="true">Sumit Bhoi</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
