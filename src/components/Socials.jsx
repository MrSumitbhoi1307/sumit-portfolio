import { Mail,Phone} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons.jsx'
import { profile } from '../data/portfolio.js'

// GitHub / LinkedIn link rikama asel tar icon dakhvla jaat nahi
export default function Socials({ className = '' }) {
  const tel = (profile.phone || '').replace(/\s+/g, '')
  return (    <div className={`socials ${className}`}>
      {profile.github && (
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GithubIcon width={20} height={20} />
        </a>
      )}
      {profile.linkedin && (
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedinIcon width={20} height={20} />
        </a>
      )}
      <a href={`mailto:${profile.email}`} aria-label="Email">
        <Mail size={20} />
      </a>
      {profile.phone && (
        <a href={`tel:${tel}`} aria-label="Call" title={profile.phone}>
          <Phone size={20} />
        </a>
      )}
    </div>
  )
}
