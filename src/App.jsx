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
            <li><NavLink to='/' end>Home</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
        </nav>
      </header>
      <main id="main">
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
