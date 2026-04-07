import { useState } from 'react'

const NAVY = '#2b455c'
const PLUM = '#a06178'
const LIGHT_BLUE = '#b8c7d4'
const LIGHT_GREY = '#e5e7eb'

function NavBar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${LIGHT_GREY}`,
        padding: '0 2rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '1.6rem', color: LIGHT_BLUE }}>Your</span>
        <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 400, fontSize: '1.9rem', color: NAVY }}>Move</span>
      </div>
      <a
        href="#cta"
        style={{
          background: NAVY,
          color: '#fff',
          padding: '10px 24px',
          borderRadius: '100px',
          fontSize: '0.875rem',
          fontWeight: 500,
          textDecoration: 'none',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = PLUM)}
        onMouseLeave={e => (e.currentTarget.style.background = NAVY)}
      >
        Get Early Access
      </a>
    </nav>
  )
}

function SignupForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{
        background: `${PLUM}15`,
        border: `1.5px solid ${PLUM}40`,
        borderRadius: '16px',
        padding: '24px 32px',
        textAlign: 'center',
        maxWidth: '480px',
        margin: '0 auto',
      }}>
        <p style={{ fontWeight: 600, color: NAVY, fontSize: '1.1rem' }}>✅ You're on the list!</p>
        <p style={{ color: '#6b7280', marginTop: '6px', fontSize: '0.9rem' }}>We'll let you know the moment Your Move launches.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '480px', margin: '0 auto', width: '100%' }}>
      <div style={{
        display: 'flex',
        gap: '10px',
        background: '#fff',
        border: `1.5px solid ${LIGHT_GREY}`,
        borderRadius: '100px',
        padding: '6px 6px 6px 20px',
        boxShadow: '0 4px 24px rgba(43,69,92,0.1)',
      }}>
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            fontSize: '0.95rem',
            color: NAVY,
            background: 'transparent',
            fontFamily: 'Inter, sans-serif',
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            background: PLUM,
            color: '#fff',
            border: 'none',
            borderRadius: '100px',
            padding: '12px 24px',
            fontSize: '0.9rem',
            fontWeight: 600,
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
            fontFamily: 'Inter, sans-serif',
            whiteSpace: 'nowrap',
          }}
        >
          {loading ? 'Joining...' : 'Join Waitlist'}
        </button>
      </div>
      <p style={{ textAlign: 'center', color: '#9ca3af', fontSize: '0.8rem', marginTop: '12px' }}>
        No spam, ever. Be first to know when we launch.
      </p>
    </form>
  )
}

const features = [
  {
    icon: '⭐',
    title: 'Instructor Ratings & Reviews',
    desc: "Real, honest reviews from people who've actually taken the class — so you know exactly what you're signing up for.",
  },
  {
    icon: '🏆',
    title: 'Class Leaderboard',
    desc: "See who's crushing their fitness goals. Track classes taken and climb the ranks with your friends.",
  },
  {
    icon: '🔥',
    title: 'Trending Classes',
    desc: "Discover what's hot in your city right now — trending studios, instructors, and workout styles.",
  },
  {
    icon: '👯',
    title: 'Workout Feed',
    desc: '"Katherine sculpted with Elizabeth." See what your friends are taking and get inspired.',
  },
]

const painPoints = [
  { stat: '$30–50', label: 'avg. boutique class cost' },
  { stat: '68%', label: 'of people quit after a bad first class' },
  { stat: '0', label: 'honest reviews on studio apps' },
]

const testimonials = [
  {
    quote: 'I wasted so much money trying random Pilates studios. I needed something like this months ago.',
    name: 'Maya R.',
    detail: 'NYC, post-grad',
  },
  {
    quote: 'The instructors vary SO much. One good review from a friend would have saved me three bad classes.',
    name: 'Chloe T.',
    detail: 'Chicago, college senior',
  },
  {
    quote: 'I love seeing what my friends are taking — it\'s like Strava but for fitness classes.',
    name: 'Ava S.',
    detail: 'LA, 24',
  },
]

export default function App() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', overflowX: 'hidden', color: NAVY }}>
      <NavBar />

      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '100px 24px 80px',
        background: 'linear-gradient(160deg, #ffffff 0%, #f0f4f7 60%, #e8ecf0 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: '400px', height: '400px', borderRadius: '50%', background: `${PLUM}08`, filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '300px', height: '300px', borderRadius: '50%', background: `${LIGHT_BLUE}30`, filter: 'blur(60px)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center' }}>
            <img src="/logo.png" alt="Your Move" style={{ height: '90px', objectFit: 'contain' }} />
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 600,
            fontSize: 'clamp(2.4rem, 6vw, 4rem)',
            color: NAVY,
            lineHeight: 1.15,
            marginBottom: '20px',
            letterSpacing: '-0.02em',
          }}>
            Know before you go.
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: '#4b6175',
            lineHeight: 1.7,
            maxWidth: '540px',
            margin: '0 auto 48px',
          }}>
            Discover the best fitness classes and instructors through real reviews, ratings, and workout insights — before you spend $40 finding out.
          </p>
          <SignupForm />
        </div>
      </section>

      {/* PAIN POINTS */}
      <section style={{ background: NAVY, padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: LIGHT_BLUE, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.78rem', fontWeight: 600, marginBottom: '16px' }}>The problem</p>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 600,
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            color: '#fff',
            marginBottom: '60px',
            lineHeight: 1.3,
          }}>
            You're spending real money on classes you know nothing about.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
            {painPoints.map(({ stat, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: 600, color: PLUM, marginBottom: '8px' }}>{stat}</div>
                <div style={{ color: LIGHT_BLUE, fontSize: '0.9rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: '100px 24px', background: '#f8f9fb' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ color: PLUM, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.78rem', fontWeight: 600, marginBottom: '16px' }}>What you get</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: NAVY, lineHeight: 1.25 }}>
              Your fitness life, finally organized.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {features.map(({ icon, title, desc }) => (
              <div
                key={title}
                style={{ background: '#fff', borderRadius: '20px', padding: '32px 28px', boxShadow: '0 2px 20px rgba(43,69,92,0.07)', border: `1px solid ${LIGHT_GREY}`, display: 'flex', flexDirection: 'column', gap: '14px', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 8px 32px rgba(43,69,92,0.12)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 2px 20px rgba(43,69,92,0.07)' }}
              >
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: `${PLUM}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem' }}>{icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: '1.15rem', color: NAVY }}>{title}</h3>
                <p style={{ color: '#6b7280', lineHeight: 1.6, fontSize: '0.9rem' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '100px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: PLUM, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.78rem', fontWeight: 600, marginBottom: '16px' }}>How it works</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: NAVY, marginBottom: '64px', lineHeight: 1.25 }}>
            Three steps to your perfect class.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px' }}>
            {[
              { step: '01', title: 'Search', desc: 'Browse classes, instructors, and studios in your city.' },
              { step: '02', title: 'Read Real Reviews', desc: 'See honest ratings from people who have actually taken the class.' },
              { step: '03', title: 'Book with Confidence', desc: 'Show up knowing exactly what to expect. No more wasted money.' },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ textAlign: 'center', padding: '0 16px' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', fontWeight: 600, color: `${PLUM}30`, lineHeight: 1, marginBottom: '16px' }}>{step}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: '1.2rem', color: NAVY, marginBottom: '12px' }}>{title}</h3>
                <p style={{ color: '#6b7280', lineHeight: 1.6, fontSize: '0.9rem' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '100px 24px', background: '#f8f9fb' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ color: PLUM, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.78rem', fontWeight: 600, marginBottom: '16px' }}>From real users</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: NAVY, lineHeight: 1.25 }}>They get it.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {testimonials.map(({ quote, name, detail }) => (
              <div key={name} style={{ background: '#fff', borderRadius: '20px', padding: '32px 28px', boxShadow: '0 2px 20px rgba(43,69,92,0.07)', border: `1px solid ${LIGHT_GREY}`, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.05rem', color: NAVY, lineHeight: 1.65 }}>"{quote}"</p>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem', color: NAVY }}>{name}</p>
                  <p style={{ fontSize: '0.8rem', color: PLUM, marginTop: '2px' }}>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta" style={{
        padding: '120px 24px',
        background: `linear-gradient(135deg, ${NAVY} 0%, #1e3347 100%)`,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: `${PLUM}15`, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '6px' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '1.8rem', color: LIGHT_BLUE }}>Your</span>
            <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 400, fontSize: '2.1rem', color: '#fff' }}>Move</span>
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#fff', marginBottom: '16px', lineHeight: 1.25 }}>
            Be the first to know.
          </h2>
          <p style={{ color: LIGHT_BLUE, fontSize: '1.05rem', marginBottom: '48px', lineHeight: 1.6 }}>
            Your Move is coming soon. Join the waitlist and get early access when we launch in your city.
          </p>
          <SignupForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0f1e2a', padding: '32px 24px', textAlign: 'center', color: '#6b8aa0', fontSize: '0.85rem' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '6px', marginBottom: '12px' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, color: LIGHT_BLUE }}>Your</span>
          <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: '#fff' }}>Move</span>
        </div>
        <p>your movement. your money. know before you go.</p>
        <p style={{ marginTop: '16px', color: '#3d5a6e', fontSize: '0.78rem' }}>© {new Date().getFullYear()} Your Move. All rights reserved.</p>
      </footer>
    </div>
  )
}
