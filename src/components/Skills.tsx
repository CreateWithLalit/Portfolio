const skills = [
  { name: 'HTML & CSS', level: 90, color: '#e34c26' },
  { name: 'JavaScript', level: 80, color: '#f7df1e' },
  { name: 'React', level: 75, color: '#61dafb' },
  { name: 'TypeScript', level: 70, color: '#3178c6' },
  { name: 'SQL / MySQL', level: 70, color: '#7C3AED' },
  { name: 'Git & GitHub', level: 80, color: '#a855f7' },
]

const Skills = () => {
  return (
    <section className="min-h-screen flex items-center px-6 py-20 bg-black">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-12">

        {/* Left - Text & Skills */}
        <div className="flex-1 text-left">
          <p className="text-purple-500 text-xs tracking-widest uppercase mb-4"
            style={{ fontFamily: "'Press Start 2P', cursive" }}>
            My Skills
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8"
            style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: '1.8' }}>
            What I <span className="text-purple-500">Know</span>
          </h2>

          <div className="flex flex-col gap-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-white text-xs" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                    {skill.name}
                  </span>
                  <span className="text-purple-400 text-xs" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <div
                    className="h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%`, backgroundColor: skill.color, boxShadow: `0 0 10px ${skill.color}` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - SVG Illustration */}
        <div className="flex-1 flex items-center justify-center">
          <svg viewBox="0 0 400 400" className="w-full max-w-sm" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="skillGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
              </radialGradient>
            </defs>

            {/* Background glow */}
            <circle cx="200" cy="200" r="180" fill="url(#skillGlow)"/>

            {/* Central brain/chip */}
            <rect x="140" y="140" width="120" height="120" rx="16" fill="#1e1e30" stroke="#7C3AED" strokeWidth="2"/>
            <rect x="155" y="155" width="90" height="90" rx="10" fill="#0a0a1a"/>

            {/* Chip pins left */}
            {[160,180,200,220,240].map((y,i) => (
              <rect key={i} x="120" y={y-4} width="20" height="8" rx="2" fill="#7C3AED" opacity="0.8"/>
            ))}
            {/* Chip pins right */}
            {[160,180,200,220,240].map((y,i) => (
              <rect key={i} x="260" y={y-4} width="20" height="8" rx="2" fill="#7C3AED" opacity="0.8"/>
            ))}
            {/* Chip pins top */}
            {[160,180,200,220,240].map((x,i) => (
              <rect key={i} x={x-4} y="120" width="8" height="20" rx="2" fill="#a855f7" opacity="0.8"/>
            ))}
            {/* Chip pins bottom */}
            {[160,180,200,220,240].map((x,i) => (
              <rect key={i} x={x-4} y="260" width="8" height="20" rx="2" fill="#a855f7" opacity="0.8"/>
            ))}

            {/* Circuit lines */}
            <line x1="80" y1="160" x2="120" y2="160" stroke="#7C3AED" strokeWidth="1.5" opacity="0.5"/>
            <line x1="80" y1="160" x2="80" y2="100" stroke="#7C3AED" strokeWidth="1.5" opacity="0.5"/>
            <circle cx="80" cy="100" r="5" fill="#7C3AED" opacity="0.8">
              <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite"/>
            </circle>

            <line x1="320" y1="200" x2="280" y2="200" stroke="#a855f7" strokeWidth="1.5" opacity="0.5"/>
            <line x1="320" y1="200" x2="320" y2="300" stroke="#a855f7" strokeWidth="1.5" opacity="0.5"/>
            <circle cx="320" cy="300" r="5" fill="#a855f7" opacity="0.8">
              <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.5s" repeatCount="indefinite"/>
            </circle>

            <line x1="200" y1="80" x2="200" y2="120" stroke="#6366f1" strokeWidth="1.5" opacity="0.5"/>
            <line x1="200" y1="80" x2="280" y2="80" stroke="#6366f1" strokeWidth="1.5" opacity="0.5"/>
            <circle cx="280" cy="80" r="5" fill="#6366f1" opacity="0.8">
              <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.5s" repeatCount="indefinite"/>
            </circle>

            <line x1="180" y1="320" x2="180" y2="280" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.5"/>
            <line x1="180" y1="320" x2="100" y2="320" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.5"/>
            <circle cx="100" cy="320" r="5" fill="#8b5cf6" opacity="0.8">
              <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite"/>
            </circle>

            {/* Center text */}
            <text x="200" y="193" fill="#7C3AED" fontSize="11" textAnchor="middle" fontFamily="monospace" fontWeight="bold">&lt;SKILLS/&gt;</text>
            
            {/* Skill labels floating */}
            <rect x="20" y="50" width="60" height="20" rx="10" fill="#7C3AED" opacity="0.7"/>
            <text x="50" y="64" fill="white" fontSize="8" textAnchor="middle" fontFamily="monospace">HTML</text>

            <rect x="320" y="50" width="60" height="20" rx="10" fill="#6366f1" opacity="0.7"/>
            <text x="350" y="64" fill="white" fontSize="8" textAnchor="middle" fontFamily="monospace">CSS</text>

            <rect x="20" y="330" width="60" height="20" rx="10" fill="#8b5cf6" opacity="0.7"/>
            <text x="50" y="344" fill="white" fontSize="8" textAnchor="middle" fontFamily="monospace">React</text>

            <rect x="320" y="330" width="60" height="20" rx="10" fill="#a855f7" opacity="0.7"/>
            <text x="350" y="344" fill="white" fontSize="8" textAnchor="middle" fontFamily="monospace">SQL</text>

            {/* Orbiting dot */}
            <circle r="5" fill="#a855f7" opacity="0.9">
              <animateMotion dur="5s" repeatCount="indefinite">
                <mpath href="#skillOrbit"/>
              </animateMotion>
            </circle>
            <path id="skillOrbit" d="M200,50 A150,150 0 1,1 199,50" fill="none"/>

            {/* Stars */}
            {[[40,200],[360,150],[200,370],[350,250],[60,300]].map(([x,y],i) => (
              <circle key={i} cx={x} cy={y} r="2" fill="#7C3AED" opacity="0.6">
                <animate attributeName="opacity" values="0.6;0.1;0.6" dur={`${1.5+i*0.4}s`} repeatCount="indefinite"/>
              </circle>
            ))}
          </svg>
        </div>

      </div>
    </section>
  )
}

export default Skills