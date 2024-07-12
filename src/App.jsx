import { HelmetProvider } from 'react-helmet-async'
import { Route, Routes } from 'react-router-dom'
import Home from './templates/Home'
import Projects from './templates/Projects'
import Project from './templates/Project'
import About from './templates/About'
import Contact from './templates/Contact'
import Navigation from './templates/Navigation'
import FooterContacts from './templates/Footer-contacts'
import BackgroundPattern from './templates/Background-pattern'
import './styles/styles.scss'

function App() {

  return (
    <HelmetProvider>
      <a href="#main" className="screen-reader-text">Skip to main content</a>
      <BackgroundPattern />
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
    </HelmetProvider>
  )
}

export default App
