import { Link } from "react-router-dom";

const CTAAboutContact = () => {
    return (
        <div className="call-to-action">
            <h3>Find out more about me:</h3>
            <Link to="/about" className="link-btn">Read About Me</Link>
            <Link to="/contact" className="link-btn"> Let's Connect</Link>
        </div>
    )
}

export default CTAAboutContact