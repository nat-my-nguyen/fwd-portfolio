import {    
    getLabels,
    techStackLabels,
    progToolsLabels, } from '../utilities/Utilities'

const HomeSkills = ( {data } ) => {
    return (
        <section className="home-skills" id={`post-${data.id}`}>
            <h2>My Skills</h2>
            <h3>
                <span className="txt-header">Tech Stack: </span>
            </h3>
                <div className="stack-container">
                    {getLabels(data.acf.tech_stack, techStackLabels).map((tool, index) => (
                        <div key={index} className="stack-card">
                            <p>{tool}</p>
                        </div>
                    ))}
                </div>
            <h3>
                <span className="txt-header">Programs & Tools: </span>
            </h3>
            <div className="stack-container">
                {getLabels(data.acf.prog_tools, progToolsLabels).map((tool, index) => (
                    <div key={index} className="stack-card">
                        <p>{tool}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HomeSkills