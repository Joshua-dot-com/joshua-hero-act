import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import HomeSection from './Components/HomeSection'
import AboutSection from './Components/AboutSection'
import ProjectsSection from './Components/ProjectsSection'
import BlogSection from './Components/BlogSection'
import ContactSection from './Components/ContactSection'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', key: 'home' },
    { label: 'About', key: 'about' },
    { label: 'Projects', key: 'projects' },
    { label: 'Blog', key: 'blog' },
    { label: 'Contact', key: 'contact' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl text-indigo-600 uppercase font-bold">joshua.</span>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-4">
              {navItems.map(item => (
                <button
                  key={item.key}
                  onClick={() => setActiveSection(item.key)}
                  className={`px-3 py-2 rounded-md ${
                    activeSection === item.key
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 hover:text-indigo-600">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="md:hidden mt-2 space-y-2 pb-4">
              {navItems.map(item => (
                <button
                  key={item.key}
                  onClick={() => {
                    setActiveSection(item.key)
                    setMenuOpen(false)
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md ${
                    activeSection === item.key
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeSection === 'home' && <HomeSection setActiveSection={setActiveSection} />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'projects' && <ProjectsSection />}
        {activeSection === 'blog' && <BlogSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
