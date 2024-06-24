import { Link } from "react-router-dom"

const CTAProjectContact = () => {
    return (
        <>
            <Link to="/projects" className="link-btn">Back to Project</Link>
            <Link to="/contact" className="link-btn"> Let's Connect</Link>
        </>
    )
}

export default CTAProjectContact