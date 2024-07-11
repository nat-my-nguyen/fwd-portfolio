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
            <section className="page-intro about-section">
                <h1 dangerouslySetInnerHTML={{__html:aboutData.title.rendered}} />
                <div dangerouslySetInnerHTML={{__html:aboutData.content.rendered}} />
                <figure className="about-pic">
                    <img
                        src={aboutData.acf.about_pic.url}
                        srcset={`
                            ${aboutData.acf.about_pic.url} 300w,
                            ${aboutData.acf.about_pic.sizes.medium_large} 600w,
                        `}
                        sizes="(max-width: 600px) 300px, 600px"
                        alt={aboutData.acf.about_pic.alt}
                        width="288"
                        height="288"
                    />
                </figure>
            </section>
            <section className="skills-section">
                <SkillsList
                    title="Tech Stack"
                    skills={aboutData.acf.tech_skills}
                />
                <SkillsList
                    title="Programs & Tools"
                    skills={aboutData.acf.prog_skills}
                />
                <div className="stack-container">
                    <h2 className="txt-header">Etc Skills</h2>
                    {aboutData.acf.etc_skills.map((skill, index) => (
                        <div key={index} className="stack-card">
                            <p>{skill.label}</p>
                        </div>
                    ))}
                </div>
                <CTAProjectContact />
            </section>
        </>
    )
}

export default About