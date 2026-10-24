import { useState } from 'react'
import { CheckCircle2, Mail,Phone, Send } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { GithubIcon, LinkedinIcon } from './Icons.jsx'
import { profile } from '../data/portfolio.js'

// .env madhe VITE_FORM_ENDPOINT = https://formspree.io/f/xxxxxxx thevla tar
// form direct tujhya email la jaail. Nasel tar user cha mail app ughadto (mailto).
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT
console.log('ENDPOINT =', ENDPOINT)

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | done | error

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('done')
      return
    }
    try {
      setStatus('sending')
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('done')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="contact__bg" aria-hidden="true" />
      <div className="container contact__grid">
        <Reveal className="contact__text">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="title title--xl">
            Let&apos;s Build Something <span className="grad">Amazing Together.</span>
          </h2>
          <p className="lead">
            I&apos;m always open to new opportunities, collaborations and exciting projects. Feel free to reach out!
          </p>
          <ul className="contact__links">
            <li>
              <span className="info__icon"><Mail size={18} /></span>
              <div>
                <small>Email</small>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            </li>
            {profile.phone && (
     <li>
       <span className="info__icon"><Phone size={18} /></span>
       <div>
         <small>Phone</small>
         <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
       </div>
     </li>
   )}
            {profile.linkedin && (
              <li>
                <span className="info__icon"><LinkedinIcon width={18} height={18} /></span>
                <div>
                  <small>LinkedIn</small>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">Connect with me</a>
                </div>
              </li>
            )}
            {profile.github && (
              <li>
                <span className="info__icon"><GithubIcon width={18} height={18} /></span>
                <div>
                  <small>GitHub</small>
                  <a href={profile.github} target="_blank" rel="noreferrer">See my code</a>
                </div>
              </li>
            )}
          </ul>
        </Reveal>

        <Reveal className="contact__form" delay={0.15}>
          {status === 'done' ? (
            <div className="thanks glass" role="status">
              <CheckCircle2 size={44} />
              <h3>Thank you!</h3>
              <p>
                {ENDPOINT
                  ? "Your message has been sent. I'll get back to you soon."
                  : 'Your email app should have opened with the message ready to send.'}
              </p>
              <button className="btn btn--outline btn--sm" onClick={() => setStatus('idle')}>
                Send another message
              </button>
            </div>
          ) : (
            <form className="form glass" onSubmit={onSubmit}>
              <label>
                <span>Your Name</span>
                <input name="name" value={form.name} onChange={onChange} required autoComplete="name" placeholder="Your Name" />
              </label>
              <label>
                <span>Your Email</span>
                <input name="email" type="email" value={form.email} onChange={onChange} required autoComplete="email" placeholder="you@example.com" />
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows="5" value={form.message} onChange={onChange} required placeholder="Tell me about your project..." />
              </label>
              {status === 'error' && (
                <p className="form__error" role="alert">Something went wrong. Please email me directly.</p>
              )}
              <button className="btn btn--primary btn--block" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={15} />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
