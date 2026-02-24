import { useState, useEffect } from 'react'
import { supabase } from '../supabase'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [resumeUrl, setResumeUrl] = useState('')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const { data } = supabase.storage.from('resume').getPublicUrl('resume.pdf')
    if (data) setResumeUrl(data.publicUrl)
  }, [])

  // Email validation function
  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // basic email format
    return regex.test(email)
  }

  const handleSend = async () => {
    // Check required fields
    if (!form.name || !form.email || !form.message) {
      setError('Please fill all fields!')
      return
    }
    // Validate email format
    if (!isValidEmail(form.email)) {
      setError('Please enter a valid email address.')
      return
    }
    setSending(true)
    setError('')
    try {
      // ⚠️ REPLACE THESE THREE VALUES WITH YOUR ACTUAL EMAILJS CREDENTIALS
      await emailjs.send(
        'service_oj7db3f',        // replace with your service ID
        'template_bb4x53q',       // replace with your template ID
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message
        },
        'GLOkZ7R49TsR5oW8r'       // replace with your public key
      )
      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setError('Something went wrong. Try again!')
    }
    setSending(false)
  }

  return (
    <section className="min-h-screen flex items-center px-6 py-20 bg-black">
      <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-6xl mx-auto gap-12">

        {/* Left - Info */}
        <div className="flex-1">
          <p className="text-purple-500 text-xs tracking-widest uppercase mb-4"
            style={{ fontFamily: "'Press Start 2P', cursive" }}>
           My Contact
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6"
            style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: '1.8' }}>
            Hire <span className="text-purple-500">Me</span>
          </h2>
          <p className="text-gray-400 text-xs mb-10"
            style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: '2.5' }}>
            I'm open to internships and opportunities. Feel free to reach out!
          </p>

          {/* Contact info cards */}
          <div className="flex flex-col gap-4 mb-10">
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-purple-500 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-lg">📧</div>
              <div>
                <p className="text-purple-400 text-xs mb-1" style={{ fontFamily: "'Press Start 2P', cursive" }}>Email</p>
                <p className="text-white text-xs" style={{ fontFamily: "'Press Start 2P', cursive" }}>Lalit.k123121@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-purple-500 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-lg">📍</div>
              <div>
                <p className="text-purple-400 text-xs mb-1" style={{ fontFamily: "'Press Start 2P', cursive" }}>Location</p>
                <p className="text-white text-xs" style={{ fontFamily: "'Press Start 2P', cursive" }}>Noida, Uttar Pradesh</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-purple-500 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-lg">💼</div>
              <div>
                <p className="text-purple-400 text-xs mb-1" style={{ fontFamily: "'Press Start 2P', cursive" }}>Status</p>
                <p className="text-purple-400 text-xs" style={{ fontFamily: "'Press Start 2P', cursive" }}>Open to Work ✅</p>
              </div>
            </div>
          </div>

          {/* Social + Resume */}
          <div className="flex flex-wrap gap-3">
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
            {resumeUrl && (
              <a href={resumeUrl} target="_blank"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 text-xs"
                style={{ fontFamily: "'Press Start 2P', cursive" }}>
                Resume
              </a>
            )}
          </div>

          <p className="text-gray-600 text-xs mt-12" style={{ fontFamily: "'Press Start 2P', cursive" }}>
            
          </p>
        </div>

        {/* Right - Contact Form */}
        <div className="flex-1 w-full">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-white text-sm font-bold mb-6" style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: '1.8' }}>
              Send me a <span className="text-purple-500">Message</span>
            </h3>

            <div className="flex flex-col gap-4">
              <div>
                <label className="text-purple-400 text-xs mb-2 block" style={{ fontFamily: "'Press Start 2P', cursive" }}>Full Name</label>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-xs placeholder-gray-600 outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your name here"
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                />
              </div>
              <div>
                <label className="text-purple-400 text-xs mb-2 block" style={{ fontFamily: "'Press Start 2P', cursive" }}>Email Address</label>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-xs placeholder-gray-600 outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your email here"
                  type="email"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                />
              </div>
              <div>
                <label className="text-purple-400 text-xs mb-2 block" style={{ fontFamily: "'Press Start 2P', cursive" }}>Subject</label>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-xs placeholder-gray-600 outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your subject here"
                  value={form.subject}
                  onChange={e => setForm({...form, subject: e.target.value})}
                />
              </div>
              <div>
                <label className="text-purple-400 text-xs mb-2 block" style={{ fontFamily: "'Press Start 2P', cursive" }}>Message</label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-xs placeholder-gray-600 outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Your message here"
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                />
              </div>
              {error && <p className="text-red-400 text-xs" style={{ fontFamily: "'Press Start 2P', cursive" }}>❌ {error}</p>}
              {sent && <p className="text-green-400 text-xs" style={{ fontFamily: "'Press Start 2P', cursive" }}>✅ Message sent successfully!</p>}
              <button
                onClick={handleSend}
                disabled={sending}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 text-xs"
                style={{ fontFamily: "'Press Start 2P', cursive" }}>
                {sending ? 'Sending...' : '🚀 Send Message'}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact