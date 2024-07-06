import { useState, useEffect } from "react"
import { restBase } from '../utilities/Utilities'
import Loading from '../utilities/Loading'
import { NavLink } from "react-router-dom"

const Navigation = () => {
    const [navData, setNavData] = useState(null)
    const [logoData, setLogoData] = useState( { default: '', hover: '' } )
    const [isLoaded, setLoadStatus] = useState(false)

    const fetchNavData = async () => {
        const response = await fetch(restBase + 'pages/219?acf_format=standard&_embed')
        if ( response.ok ) {
            const data = await response.json()
            setNavData(data)
            setLogoData({
                default: data.acf.logo.url,
                hover: data.acf.logo_hover.url
            })
            setLoadStatus(true)
        }
    }

    useEffect(() => {
        fetchNavData()
    }, [])

    //Setting URLs for Sass content to site-logo NavLink, appending logo images
    useEffect(() => {
        if (isLoaded) {
            const logoElement = document.querySelector('.site-logo')
            if (logoElement) {
                logoElement.style.setProperty('--logo-default', `url(${logoData.default})`)
                logoElement.style.setProperty('--logo-hover', `url(${logoData.hover})`)
            }
        }
    }, [isLoaded, logoData])

    if ( !isLoaded ) {
        return <Loading />
    }

    return (
        <> 
            {/*Logo*/}
            <div className="site-branding logo">
                <NavLink  to='/' className="site-logo" />
            </div>
            
            {/*Navigation with Icons*/}
            <nav className="site-navigation">
                <ul>
                    <li>
                        <NavLink to='/' className="nav-icon" end>
                            <img    src={navData.acf.home_icon.url} 
                                    alt={navData.acf.home_icon.alt} />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/projects' className="nav-icon">
                            <img    src={navData.acf.projects_icon.url} 
                                    alt={navData.acf.projects_icon.alt} />
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className="nav-icon">
                            <img    src={navData.acf.about_icon.url} 
                                    alt={navData.acf.about_icon.alt} />
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className="nav-icon">
                            <img    src={navData.acf.contact_icon.url} 
                                    alt={navData.acf.contact_icon.alt} />
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation