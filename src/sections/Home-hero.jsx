import { Link } from "react-router-dom"

const HomeHero = ( { data } ) => {
    return (
        <section className="home-hero" id={`post-${data.id}`}>
            <h1 dangerouslySetInnerHTML={{__html:data.title.rendered}}></h1>
            <p className="hero-quote">{data.acf.hero_quote}</p>
            <p className="hero-intro">{data.acf.hero_intro}</p>
            <Link to="/projects" className="link-btn">View Projects</Link>
            <Link to="/about" className="link-btn">About Me</Link>
        </section>
    )
}

export default HomeHero