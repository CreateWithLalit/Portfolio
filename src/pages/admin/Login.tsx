import { useState } from 'react'
import { supabase } from '../../supabase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async () => {
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError('Invalid email or password!')
      setLoading(false)
    } else {
      navigate('/admin/dashboard')
    }
  }

  return (
    <section className="min-h-screen flex items-center px-6 pt-20 bg-black">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-12">

        {/* Left - Login Form */}
        <div className="flex-1 max-w-md">
          <p className="text-purple-500 text-xs tracking-widest uppercase mb-4"
            style={{ fontFamily: "'Press Start 2P', cursive" }}>
            Admin Panel
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2"
            style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: '1.8' }}>
            Welcome <span className="text-purple-500">Back</span>
          </h2>
          <p className="text-gray-500 text-xs mb-8"
            style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: '2' }}>
            Only Lalit can enter here
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-5">
            <div>
              <label className="text-purple-400 text-xs mb-2 block"
                style={{ fontFamily: "'Press Start 2P', cursive" }}>
                Email
              </label>
              <input
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-purple-500 transition-colors text-xs"
                placeholder="your@email.com"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ fontFamily: "'Press Start 2P', cursive" }}
              />
            </div>
            <div>
              <label className="text-purple-400 text-xs mb-2 block"
                style={{ fontFamily: "'Press Start 2P', cursive" }}>
                Password
              </label>
              <input
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-purple-500 transition-colors text-xs"
                placeholder="••••••••"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleLogin()}
                style={{ fontFamily: "'Press Start 2P', cursive" }}
              />
            </div>
            {error && (
              <p className="text-red-400 text-xs text-center"
                style={{ fontFamily: "'Press Start 2P', cursive" }}>
                ❌ {error}
              </p>
            )}
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105 text-xs"
              style={{ fontFamily: "'Press Start 2P', cursive" }}>
              {loading ? 'Logging in...' : '🔐 Login'}
            </button>
          </div>
        </div>

        {/* Right - SVG Illustration */}
        <div className="flex-1 flex items-center justify-center">
          <svg viewBox="0 0 400 400" className="w-full max-w-sm" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="adminGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
              </radialGradient>
            </defs>

            {/* Background glow */}
            <circle cx="200" cy="200" r="180" fill="url(#adminGlow)"/>

            {/* Outer shield */}
            <path d="M200 60 L300 100 L300 220 Q300 300 200 340 Q100 300 100 220 L100 100 Z"
              fill="#1e1e30" stroke="#7C3AED" strokeWidth="2"/>
            <path d="M200 80 L285 115 L285 220 Q285 288 200 320 Q115 288 115 220 L115 115 Z"
              fill="#0a0a1a" stroke="#a855f7" strokeWidth="1" opacity="0.6"/>

            {/* Lock body */}
            <rect x="165" y="210" width="70" height="60" rx="10" fill="#7C3AED"/>
            <rect x="175" y="220" width="50" height="40" rx="6" fill="#5B21B6"/>

            {/* Lock keyhole */}
            <circle cx="200" cy="235" r="10" fill="#1e1e30"/>
            <rect x="196" y="240" width="8" height="14" rx="3" fill="#1e1e30"/>

            {/* Lock shackle */}
            <path d="M175 210 L175 185 Q175 155 200 155 Q225 155 225 185 L225 210"
              fill="none" stroke="#7C3AED" strokeWidth="12" strokeLinecap="round"/>
            <path d="M175 210 L175 185 Q175 158 200 158 Q222 158 222 185 L222 210"
              fill="none" stroke="#a855f7" strokeWidth="6" strokeLinecap="round"/>

            {/* Floating stars/particles */}
            {[[80,100],[330,120],[60,280],[350,280],[200,370],[120,350],[290,350]].map(([x,y],i) => (
              <circle key={i} cx={x} cy={y} r="2.5" fill="#7C3AED" opacity="0.7">
                <animate attributeName="opacity" values="0.7;0.1;0.7" dur={`${1.5+i*0.3}s`} repeatCount="indefinite"/>
                <animate attributeName="r" values="2.5;4;2.5" dur={`${2+i*0.3}s`} repeatCount="indefinite"/>
              </circle>
            ))}

            {/* Orbiting ring */}
            <ellipse cx="200" cy="200" r="155" ry="155" fill="none" stroke="#7C3AED"
              strokeWidth="1" strokeDasharray="4 6" opacity="0.25">
              <animateTransform attributeName="transform" type="rotate"
                from="0 200 200" to="360 200 200" dur="15s" repeatCount="indefinite"/>
            </ellipse>

            {/* Orbiting dot */}
            <circle r="5" fill="#a855f7" opacity="0.9">
              <animateMotion dur="5s" repeatCount="indefinite">
                <mpath href="#adminOrbit"/>
              </animateMotion>
            </circle>
            <path id="adminOrbit" d="M200,45 A155,155 0 1,1 199,45" fill="none"/>

            {/* Access granted text at bottom */}
            <rect x="130" y="355" width="140" height="24" rx="12" fill="#7C3AED" opacity="0.2" stroke="#7C3AED" strokeWidth="1"/>
            <text x="200" y="372" fill="#a855f7" fontSize="9" textAnchor="middle" fontFamily="monospace">AUTHORIZED ACCESS ONLY</text>
          </svg>
        </div>

      </div>
    </section>
  )
}

export default Login