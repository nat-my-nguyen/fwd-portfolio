import { Link } from "react-router-dom"

const CTAProjectContact = () => {
    return (
        <div className="call-to-action">
            <Link to="/projects" className="link-btn-left">Back to Projects</Link>
            <Link to="/contact" className="link-btn-right"> Let's Connect</Link>
        </div>
    )
}

export default CTAProjectContact