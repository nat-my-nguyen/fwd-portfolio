import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities'
import Loading from '../utilities/Loading'
import SkillsList from '../components/Skills-list'
import CTAProjectContact from '../components/CTA-project-contact'

const About = () => {
    const [aboutData, setAboutData] = useState(null)
    const [isLoaded, setLoadStatus] = useState(false)

    const fetchAboutData = async () => {
        const response = await fetch(restBase + 'pages/13?acf_format=standard&_embed')
        if ( response.ok ) {
            const data = await response.json()
            setAboutData(data)
            setLoadStatus(true)
        }
    }

    useEffect(() => {
        fetchAboutData()
    }, [])

    if ( !isLoaded ) {
        return <Loading />
    }

    return (
        <>
            <h1 dangerouslySetInnerHTML={{__html:aboutData.title.rendered}}></h1>
            <section dangerouslySetInnerHTML={{__html:aboutData.content.rendered}}></section>
            <section className="skills-section" id={`post-${aboutData.id}`}>
                <SkillsList
                    title="Tech Stack"
                    skills={aboutData.acf.tech_skills}
                />
                <SkillsList
                    title="Programs & Tools"
                    skills={aboutData.acf.prog_skills}
                />
                <h2 className="txt-header">Etc Skills</h2>
                <div className="stack-container">
                    {aboutData.acf.etc_skills.map((skill, index) => (
                        <div key={index} className="stack-card">
                            <p>{skill.label}</p>
                        </div>
                    ))}
                </div>
            </section>
            <CTAProjectContact />
        </>
    )
}

export default About