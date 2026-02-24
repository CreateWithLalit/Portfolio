import { useState, useEffect } from 'react'
import { supabase } from '../../supabase'
import { useNavigate } from 'react-router-dom'

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  github: string
  live?: string
}

const Dashboard = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ title: '', description: '', tech: '', github: '', live: '' })
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [resumeUrl, setResumeUrl] = useState('')
  const [uploading, setUploading] = useState(false)
  const [activeTab, setActiveTab] = useState<'projects' | 'resume'>('projects')
  const navigate = useNavigate()

  useEffect(() => {
    checkAuth()
    fetchProjects()
    fetchResume()
  }, [])

  const checkAuth = async () => {
    const { data } = await supabase.auth.getSession()
    if (!data.session) navigate('/admin')
  }

  const fetchProjects = async () => {
    const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false })
    if (data) setProjects(data)
  }

  const fetchResume = async () => {
    const { data } = supabase.storage.from('resume').getPublicUrl('resume.pdf')
    if (data) setResumeUrl(data.publicUrl)
  }

  const handleAdd = async () => {
    if (!form.title || !form.description) return
    await supabase.from('projects').insert([{
      title: form.title,
      description: form.description,
      tech: form.tech.split(',').map(t => t.trim()),
      github: form.github,
      live: form.live
    }])
    fetchProjects()
    setForm({ title: '', description: '', tech: '', github: '', live: '' })
    setShowForm(false)
  }

  const handleDelete = async (id: number) => {
    await supabase.from('projects').delete().eq('id', id)
    fetchProjects()
  }

  const handleResumeUpload = async () => {
    if (!resumeFile) return
    setUploading(true)
    await supabase.storage.from('resume').upload('resume.pdf', resumeFile, { upsert: true })
    fetchResume()
    setUploading(false)
    setResumeFile(null)
    alert('Resume uploaded!')
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/admin')
  }

  return (
    <section className="min-h-screen bg-black px-6 py-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-purple-500 text-xs mb-2" style={{ fontFamily: "'Press Start 2P', cursive" }}>
              Admin Panel
            </p>
            <h1 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: '1.8' }}>
              Welcome, <span className="text-purple-500">Lalit</span> 👾
            </h1>
          </div>
          <button onClick={handleLogout}
            className="border border-red-500/50 hover:border-red-500 text-red-400 hover:text-red-300 px-4 py-2 rounded-lg text-xs transition-all duration-300"
            style={{ fontFamily: "'Press Start 2P', cursive" }}>
            Logout
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-purple-500 transition-colors">
            <p className="text-3xl font-bold text-purple-400 mb-2">{projects.length}</p>
            <p className="text-gray-500 text-xs" style={{ fontFamily: "'Press Start 2P', cursive" }}>Projects</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-purple-500 transition-colors">
            <p className="text-3xl font-bold text-purple-400 mb-2">✓</p>
            <p className="text-gray-500 text-xs" style={{ fontFamily: "'Press Start 2P', cursive" }}>Resume Live</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-purple-500 transition-colors">
            <p className="text-3xl font-bold text-purple-400 mb-2">🟢</p>
            <p className="text-gray-500 text-xs" style={{ fontFamily: "'Press Start 2P', cursive" }}>Online</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button onClick={() => setActiveTab('projects')}
            className={`px-6 py-2 rounded-full text-xs transition-all duration-300 ${activeTab === 'projects' ? 'bg-purple-600 text-white' : 'border border-white/10 text-gray-400 hover:border-purple-500'}`}
            style={{ fontFamily: "'Press Start 2P', cursive" }}>
            🚀 Projects
          </button>
          <button onClick={() => setActiveTab('resume')}
            className={`px-6 py-2 rounded-full text-xs transition-all duration-300 ${activeTab === 'resume' ? 'bg-purple-600 text-white' : 'border border-white/10 text-gray-400 hover:border-purple-500'}`}
            style={{ fontFamily: "'Press Start 2P', cursive" }}>
            📄 Resume
          </button>
        </div>

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-sm font-bold" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                All Projects
              </h2>
              <button onClick={() => setShowForm(!showForm)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-xs transition-all duration-300 hover:scale-105"
                style={{ fontFamily: "'Press Start 2P', cursive" }}>
                + Add New
              </button>
            </div>

            {showForm && (
              <div className="bg-black/50 border border-purple-500/30 rounded-xl p-6 mb-6 flex flex-col gap-4">
                <h3 className="text-purple-400 text-xs" style={{ fontFamily: "'Press Start 2P', cursive" }}>New Project</h3>
                <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-purple-500 text-xs transition-colors"
                  placeholder="Project Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})}
                  style={{ fontFamily: "'Press Start 2P', cursive" }}/>
                <textarea className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-purple-500 resize-none text-xs transition-colors"
                  placeholder="Description" rows={3} value={form.description} onChange={e => setForm({...form, description: e.target.value})}
                  style={{ fontFamily: "'Press Start 2P', cursive" }}/>
                <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-purple-500 text-xs transition-colors"
                  placeholder="Tech (comma separated e.g. React, TypeScript)" value={form.tech} onChange={e => setForm({...form, tech: e.target.value})}
                  style={{ fontFamily: "'Press Start 2P', cursive" }}/>
                <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-purple-500 text-xs transition-colors"
                  placeholder="GitHub Link" value={form.github} onChange={e => setForm({...form, github: e.target.value})}
                  style={{ fontFamily: "'Press Start 2P', cursive" }}/>
                <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-purple-500 text-xs transition-colors"
                  placeholder="Live Link (optional)" value={form.live} onChange={e => setForm({...form, live: e.target.value})}
                  style={{ fontFamily: "'Press Start 2P', cursive" }}/>
                <div className="flex gap-4">
                  <button onClick={handleAdd}
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg text-xs transition-all duration-300"
                    style={{ fontFamily: "'Press Start 2P', cursive" }}>
                    ✅ Add Project
                  </button>
                  <button onClick={() => setShowForm(false)}
                    className="flex-1 border border-white/20 text-gray-400 py-3 rounded-lg hover:border-white text-xs transition-all duration-300"
                    style={{ fontFamily: "'Press Start 2P', cursive" }}>
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-4">
              {projects.length === 0 && (
                <p className="text-gray-600 text-center py-8 text-xs" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                  No projects yet. Add your first one!
                </p>
              )}
              {projects.map(project => (
                <div key={project.id} className="flex justify-between items-start bg-black/30 border border-white/10 rounded-xl p-5 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xs mb-2" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs mb-3 leading-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="bg-purple-500/20 text-purple-400 text-xs px-2 py-1 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                  <button onClick={() => handleDelete(project.id)}
                    className="text-red-400 hover:text-red-300 text-xs ml-4 border border-red-500/20 hover:border-red-500/50 px-3 py-1 rounded-lg transition-all duration-300"
                    style={{ fontFamily: "'Press Start 2P', cursive" }}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Resume Tab */}
        {activeTab === 'resume' && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white text-sm font-bold mb-6" style={{ fontFamily: "'Press Start 2P', cursive" }}>
              Resume Manager
            </h2>
            <div className="bg-black/30 border border-dashed border-purple-500/40 rounded-xl p-10 text-center mb-6">
              <p className="text-4xl mb-4">📄</p>
              <p className="text-gray-400 text-xs mb-6" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                Upload your resume PDF here
              </p>
              <input type="file" accept=".pdf" onChange={e => setResumeFile(e.target.files?.[0] || null)}
                className="text-gray-400 text-xs mb-4 block mx-auto"/>
              <button onClick={handleResumeUpload} disabled={!resumeFile || uploading}
                className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white px-8 py-3 rounded-lg text-xs transition-all duration-300 hover:scale-105"
                style={{ fontFamily: "'Press Start 2P', cursive" }}>
                {uploading ? 'Uploading...' : '⬆️ Upload Resume'}
              </button>
            </div>
            {resumeUrl && (
              <a href={resumeUrl} target="_blank"
                className="flex items-center justify-center gap-2 border border-purple-500 hover:bg-purple-500/20 text-purple-400 px-6 py-3 rounded-lg text-xs transition-all duration-300"
                style={{ fontFamily: "'Press Start 2P', cursive" }}>
                👁️ View Current Resume →
              </a>
            )}
          </div>
        )}

      </div>
    </section>
  )
}

export default Dashboard