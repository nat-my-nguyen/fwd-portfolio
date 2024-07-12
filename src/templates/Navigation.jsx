import { useState, useEffect } from "react"
import { restBase } from '../utilities/Utilities'
import Loading from '../utilities/Loading'
import { NavLink } from "react-router-dom"

const Navigation = () => {
    const [navData, setNavData] = useState(null)
    const [pageNavHeader, setPageNavHeader] = useState([])
    const [logoData, setLogoData] = useState( { default: '', hover: '' } )
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
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

        /* Fetches all pages, this is for the NavLink's headers */
        const fetchPageNavHeader = async () => {
            const response = await fetch(`${restBase}pages?acf_format=standard&_embed`)
            if (response.ok) {
                const data = await response.json()
                setPageNavHeader(data)
            }
        }

        const fetchData = async () => {
            await Promise.all( [ fetchNavData(), fetchPageNavHeader() ] )
            setLoadStatus(true)
        }
   
        fetchData()
    }, [])

    /* Setting URLs for Sass content to site-logo NavLink, appending logo images */
    useEffect(() => {
        if (isLoaded) {
            const logoElement = document.querySelector('.site-logo')
            if (logoElement) {
                logoElement.style.setProperty('--logo-default', `url(${logoData.default})`)
                logoElement.style.setProperty('--logo-hover', `url(${logoData.hover})`)
            }
        }
    }, [isLoaded, logoData])

    /* Find the appended Nav Header with the Page's ID for icon placement */
    const getNavigationHeader = (pageId) => {
        const page = pageNavHeader.find(p => p.id === pageId)
        return page ? page.acf.navigation_header : ''
    }

    if ( !isLoaded ) {
        return <Loading />
    }

    return (
        <>
            {/*Logo*/}
            <div className="site-branding logo">
                <NavLink  to='/' className="site-logo">
                    <span className="visually-hidden">Home</span>
                </NavLink>
            </div>
            
            {/*Navigation with Icons*/}
            <nav className="site-navigation">
                <ul>
                    <li>
                        <NavLink to='/' className="nav-icon" end>
                            <img    src={navData.acf.home_icon.url} 
                                    alt={navData.acf.home_icon.alt}
                                    width="40" height="40" />
                            {getNavigationHeader(8)}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/projects' className="nav-icon">
                            <img    src={navData.acf.projects_icon.url} 
                                    alt={navData.acf.projects_icon.alt}
                                    width="40" height="40" />
                            {getNavigationHeader(11)}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className="nav-icon">
                            <img    src={navData.acf.about_icon.url} 
                                    alt={navData.acf.about_icon.alt}
                                    width="40" height="40" />
                            {getNavigationHeader(13)}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className="nav-icon">
                            <img    src={navData.acf.contact_icon.url} 
                                    alt={navData.acf.contact_icon.alt}
                                    width="40" height="40" />
                            {getNavigationHeader(15)}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation