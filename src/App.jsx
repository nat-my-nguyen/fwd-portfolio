import { Route, Routes, Link, NavLink } from 'react-router-dom'
import Home from './templates/Home'
import Projects from './templates/Projects'
import Project from './templates/Project'
import About from './templates/About'
import Contact from './templates/Contact'
import Logo from './components/Logo'
import './styles/styles.scss'

function App() {

  return (
    <>
      <header id="masthead" className="site-header">
        <Logo />
        <nav className="site-navigation">
          <ul>
            <li>
              <NavLink to='/' className="nav-icon" end>
                <img src="/src/assets/icon-home.svg" alt="Home Icon" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/projects' className="nav-icon">
                <img src="/src/assets/icon-projects.svg" alt="Projects Icon" />
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' className="nav-icon">
                <img src="/src/assets/icon-about.svg" alt="About Icon" />
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' className="nav-icon">
                <img src="/src/assets/icon-contact.svg" alt="Contact Icon" />
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main id="main">
        <a>Link test look for styling</a>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:slug' element={<Project />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <div className="social-links">
          <ul>
            <li><Link to='/contact'>Contact</Link></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
        <p className="copyright">Created for <a href="https://wp.bcitwebdeveloper.ca/" target="_blank" rel="noopener noreferrer">FWDP 3600</a>.</p>
      </footer>
    </>
  )
}

export default App
