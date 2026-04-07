import { useState, useEffect } from 'react'
import './App.css'

const NAVY = '#2b455c'
const PLUM = '#a06178'
const LIGHT_BLUE = '#b8c7d4'

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
        background: dark ? 'rgba(255,255,255,0.07)' : `${PLUM}0d`,
        border: `1px solid ${dark ? 'rgba(255,255,255,0.12)' : `${PLUM}30`}`,
        borderRadius: '14px',
        padding: '18px 24px',
        textAlign: 'center',
      }}>
        <p style={{ fontWeight: 600, color: dark ? '#fff' : NAVY, fontSize: '0.95rem' }}>
          ✅ You're on the list.
        </p>
        <p style={{ color: dark ? LIGHT_BLUE : '#6b7280', marginTop: '4px', fontSize: '0.82rem' }}>
          We'll reach out when Your Move launches near you.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <div className="email-wrap" style={dark ? {
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.14)',
        boxShadow: 'none',
      } : {}}>
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
      <p style={{ color: dark ? 'rgba(184,199,212,0.55)' : '#b0bec5', fontSize: '0.75rem', marginTop: '10px', textAlign: 'center', letterSpacing: '0.01em' }}>
        Free · No spam · Early access
      </p>
    </form>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const PAD = '0 max(32px, calc((100vw - 1100px) / 2))'

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: NAVY, overflowX: 'hidden', background: '#fff' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.94)' : '#fff',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: `1px solid ${scrolled ? '#eaeff3' : '#eaeff3'}`,
        height: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: PAD,
        transition: 'box-shadow 0.3s',
        boxShadow: scrolled ? '0 1px 16px rgba(43,69,92,0.06)' : 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '1.35rem', color: LIGHT_BLUE }}>Your</span>
          <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 400, fontSize: '1.55rem', color: NAVY }}>Move</span>
        </div>
        <a href="#cta" style={{
          background: NAVY, color: '#fff', padding: '8px 20px',
          borderRadius: '100px', fontSize: '0.8rem', fontWeight: 500,
          textDecoration: 'none', letterSpacing: '0.02em',
          transition: 'background 0.2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.background = PLUM)}
          onMouseLeave={e => (e.currentTarget.style.background = NAVY)}
        >
          Get Early Access
        </a>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px max(32px, calc((100vw - 1100px) / 2)) 80px',
        background: '#fff',
        gap: '64px',
      }}>
        {/* Left: text */}
        <div style={{ flex: '1 1 0', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div className="fade-up fade-up-1">
            <span className="badge">
              <span className="badge-dot" />
              Coming Soon
            </span>
          </div>

          {/* Text logo */}
          <div className="fade-up fade-up-2" style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', color: LIGHT_BLUE, letterSpacing: '0.01em' }}>Your</span>
            <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(2.6rem, 6vw, 4.2rem)', color: NAVY, letterSpacing: '-0.02em' }}>Move</span>
          </div>

          <p className="fade-up fade-up-3" style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            color: '#5a7a8f', lineHeight: 1.8, margin: 0, maxWidth: '420px',
          }}>
            Discover the best fitness classes and instructors through real reviews, ratings, and workout insights — before you book.
          </p>

          <div className="fade-up fade-up-4" style={{ maxWidth: '420px' }}>
            <SignupForm />
          </div>

          <div className="fade-up fade-up-5" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['Instructor Reviews', 'Class Leaderboard', 'Friend Feed', 'Trending Studios'].map(t => (
              <span key={t} style={{
                fontSize: '0.72rem', color: '#7a93a6', fontWeight: 500,
                background: '#f4f7f9', borderRadius: '100px',
                padding: '5px 12px', letterSpacing: '0.01em',
              }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Right: image */}
        <div className="fade-up fade-up-3 hero-img-wrap" style={{ flex: '0 0 auto', width: 'min(440px, 42vw)' }}>
          <div style={{
            borderRadius: '24px',
            overflow: 'hidden',
            aspectRatio: '3/4',
            boxShadow: '0 24px 80px rgba(43,69,92,0.16), 0 4px 16px rgba(43,69,92,0.08)',
          }}>
            <img
              src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=900&q=85"
              alt="Pilates class"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ── WHAT IS IT ── */}
      <section style={{ padding: '96px max(32px, calc((100vw - 1100px) / 2))', background: '#f8f9fb', borderTop: '1px solid #eaeff3' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '64px', alignItems: 'start' }}>

          {/* Left: statement */}
          <div>
            <p style={{ color: PLUM, textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '0.7rem', fontWeight: 700, marginBottom: '20px' }}>
              What is Your Move?
            </p>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 600,
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              color: NAVY,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              margin: '0 0 24px',
            }}>
              The app the fitness<br />world is missing.
            </h2>
            <div style={{ width: 40, height: 3, background: PLUM, borderRadius: 2 }} />
          </div>

          {/* Right: explanation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '8px' }}>
            <p style={{ fontSize: '1rem', color: '#4b6175', lineHeight: 1.8, margin: 0 }}>
              Boutique fitness is expensive — and wildly inconsistent. A $45 spin class can be transformative or a complete waste. The instructor changes everything. But until now, you had no way to know before you showed up.
            </p>
            <p style={{ fontSize: '1rem', color: '#4b6175', lineHeight: 1.8, margin: 0 }}>
              <strong style={{ color: NAVY, fontWeight: 600 }}>Your Move</strong> is a social fitness discovery app. Search any studio, class, or instructor and read honest reviews from real people. See what your friends are taking, discover trending classes in your city, and track every workout you complete.
            </p>
            <p style={{ fontSize: '1rem', color: '#4b6175', lineHeight: 1.8, margin: 0 }}>
              Think <span style={{ color: NAVY, fontWeight: 500 }}>Beli for fitness</span> — with a social feed like Strava, real ratings like Yelp, and a leaderboard to keep you moving.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: NAVY, padding: '80px max(32px, calc((100vw - 1100px) / 2))' }}>
        <p style={{ color: `${LIGHT_BLUE}70`, textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '0.68rem', fontWeight: 600, textAlign: 'center', marginBottom: '48px' }}>
          The problem with boutique fitness
        </p>
        <div className="stats-grid" style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'center' }}>
          {[
            { stat: '$30–50', label: 'per boutique class', sub: 'with no guarantee it\'s worth it' },
            { stat: '1 in 3', label: 'quit after one bad experience', sub: 'the wrong instructor ruins it' },
            { stat: '0', label: 'honest reviews on studio apps', sub: 'they only show what they want you to see' },
          ].map(({ stat, label, sub }) => (
            <div className="stat-item" key={label} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{
                fontFamily: 'Playfair Display, serif', fontWeight: 600,
                fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', color: PLUM,
                letterSpacing: '-0.03em', lineHeight: 1,
              }}>{stat}</div>
              <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 500 }}>{label}</div>
              <div style={{ color: `${LIGHT_BLUE}80`, fontSize: '0.75rem', lineHeight: 1.5, maxWidth: '180px' }}>{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ padding: '100px max(32px, calc((100vw - 1100px) / 2))', background: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '56px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p style={{ color: PLUM, textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '0.68rem', fontWeight: 700, marginBottom: '12px' }}>Features</p>
            <h2 style={{
              fontFamily: 'Playfair Display, serif', fontWeight: 600,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: NAVY, lineHeight: 1.15, margin: 0,
            }}>
              Everything you need.<br />Nothing you don't.
            </h2>
          </div>
          <p style={{ color: '#7a93a6', fontSize: '0.875rem', maxWidth: '260px', lineHeight: 1.65, margin: 0 }}>
            Built around how people actually discover and choose fitness classes.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          {[
            {
              title: 'Instructor Ratings',
              desc: 'Read honest reviews by instructor — not just the studio. Know exactly who\'s teaching before you show up.',
            },
            {
              title: 'Friend Feed',
              desc: '"Maya sculpted with Elizabeth." See what your friends are taking, like their workouts, and stay in sync.',
            },
            {
              title: 'Trending Classes',
              desc: "See what's gaining momentum in your city this week — sorted by real ratings and community activity.",
            },
            {
              title: 'Class Leaderboard',
              desc: 'Every class logged counts. Build your streak, climb the board with friends, and stay accountable.',
            },
          ].map(({ title, desc }, i) => (
            <div key={title} style={{
              background: i % 2 === 0 ? '#f8f9fb' : '#fff',
              border: '1px solid #eaeff3',
              borderRadius: '18px',
              padding: '36px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = LIGHT_BLUE; el.style.boxShadow = '0 8px 32px rgba(43,69,92,0.08)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = '#eaeff3'; el.style.boxShadow = 'none' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.8rem', fontWeight: 600, color: PLUM, letterSpacing: '0.06em' }}>0{i + 1}</span>
                <div style={{ width: 28, height: 1, background: `${PLUM}40` }} />
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: '1.1rem', color: NAVY, margin: 0 }}>{title}</h3>
              <p style={{ color: '#6b7280', lineHeight: 1.7, fontSize: '0.875rem', margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '100px max(32px, calc((100vw - 1100px) / 2))', background: '#f8f9fb', borderTop: '1px solid #eaeff3', borderBottom: '1px solid #eaeff3' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '52px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <p style={{ color: PLUM, textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '0.68rem', fontWeight: 700, marginBottom: '10px' }}>Early Users</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: NAVY, lineHeight: 1.15, margin: 0 }}>
              They get it.
            </h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '16px' }}>
          {[
            { quote: "I wasted so much money trying random Pilates studios. I needed something like this months ago.", name: 'Maya R.', location: 'New York, NY', initials: 'MR' },
            { quote: "The instructor makes or breaks the class. One honest review from a friend would have saved me three bad experiences.", name: 'Chloe T.', location: 'Chicago, IL', initials: 'CT' },
            { quote: "It's like Strava but for fitness classes. I want to see what my friends are actually taking — not studio marketing.", name: 'Ava S.', location: 'Los Angeles, CA', initials: 'AS' },
          ].map(({ quote, name, location, initials }) => (
            <div key={name} style={{
              background: '#fff',
              border: '1px solid #eaeff3',
              borderRadius: '18px',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}>
              <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '0.975rem', color: NAVY, lineHeight: 1.8, margin: 0, flex: 1 }}>
                "{quote}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid #f0f4f7' }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${LIGHT_BLUE}60, ${PLUM}60)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.68rem', fontWeight: 700, color: NAVY, flexShrink: 0,
                }}>{initials}</div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '0.82rem', color: NAVY, margin: 0 }}>{name}</p>
                  <p style={{ fontSize: '0.73rem', color: PLUM, marginTop: '2px' }}>{location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta" style={{
        padding: '110px max(32px, calc((100vw - 1100px) / 2))',
        background: NAVY,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle radial tint */}
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${PLUM}18 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '6px', marginBottom: '28px' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '1.6rem', color: LIGHT_BLUE }}>Your</span>
            <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 400, fontSize: '1.85rem', color: '#fff' }}>Move</span>
          </div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 600,
            fontSize: 'clamp(2rem, 4.5vw, 3rem)', color: '#fff',
            lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: '16px',
          }}>
            Be first.<br />Move smarter.
          </h2>
          <p style={{ color: LIGHT_BLUE, fontSize: '0.95rem', marginBottom: '40px', lineHeight: 1.8, opacity: 0.8, maxWidth: '380px', margin: '0 auto 40px' }}>
            Launching soon in your city. Join the waitlist for early access.
          </p>
          <SignupForm dark />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#0a161f', padding: '32px max(32px, calc((100vw - 1100px) / 2))' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '1rem', color: LIGHT_BLUE }}>Your</span>
            <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: '#fff', fontSize: '1.15rem' }}>Move</span>
          </div>
          <p style={{ color: '#4a6678', fontSize: '0.75rem', margin: 0, letterSpacing: '0.01em' }}>
            your movement. your money. know before you go.
          </p>
          <p style={{ color: '#283e4e', fontSize: '0.73rem', margin: 0 }}>© {new Date().getFullYear()} Your Move</p>
        </div>
      </footer>
    </div>
  )
}
