import { useState, useEffect } from 'react'
import { 
    restBase,
    getLabels,
    techStackLabels,
    progToolsLabels,
    etcSkillsLabels } from '../utilities/Utilities'
import Loading from '../utilities/Loading'
import { Link } from 'react-router-dom'
import SkillsList from '../components/Skills-list'

const About = () => {
    const [aboutData, setAboutData] = useState(null)
    const [isLoaded, setLoadStatus] = useState(false)

    const fetchAboutData = async () => {
        const response = await fetch(restBase + 'pages/13');
        if ( response.ok ) {
            const data = await response.json();
            setAboutData(data);
            setLoadStatus(true);
        }
    }

    useEffect(() => {
        fetchAboutData();
    }, [])

    if ( !isLoaded ) {
        return <Loading />;
    }

    return (
        <>
            <h1 dangerouslySetInnerHTML={{__html:aboutData.title.rendered}}></h1>
            <section dangerouslySetInnerHTML={{__html:aboutData.content.rendered}}></section>
            <section className="skills-section" id={`post-${aboutData.id}`}>
                <h2>My Skills</h2>
                <SkillsList
                    title="Tech Stack"
                    skills={getLabels(aboutData.acf.tech_stack, techStackLabels)}
                />
                <SkillsList
                    title="Programs & Tools"
                    skills={getLabels(aboutData.acf.prog_tools, progToolsLabels)}
                />
                <SkillsList
                    title="Etc Skills"
                    skills={getLabels(aboutData.acf.etc_skills, etcSkillsLabels)}
                />
            </section>
            <div className="call-to-action">
                <Link to="/projects" className="link-btn">Back to Projects</Link>
                <Link to="/contact" className="link-btn"> Let's Connect</Link>
            </div>
        </>
    )
}

export default About