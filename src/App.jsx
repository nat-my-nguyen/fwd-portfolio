import { Route, Routes, Link, NavLink } from 'react-router-dom'
import Home from './templates/Home'
import Projects from './templates/Projects'
import Project from './templates/Project'
import About from './templates/About'
import Contact from './templates/Contact'
import './styles/styles.scss'

function App() {

  return (
    <>
      <header id="masthead" className="site-header">
        <div className="site-branding">
          {/* logo svg goes here*/}
        </div>
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
          <Route path='/services' element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <nav className="site-navigation">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
        <div className="social-links">
          <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
          </ul>
        </div>
        <p className="copyright">Created for <a href="https://wp.bcitwebdeveloper.ca/" target="_blank" rel="noopener noreferrer">FWDP 3600</a>.</p>
      </footer>
    </>
  )
}

export default App
