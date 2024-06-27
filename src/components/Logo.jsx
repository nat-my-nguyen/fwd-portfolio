import { NavLink } from "react-router-dom"
import darkLogo from '/src/assets/portfolio-logo-dark.svg'
import lightLogo from '/src/assets/portfolio-logo-light.svg'
import { useState } from "react"

const Logo = () => {
  	const [logoSrc, setLogoSrc] = useState(darkLogo)

  	return (
		<div className="site-branding logo">
			<NavLink 
				to='/'
				// onMouseEnter={() => setLogoSrc(lightLogo)}
				// onMouseLeave={() => setLogoSrc(darkLogo)}
			>
				{/* <img 
					src={logoSrc} 
					alt="Logo" 
					className="site-logo" /> */}
				<div className="site-logo" />
			</NavLink>
		</div>
  )
}

export default Logo