import { NavLink } from "react-router-dom"
import darkLogo from '/src/assets/portfolio-logo-dark.svg'
import lightLogo from '/src/assets/portfolio-logo-light.svg'

const Logo = () => {
    return (
        <div className="site-branding logo">
          <NavLink to='/' end>
            <img src={darkLogo} alt="Logo" className="default-logo" />
            <img src={lightLogo} alt="Logo" className="hover-logo active-logo" />
            {/* <img src={lightLogo} alt="Logo" className="active-logo" /> */}
          </NavLink>
        </div>
    )
}

export default Logo