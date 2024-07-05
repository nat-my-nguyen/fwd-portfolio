import { Link } from "react-router-dom";

const CTAAboutContact = () => {
    return (
        <section className="cta-container">
            <h3>Find out more about me</h3>
            <div className="call-to-action">
                <Link to="/about" className="link-btn-left">Read About Me</Link>
                <Link to="/contact" className="link-btn-right"> Let's Connect</Link>
            </div>
        </section>
    )
}

export default CTAAboutContact