import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/projectsPage'
import ContactPage from './pages/ContactPage'
import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'




function App() {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      
    </BrowserRouter>
  )
}

export default App