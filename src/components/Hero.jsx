
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, MousePointer2 } from 'lucide-react'
import Socials from './Socials.jsx'
import { profile, stats } from '../data/portfolio.js'

// Floating glowing dots
const dots = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  top: (i * 53 + 7) % 100,
  size: 2 + ((i * 7) % 4),
  delay: (i % 7) * 0.8,
  dur: 6 + (i % 5) * 2,
}))

export default function Hero() {
  const videoRef = useRef(null)
  const fadeRef = useRef(null)

  // Smooth video loop transition
  useEffect(() => {
    let raf

    const tick = () => {
      const video = videoRef.current
      const fade = fadeRef.current

      if (video && fade && video.duration) {
        const progress = video.currentTime / video.duration
        const edge = 0.06

        const opacity =
          progress < edge
            ? 1 - progress / edge
            : progress > 1 - edge
              ? (progress - (1 - edge)) / edge
              : 0

        fade.style.opacity = String(
          Math.min(1, Math.max(0, opacity))
        )
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(raf)
  }, [])

  // Scroll to About with navbar offset
  const scrollToAbout = (event) => {
    event.preventDefault()

    const aboutSection = document.getElementById('about')

    if (aboutSection) {
      const navbar = document.querySelector('header, .navbar, .nav')
      const navbarHeight = navbar?.getBoundingClientRect().height || 90

      const targetPosition =
        aboutSection.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight

      window.history.replaceState(null, '', '#about')

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="home" className="hero">
      {/* Background video */}
      <div className="hero__media" aria-hidden="true">
        <div className="hero__vwrap">
          <video
            ref={videoRef}
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/hero-poster.jpg"
          >
            <source
              src="/images/sumit-walking.mp4"
              type="video/mp4"
            />
          </video>

          <div
            ref={fadeRef}
            className="hero__loopfade"
          />
        </div>

        <div className="hero__tint" />
        <div className="hero__shade" />
      </div>

      <div className="hero__glow" aria-hidden="true" />

      {/* Floating dots */}
      <div className="hero__dots" aria-hidden="true">
        {dots.map((dot, index) => (
          <span
            key={index}
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              width: dot.size,
              height: dot.size,
              animationDelay: `${dot.delay}s`,
              animationDuration: `${dot.dur}s`,
            }}
          />
        ))}
      </div>

      <div className="hero__grid" aria-hidden="true" />

      {/* Hero content */}
      <div className="container hero__content">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="hero__ghost" aria-hidden="true">
            01
          </span>

          <p className="hero__hi">Hi, I'm</p>

          <h1 className="hero__name">
            SUMIT <span className="grad">BHOI</span>
            <span className="hero__dot">.</span>
          </h1>

          <h2 className="hero__role">
            Full Stack <span className="grad">MERN</span> Developer
          </h2>

          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__buttons">
            <a
              href="#about"
              className="btn btn--primary"
              onClick={scrollToAbout}
            >
              See who I am <ArrowRight size={16} />
            </a>

            <a
              href={profile.resume}
              download
              className="btn btn--outline"
            >
              Download Resume <Download size={16} />
            </a>
          </div>

          <Socials className="hero__socials" />
        </motion.div>

        <motion.div
          className="hero__tagline"
          aria-hidden="true"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {profile.tagline.map((word) => (
            <span key={word}>{word}</span>
          ))}
        </motion.div>
      </div>

      {/* Scroll down */}
      <a
        href="#about"
        className="hero__scroll"
        aria-label="Scroll down"
        onClick={scrollToAbout}
      >
        <span className="hero__scrollicon">
          <MousePointer2 size={14} />
        </span>
        Scroll Down
      </a>

      {/* Stats */}
      <div className="container hero__stats-wrap">
        <ul className="stats glass">
          {stats.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
