import { useState } from 'react'
import './App.css'

const NAVY = '#2b455c'
const PLUM = '#a06178'
const LIGHT_BLUE = '#b8c7d4'

function PhoneMockup() {
  return (
    <div className="phone-float" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
      {/* Glow behind */}
      <div style={{ position: 'absolute', inset: '-40px', borderRadius: '50%', background: `radial-gradient(ellipse, ${PLUM}18 0%, transparent 70%)`, pointerEvents: 'none' }} />

      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen">
          {/* App header */}
          <div className="phone-header">
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '3px' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '0.85rem', color: LIGHT_BLUE }}>Your</span>
              <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1rem', color: NAVY }}>Move</span>
            </div>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#e8ecf0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 16, height: 10, display: 'flex', flexDirection: 'column', gap: 3 }}>
                <div style={{ height: 1.5, background: NAVY, borderRadius: 2 }} />
                <div style={{ height: 1.5, background: NAVY, borderRadius: 2, width: '70%' }} />
              </div>
            </div>
          </div>

          {/* Section label */}
          <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase', paddingLeft: 2 }}>Your Feed</div>

          {/* Feed card 1 */}
          <div className="feed-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <div className="avatar" style={{ background: 'linear-gradient(135deg, #b8c7d4, #2b455c)' }} />
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 600, color: NAVY }}>Maya R.</div>
                <div style={{ fontSize: '0.62rem', color: '#94a3b8' }}>2h ago</div>
              </div>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#4b6175', lineHeight: 1.5, marginBottom: 8 }}>
              Took <span style={{ fontWeight: 600, color: NAVY }}>Sculpt</span> with{' '}
              <span style={{ fontWeight: 700, color: PLUM, textDecoration: 'underline', textDecorationStyle: 'dotted' }}>Elizabeth K.</span>
            </div>
            <div className="stars">
              {[1,2,3,4,5].map(i => <div key={i} className="star" />)}
            </div>
          </div>

          {/* Feed card 2 */}
          <div className="feed-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Trending Now</div>
              <span className="pill-tag">NYC</span>
            </div>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: NAVY, marginBottom: 4 }}>BODYBURN Studio</div>
            <div style={{ fontSize: '0.65rem', color: '#94a3b8', marginBottom: 8 }}>Flatiron · $38/class</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ flex: 1, height: 4, background: '#e5e7eb', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ width: '94%', height: '100%', background: PLUM, borderRadius: 4 }} />
              </div>
              <span style={{ fontSize: '0.65rem', fontWeight: 700, color: PLUM }}>94%</span>
            </div>
          </div>

          {/* Feed card 3 - Leaderboard snippet */}
          <div className="feed-card">
            <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Leaderboard</div>
            {[
              { name: 'Chloe T.', count: 18, color: '#e5b84c' },
              { name: 'You', count: 14, color: LIGHT_BLUE },
              { name: 'Ava S.', count: 11, color: '#c4b8d4' },
            ].map(({ name, count, color }, i) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: i < 2 ? 6 : 0 }}>
                <div style={{ width: 16, height: 16, borderRadius: '50%', background: color, opacity: 0.8, flexShrink: 0 }} />
                <span style={{ fontSize: '0.7rem', color: NAVY, flex: 1, fontWeight: name === 'You' ? 700 : 400 }}>{name}</span>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, color: PLUM }}>{count} classes</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SignupForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{
        background: dark ? 'rgba(255,255,255,0.08)' : '#f0f4f7',
        border: `1.5px solid ${dark ? 'rgba(255,255,255,0.15)' : '#dce4eb'}`,
        borderRadius: '16px',
        padding: '20px 28px',
        textAlign: 'center',
      }}>
        <p style={{ fontWeight: 600, color: dark ? '#fff' : NAVY, fontSize: '1rem' }}>
          ✅ You're on the list.
        </p>
        <p style={{ color: dark ? LIGHT_BLUE : '#6b7280', marginTop: '4px', fontSize: '0.85rem' }}>
          We'll reach out when Your Move launches near you.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <div className="email-wrap" style={dark ? { background: 'rgba(255,255,255,0.06)', border: '1.5px solid rgba(255,255,255,0.15)' } : {}}>
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="email-input"
          style={dark ? { color: '#fff' } : {}}
        />
        <button type="submit" disabled={loading} className="cta-btn">
          {loading ? 'Joining...' : 'Join Waitlist'}
        </button>
      </div>
      <p style={{ color: dark ? 'rgba(184,199,212,0.7)' : '#94a3b8', fontSize: '0.78rem', marginTop: '10px', textAlign: 'center' }}>
        No spam · Free to join · Be first to launch
      </p>
    </form>
  )
}

