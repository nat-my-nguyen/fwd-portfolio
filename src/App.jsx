import { HelmetProvider } from 'react-helmet-async'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './templates/Home'
import Projects from './templates/Projects'
import Project from './templates/Project'
import About from './templates/About'
import Contact from './templates/Contact'
import Navigation from './templates/Navigation'
import FooterContacts from './templates/Footer-contacts'
import BackgroundPattern from './templates/Background-pattern'
import Loading from './utilities/Loading'
import ScrollToTop from './utilities/Scroll-top'
import './styles/styles.scss'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }
  return (
    <HelmetProvider>
      <ScrollToTop />
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
