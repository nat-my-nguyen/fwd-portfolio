import { Route, Routes, Link, NavLink } from 'react-router-dom'
import Home from './templates/Home'
import Projects from './templates/Projects'
import Project from './templates/Project'
import About from './templates/About'
import Contact from './templates/Contact'
import Navigation from './templates/Navigation'
import FooterContacts from './templates/Footer-contacts'
import './styles/styles.scss'

function App() {

  return (
    <>
      <header id="masthead" className="site-header">
        <Navigation />
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
        <FooterContacts />
      </footer>
    </>
  )
}

export default App
