import { Logo } from './Icons.jsx'
import Socials from './Socials.jsx'
import { profile } from '../data/portfolio.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo size={42} />
          <div>
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </div>
        </div>
        <Socials />
        <p className="footer__copy">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