export default function App() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: NAVY, overflowX: 'hidden', background: '#fff' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid #eaeff3',
        height: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 max(24px, calc((100vw - 1200px) / 2))',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '1.45rem', color: LIGHT_BLUE, letterSpacing: '0.01em' }}>Your</span>
          <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 400, fontSize: '1.7rem', color: NAVY }}>Move</span>
        </div>
        <a
          href="#cta"
          style={{
            background: NAVY, color: '#fff', padding: '9px 22px',
            borderRadius: '100px', fontSize: '0.82rem', fontWeight: 500,
            textDecoration: 'none', letterSpacing: '0.02em',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = PLUM)}
          onMouseLeave={e => (e.currentTarget.style.background = NAVY)}
        >
          Get Early Access
        </a>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        padding: '100px max(24px, calc((100vw - 1200px) / 2)) 80px',
        background: 'linear-gradient(150deg, #ffffff 0%, #f4f7f9 50%, #edf1f4 100%)',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div className="hero-grid" style={{ display: 'flex', alignItems: 'center', gap: '80px', width: '100%', justifyContent: 'space-between' }}>
          {/* Left: text */}
          <div className="hero-text" style={{ flex: '0 0 auto', maxWidth: '520px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="fade-up fade-up-1">
              <span className="badge">
                <span className="badge-dot" />
                Coming Soon
              </span>
            </div>

            <div className="fade-up fade-up-1" style={{ marginBottom: '-8px' }}>
              <img src="/logo.png" alt="Your Move" style={{ height: '72px', objectFit: 'contain', objectPosition: 'left' }} />
            </div>

            <h1 className="fade-up fade-up-2" style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 600,
              fontSize: 'clamp(2.6rem, 5vw, 3.8rem)',
              color: NAVY,
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              margin: 0,
            }}>
              Know before<br />you go.
            </h1>

            <p className="fade-up fade-up-3" style={{
              fontSize: '1.05rem',
              color: '#4b6175',
              lineHeight: 1.75,
              margin: 0,
              maxWidth: '440px',
            }}>
              Real reviews, honest ratings, and workout insights for boutique fitness classes — from people who actually took them.
            </p>

            <div className="fade-up fade-up-4" style={{ maxWidth: '440px' }}>
              <SignupForm />
            </div>

            <div className="fade-up fade-up-5" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {['Instructor Reviews', 'Class Leaderboard', 'Friend Feed'].map((label, i) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {i > 0 && <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#c4d2dc' }} />}
                  <span style={{ fontSize: '0.78rem', color: '#7a93a6', fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: phone mockup */}
          <div style={{ flex: '0 0 auto' }}>
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{ background: NAVY, padding: '64px max(24px, calc((100vw - 1200px) / 2))' }}>
        <div className="stats-grid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0 }}>
          {[
            { stat: '$30–50', label: 'average boutique class cost' },
            { stat: '1 in 3', label: 'people quit after one bad experience' },
            { stat: '0 honest', label: 'reviews on most studio apps' },
          ].map(({ stat, label }) => (
            <div className="stat-item" key={label}>
              <div style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 600,
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                color: PLUM,
                letterSpacing: '-0.02em',
                marginBottom: '6px',
              }}>{stat}</div>
              <div style={{ color: LIGHT_BLUE, fontSize: '0.82rem', maxWidth: '180px', lineHeight: 1.5 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: '96px max(24px, calc((100vw - 1200px) / 2))', background: '#f8f9fb' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ color: PLUM, textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '0.72rem', fontWeight: 700, marginBottom: '14px' }}>
            Built for this
          </p>
          <h2 style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 600,
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: NAVY, lineHeight: 1.2, margin: 0,
          }}>
            Everything you wish you had<br />before booking that class.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {[
            {
              num: '01',
              title: 'Instructor Ratings',
              desc: 'Filter by instructor, read real reviews, and see exactly who runs each class — before you spend $40 finding out.',
            },
            {
              num: '02',
              title: 'Friend Feed',
              desc: '"Maya sculpted with Elizabeth." See what your friends are taking, like their workouts, and get inspired.',
            },
            {
              num: '03',
              title: 'Trending Classes',
              desc: "Discover what's popular in your city right now — sorted by vibe, level, and community rating.",
            },
            {
              num: '04',
              title: 'Class Leaderboard',
              desc: 'Track every class you take. Climb the leaderboard with your friends and build your streak.',
            },
          ].map(({ num, title, desc }) => (
            <div className="feature-card" key={num}>
              <div style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2.2rem',
                fontWeight: 600,
                color: `${PLUM}25`,
                lineHeight: 1,
                marginBottom: '20px',
                letterSpacing: '-0.02em',
              }}>{num}</div>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 600,
                fontSize: '1.1rem',
                color: NAVY,
                marginBottom: '10px',
              }}>{title}</h3>
              <p style={{ color: '#6b7280', lineHeight: 1.65, fontSize: '0.88rem' }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '96px max(24px, calc((100vw - 1200px) / 2))', background: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{ color: PLUM, textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '0.72rem', fontWeight: 700, marginBottom: '14px' }}>
            Early users
          </p>
          <h2 style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 600,
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: NAVY, lineHeight: 1.2, margin: 0,
          }}>
            They get it.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {[
            {
              quote: "I wasted so much money trying random Pilates studios. I needed something like this months ago.",
              name: 'Maya R.',
              location: 'New York, NY',
            },
            {
              quote: "The instructor makes or breaks the class. One honest review from a friend would have saved me three bad experiences.",
              name: 'Chloe T.',
              location: 'Chicago, IL',
            },
            {
              quote: "It's like Strava but for fitness classes. I want to see what my friends are actually taking — not just studio marketing.",
              name: 'Ava S.',
              location: 'Los Angeles, CA',
            },
          ].map(({ quote, name, location }) => (
            <div className="testimonial-card" key={name}>
              {/* Quote mark */}
              <div style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '3rem',
                color: `${PLUM}25`,
                lineHeight: 0.8,
                fontWeight: 600,
              }}>"</div>
              <p style={{
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                fontSize: '1rem',
                color: NAVY,
                lineHeight: 1.7,
                flex: 1,
              }}>{quote}</p>
              <div style={{ borderTop: '1px solid #eaeff3', paddingTop: '16px' }}>
                <p style={{ fontWeight: 600, fontSize: '0.85rem', color: NAVY }}>{name}</p>
                <p style={{ fontSize: '0.78rem', color: PLUM, marginTop: '2px' }}>{location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" style={{
        padding: '100px max(24px, calc((100vw - 1200px) / 2))',
        background: `linear-gradient(140deg, ${NAVY} 0%, #1a2f40 100%)`,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative */}
        <div style={{ position: 'absolute', top: '-120px', right: '-120px', width: '500px', height: '500px', borderRadius: '50%', background: `${PLUM}12`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '350px', height: '350px', borderRadius: '50%', background: `${LIGHT_BLUE}08`, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', maxWidth: '520px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '6px', marginBottom: '28px' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '1.6rem', color: LIGHT_BLUE }}>Your</span>
            <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 400, fontSize: '1.9rem', color: '#fff' }}>Move</span>
          </div>

          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 600,
            fontSize: 'clamp(1.9rem, 4.5vw, 3rem)',
            color: '#fff',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}>
            Be first.<br />Move smarter.
          </h2>

          <p style={{ color: LIGHT_BLUE, fontSize: '1rem', marginBottom: '40px', lineHeight: 1.7 }}>
            Your Move is launching soon. Get early access and be the first to know when we come to your city.
          </p>

          <SignupForm dark />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: '#0d1b26',
        padding: '28px max(24px, calc((100vw - 1200px) / 2))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '1rem', color: LIGHT_BLUE }}>Your</span>
          <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: '#fff', fontSize: '1.1rem' }}>Move</span>
        </div>
        <p style={{ color: '#3d5a6e', fontSize: '0.78rem', margin: 0 }}>
          your movement. your money. know before you go.
        </p>
        <p style={{ color: '#2a4255', fontSize: '0.75rem', margin: 0 }}>
          © {new Date().getFullYear()} Your Move
        </p>
      </footer>
    </div>
  )
}
