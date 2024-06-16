import {    
    getLabels,
    techStackLabels,
    progToolsLabels, } from '../utilities/Utilities'

const HomeSkills = ( {data } ) => {
    return (
        <section className="home-skills" id={`post-${data.id}`}>
            <h2>My Skills</h2>
            <h3 className="proj-stacks txt-header">
                <span className="txt-header">Tech Stack: </span>
            </h3>
                {getLabels(data.acf.tech_stack, techStackLabels)}
            <h3 className="proj-stacks">
                <span className="txt-header">Programs & Tools: </span>
            </h3>
                {getLabels(data.acf.prog_tools, progToolsLabels)}
        </section>
    )
}

export default HomeSkills