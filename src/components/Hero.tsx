import { useState, useEffect } from 'react'
import { supabase } from '../supabase'

const Hero = () => {
  const [resumeUrl, setResumeUrl] = useState('')

  useEffect(() => {
    const { data } = supabase.storage.from('resume').getPublicUrl('resume.pdf')
    if (data) setResumeUrl(data.publicUrl  + '?t=' + Date.now())
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-black">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-12">
        
        {/* Left - Text */}
        <div className="flex-1 text-left">
          <p className="text-purple-500 text-xs tracking-widest uppercase mb-6 animate-pulse"
            style={{ fontFamily: "'Press Start 2P', cursive" }}>
            Welcome to my portfolio
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: '1.8' }}>
            Hi, I'm <span className="text-purple-500">Lalit</span>
          </h1>
          <p className="text-gray-400 text-xs mb-10"
            style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: '2.5' }}>
            BCA Student & Web Developer
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://mail.google.com/mail/?view=cm&to=Lalit.k123121@gmail.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 text-xs"
              style={{ fontFamily: "'Press Start 2P', cursive" }}>
              Send Email
            </a>
            {resumeUrl && (
              <>
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-purple-500 hover:bg-purple-500/20 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 text-xs"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}>
                   View Resume
                </a>
                <a href={resumeUrl} download
                  className="flex items-center justify-center gap-2 border border-white/20 hover:border-white text-gray-400 hover:text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 text-xs"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}>
                   Download
                </a>
              </>
            )}
          </div>
        </div>

        {/* Right - SVG Illustration */}
        <div className="flex-1 flex items-center justify-center">
          <svg viewBox="0 0 500 500" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
            {/* Glow background circle */}
            <defs>
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.2"/>
              </radialGradient>
            </defs>

            {/* Background glow */}
            <circle cx="250" cy="250" r="200" fill="url(#glow)"/>

            {/* Desk */}
            <ellipse cx="250" cy="370" rx="180" ry="20" fill="#1a1a2e" opacity="0.8"/>

            {/* Monitor stand */}
            <rect x="230" y="310" width="40" height="40" rx="4" fill="#2d2d44"/>
            <rect x="210" y="348" width="80" height="8" rx="4" fill="#2d2d44"/>

            {/* Monitor body */}
            <rect x="120" y="160" width="260" height="160" rx="12" fill="#1e1e30"/>
            <rect x="128" y="168" width="244" height="144" rx="8" fill="#0a0a1a"/>

            {/* Screen content - code */}
            <rect x="140" y="180" width="80" height="6" rx="3" fill="#7C3AED" opacity="0.9"/>
            <rect x="140" y="196" width="120" height="6" rx="3" fill="#a855f7" opacity="0.7"/>
            <rect x="155" y="212" width="90" height="6" rx="3" fill="#6366f1" opacity="0.8"/>
            <rect x="155" y="228" width="110" height="6" rx="3" fill="#8b5cf6" opacity="0.6"/>
            <rect x="140" y="244" width="70" height="6" rx="3" fill="#7C3AED" opacity="0.9"/>
            <rect x="155" y="260" width="100" height="6" rx="3" fill="#a855f7" opacity="0.7"/>
            <rect x="140" y="276" width="85" height="6" rx="3" fill="#6366f1" opacity="0.8"/>

            {/* Cursor blink */}
            <rect x="232" y="276" width="3" height="12" rx="1" fill="#a855f7">
              <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
            </rect>

            {/* Keyboard */}
            <rect x="150" y="360" width="200" height="55" rx="8" fill="#1e1e30"/>
            {[0,1,2,3,4,5,6,7,8,9].map(i => (
              <rect key={i} x={160 + i*18} y="370" width="13" height="10" rx="2" fill="#2d2d44"/>
            ))}
            {[0,1,2,3,4,5,6,7,8].map(i => (
              <rect key={i} x={164 + i*18} y="386" width="13" height="10" rx="2" fill="#2d2d44"/>
            ))}
            <rect x="178" y="402" width="94" height="10" rx="2" fill="#7C3AED" opacity="0.8"/>

            {/* Mouse */}
            <rect x="370" y="365" width="30" height="42" rx="15" fill="#1e1e30"/>
            <line x1="385" y1="365" x2="385" y2="390" stroke="#2d2d44" strokeWidth="1.5"/>

            {/* Coffee cup */}
            <rect x="80" y="345" width="35" height="42" rx="4" fill="#2d2d44"/>
            <rect x="80" y="345" width="35" height="12" rx="4" fill="#7C3AED" opacity="0.6"/>
            <path d="M115 358 Q128 358 128 368 Q128 378 115 378" stroke="#2d2d44" strokeWidth="4" fill="none"/>
            {/* Steam */}
            <path d="M90 340 Q93 330 90 320" stroke="#7C3AED" strokeWidth="2" fill="none" opacity="0.5">
              <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite"/>
            </path>
            <path d="M100 338 Q103 325 100 315" stroke="#a855f7" strokeWidth="2" fill="none" opacity="0.4">
              <animate attributeName="opacity" values="0.4;0;0.4" dur="2.5s" repeatCount="indefinite"/>
            </path>

            {/* Floating code tags */}
            <text x="60" y="120" fill="#7C3AED" fontSize="16" opacity="0.7" fontFamily="monospace">&lt;/&gt;</text>
            <text x="390" y="150" fill="#a855f7" fontSize="14" opacity="0.6" fontFamily="monospace">{'{}'}</text>
            <text x="400" y="280" fill="#6366f1" fontSize="12" opacity="0.5" fontFamily="monospace">( )</text>
            <text x="50" y="280" fill="#8b5cf6" fontSize="12" opacity="0.5" fontFamily="monospace">[ ]</text>

            {/* Stars/particles */}
            {[[80,80],[420,100],[440,320],[70,350],[250,50],[350,420]].map(([x,y],i) => (
              <circle key={i} cx={x} cy={y} r="2" fill="#7C3AED" opacity="0.6">
                <animate attributeName="opacity" values="0.6;0.1;0.6" dur={`${1.5+i*0.5}s`} repeatCount="indefinite"/>
              </circle>
            ))}
          </svg>
        </div>

      </div>
    </section>
  )
}

export default Hero