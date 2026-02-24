import { useState, useEffect } from 'react'
import { supabase } from '../supabase'

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  github: string
  live?: string
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false })
      if (data) setProjects(data)
    }
    fetchProjects()
  }, [])

  return (
    <section className="min-h-screen px-6 py-20 bg-black">
      <div className="max-w-6xl mx-auto">

        {/* Header with SVG logo */}
        <div className="flex flex-col items-center mb-16">
          <svg viewBox="0 0 120 120" className="w-24 h-24 mb-6" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="logoGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <circle cx="60" cy="60" r="55" fill="url(#logoGlow)"/>
            <circle cx="60" cy="60" r="45" fill="none" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.6">
              <animateTransform attributeName="transform" type="rotate" from="0 60 60" to="360 60 60" dur="10s" repeatCount="indefinite"/>
            </circle>
            {/* Rocket */}
            <text x="60" y="75" fontSize="40" textAnchor="middle"> 🧑🏼‍💻 </text>
          </svg>

          <p className="text-purple-500 text-xs tracking-widest uppercase mb-4"
            style={{ fontFamily: "'Press Start 2P', cursive" }}>
            My Work
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center"
            style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: '1.8' }}>
            Featured <span className="text-purple-500">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.id}
              className="relative group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-2">

              {/* Project number */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                <span className="text-purple-400 text-xs" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Glowing dot */}
              <div className="w-3 h-3 rounded-full bg-purple-500 mb-4 shadow-lg shadow-purple-500/50">
                <div className="w-3 h-3 rounded-full bg-purple-500 animate-ping opacity-50"/>
              </div>

              <h3 className="text-white font-bold text-sm mb-3 pr-10"
                style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: '1.8' }}>
                {project.title}
              </h3>
              <p className="text-gray-400 text-xs mb-4 leading-6">{project.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="bg-purple-500/20 text-purple-400 text-xs px-3 py-1 rounded-full border border-purple-500/30">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-white/10">
                {project.github && (
                  <a href={project.github} target="_blank"
                    className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                    style={{ fontFamily: "'Press Start 2P', cursive" }}>
                    ⌨️ GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank"
                    className="text-xs text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2"
                    style={{ fontFamily: "'Press Start 2P', cursive" }}>
                    🌐 Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects