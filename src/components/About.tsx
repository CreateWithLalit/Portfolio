const About = () => {
  return (
    <section className="min-h-screen flex items-center px-6 py-20 bg-black">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-12">

        {/* Left - SVG Illustration */}
        <div className="flex-1 flex items-center justify-center">
          <svg viewBox="0 0 400 400" className="w-full max-w-sm" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="aboutGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
              </radialGradient>
              <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e1e30"/>
                <stop offset="100%" stopColor="#2d2d44"/>
              </linearGradient>
            </defs>

            {/* Background glow */}
            <circle cx="200" cy="200" r="180" fill="url(#aboutGlow)"/>

            {/* Orbit ring */}
            <ellipse cx="200" cy="200" r="150" ry="150" fill="none" stroke="#7C3AED" strokeWidth="1" strokeDasharray="6 4" opacity="0.3">
              <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="20s" repeatCount="indefinite"/>
            </ellipse>

            {/* Avatar circle */}
            <circle cx="200" cy="175" r="80" fill="url(#cardGrad)" stroke="#7C3AED" strokeWidth="2"/>

            {/* Face */}
            <circle cx="200" cy="155" r="40" fill="#2d2d44"/>
            {/* Hair */}
            <ellipse cx="200" cy="130" rx="40" ry="15" fill="#1a1a2e"/>
            <rect x="160" y="120" width="80" height="20" fill="#1a1a2e"/>
            {/* Eyes */}
            <circle cx="188" cy="152" r="5" fill="#7C3AED"/>
            <circle cx="212" cy="152" r="5" fill="#7C3AED"/>
            <circle cx="190" cy="150" r="2" fill="white"/>
            <circle cx="214" cy="150" r="2" fill="white"/>
            {/* Smile */}
            <path d="M190 165 Q200 173 210 165" stroke="#a855f7" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            {/* Body */}
            <rect x="170" y="193" width="60" height="50" rx="10" fill="#7C3AED" opacity="0.8"/>
            {/* Laptop in hands */}
            <rect x="155" y="230" width="90" height="55" rx="6" fill="#1e1e30"/>
            <rect x="160" y="235" width="80" height="42" rx="4" fill="#0a0a1a"/>
            {/* Code on laptop screen */}
            <rect x="165" y="242" width="40" height="4" rx="2" fill="#7C3AED" opacity="0.9"/>
            <rect x="165" y="252" width="60" height="4" rx="2" fill="#a855f7" opacity="0.7"/>
            <rect x="170" y="262" width="45" height="4" rx="2" fill="#6366f1" opacity="0.8"/>
            <rect x="165" y="272" width="35" height="4" rx="2" fill="#8b5cf6" opacity="0.6"/>

            {/* Floating skill badges */}
            <rect x="20" y="80" width="70" height="24" rx="12" fill="#7C3AED" opacity="0.85"/>
            <text x="55" y="97" fill="white" fontSize="9" textAnchor="middle" fontFamily="monospace">React</text>

            <rect x="310" y="60" width="70" height="24" rx="12" fill="#6366f1" opacity="0.85"/>
            <text x="345" y="77" fill="white" fontSize="9" textAnchor="middle" fontFamily="monospace">TypeScript</text>

            <rect x="20" y="290" width="70" height="24" rx="12" fill="#8b5cf6" opacity="0.85"/>
            <text x="55" y="307" fill="white" fontSize="9" textAnchor="middle" fontFamily="monospace">Tailwind</text>

            <rect x="310" y="300" width="70" height="24" rx="12" fill="#7C3AED" opacity="0.85"/>
            <text x="345" y="317" fill="white" fontSize="9" textAnchor="middle" fontFamily="monospace">Supabase</text>

            {/* Orbiting dot */}
            <circle r="6" fill="#a855f7">
              <animateMotion dur="6s" repeatCount="indefinite">
                <mpath href="#orbitPath"/>
              </animateMotion>
            </circle>
            <path id="orbitPath" d="M200,50 A150,150 0 1,1 199,50" fill="none"/>

            {/* Stars */}
            {[[50,180],[360,180],[200,20],[100,350],[320,340]].map(([x,y],i) => (
              <circle key={i} cx={x} cy={y} r="2" fill="#7C3AED" opacity="0.6">
                <animate attributeName="opacity" values="0.6;0.1;0.6" dur={`${1.5+i*0.4}s`} repeatCount="indefinite"/>
              </circle>
            ))}
          </svg>
        </div>

        {/* Right - Text */}
        <div className="flex-1 text-left">
          <p className="text-purple-500 text-xs tracking-widest uppercase mb-4"
            style={{ fontFamily: "'Press Start 2P', cursive" }}>
            About Me
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6"
            style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: '1.8' }}>
            Who I <span className="text-purple-500">Am</span>
          </h2>
          <p className="text-gray-400 text-xs leading-8 mb-6"
            style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: '2.5' }}>
            I'm Lalit, a passionate BCA student in my 4th semester at IGNOU, Noida. I love building responsive and user-friendly web interfaces that solve real problems.
          </p>
          <p className="text-gray-400 text-xs leading-8 mb-8"
            style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: '2.5' }}>
            Currently seeking internship opportunities where I can contribute, grow and level up my skills in frontend development.
          </p>

          {/* Info cards */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-purple-400 text-xs mb-1" style={{ fontFamily: "'Press Start 2P', cursive" }}>📍 Location</p>
              <p className="text-white text-xs mt-2" style={{ fontFamily: "'Press Start 2P', cursive" }}>Noida, UP</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-purple-400 text-xs mb-1" style={{ fontFamily: "'Press Start 2P', cursive" }}>🎓 Degree</p>
              <p className="text-white text-xs mt-2" style={{ fontFamily: "'Press Start 2P', cursive" }}>BCA - IGNOU</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-purple-400 text-xs mb-1" style={{ fontFamily: "'Press Start 2P', cursive" }}>💼 Status</p>
              <p className="text-purple-400 text-xs mt-2" style={{ fontFamily: "'Press Start 2P', cursive" }}>Open to Work</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-purple-400 text-xs mb-1" style={{ fontFamily: "'Press Start 2P', cursive" }}>⚡ Focus</p>
              <p className="text-white text-xs mt-2" style={{ fontFamily: "'Press Start 2P', cursive" }}>Frontend Dev</p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            <a href="https://github.com/lalit2004-glich" target="_blank"
              className="border border-purple-500 hover:bg-purple-500/20 text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 text-xs"
              style={{ fontFamily: "'Press Start 2P', cursive" }}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/lalit-206274374" target="_blank"
              className="border border-purple-500 hover:bg-purple-500/20 text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 text-xs"
              style={{ fontFamily: "'Press Start 2P', cursive" }}>
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About