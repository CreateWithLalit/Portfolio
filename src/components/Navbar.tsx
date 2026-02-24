import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 px-6 py-4 flex justify-between items-center border-b border-white/10">
      
      {/* Logo */}
      <Link to="/" className="group flex items-center gap-2">
        <svg viewBox="0 0 40 40" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#7C3AED"/>
          <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle"
            fill="white" fontSize="18" fontFamily="'Press Start 2P', cursive" fontWeight="bold">
            🧑🏼‍💻
          </text>
          <rect x="0" y="0" width="40" height="40" rx="8" fill="none"
            stroke="#a855f7" strokeWidth="1.5" opacity="0.6"/>
        </svg>
        <span className="text-white text-xs font-bold group-hover:text-purple-400 transition-colors duration-300"
          style={{ fontFamily: "'Press Start 2P', cursive" }}>
          <span className="text-purple-500"></span>
        </span>
      </Link>

      {/* Nav Links */}
      <ul className="flex gap-6 items-center">
        {[
          { name: 'Home', path: '/' },
          { name: 'Skills', path: '/skills' },
          { name: 'Projects', path: '/projects' },
          { name: 'Contact', path: '/contact' },
        ].map((item) => (
          <li key={item.name}>
            <Link to={item.path}
              className="relative text-gray-400 text-xs group transition-colors duration-300 hover:text-white"
              style={{ fontFamily: "'Press Start 2P', cursive" }}>
              {item.name}
              {/* Underline animation */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"/>
              {/* Glow dot */}
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"/>
            </Link>
          </li>
        ))}

        {/* Admin button - special style */}
        <li>
          <Link to="/admin"
            className="relative text-xs px-4 py-2 rounded-lg border border-purple-500/50 text-purple-400 hover:bg-purple-500/20 hover:border-purple-400 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            style={{ fontFamily: "'Press Start 2P', cursive" }}>
            🔐 Admin
          </Link>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar