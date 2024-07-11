import { Link } from "react-router-dom";

const CTAProjectAbout = () => {
    return (
        <section className="cta-container">
            <h2>Visit my other pages</h2>
            <div className="call-to-action">
                <Link to="/projects" className="link-btn">View Projects</Link>
                <Link to="/about" className="link-btn">About Me</Link>
            </div>
        </section>
    )
}

export default CTAProjectAbout