import ResponsiveArrow from "../components/Responsive-arrow"
import CTAProjectAbout from "../components/CTA-project-about"

const HomeHero = ( { data } ) => {
    return (
        <section className="home-hero">
            <h1 dangerouslySetInnerHTML={{__html:data.title.rendered}}></h1>
            <p className="hero-quote">{data.acf.hero_quote}</p>
            <ResponsiveArrow />
            {/* <a href="#intro"><img className="down-arrow" src="/src/assets/arrow-down-solid-fontawesome.svg" alt="Arrow SVG icon" /></a> */}
            <p id="intro" className="hero-intro">{data.acf.hero_intro}</p>
            <CTAProjectAbout />
        </section>
    )
}

export default HomeHero