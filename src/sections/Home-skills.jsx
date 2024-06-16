import {    
    getLabels,
    techStackLabels,
    progToolsLabels, } from '../utilities/Utilities'
import CTAAboutContact from '../components/CTA-about-contact'

const HomeSkills = ( {data } ) => {
    return (
        <section className="home-skills" id={`post-${data.id}`}>
            <h2>My Skills</h2>
            <h3 className="txt-header">Tech Stack:</h3>
            <div className="stack-container">
                {getLabels(data.acf.tech_stack, techStackLabels).map((tool, index) => (
                    <div key={index} className="stack-card">
                        <p>{tool}</p>
                    </div>
                ))}
            </div>

            <h3 className="txt-header">Programs & Tools:</h3>
            <div className="stack-container">
                {getLabels(data.acf.prog_tools, progToolsLabels).map((tool, index) => (
                    <div key={index} className="stack-card">
                        <p>{tool}</p>
                    </div>
                ))}
            </div>

            <CTAAboutContact />
        </section>
    )
}

export default HomeSkills