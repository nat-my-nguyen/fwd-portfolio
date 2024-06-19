import { useState, useEffect } from 'react'
import { 
    restBase,
    getLabels,
    techStackLabels,
    progToolsLabels,
    collaborationLabels,
    convertToParagraphs } from '../utilities/Utilities'
import Loading from '../utilities/Loading'
import { Link, useParams } from 'react-router-dom'
import CTAProjectContact from '../components/CTA-project-contact'
import NextProjectLink from '../components/Next-project-link'

const Project = () => {
    const { slug } = useParams()
    const [projectData, setProjectData] = useState(null)
    const [projectsList, setProjectsList] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchProjectData = async () => {
            const response = await fetch(`${restBase}posts?slug=${slug}&_embed`)
            if ( response.ok ) {
                const data = await response.json()
                setProjectData(data[0])
                // setLoadStatus(true)
            }
        }

        const fetchProjectsList = async () => {
            const response = await fetch(`${restBase}posts?_embed`)
            if (response.ok) {
                const data = await response.json()
                setProjectsList(data)
            }
        }

        const fetchData = async () => {
            await Promise.all( [ fetchProjectData(), fetchProjectsList() ] );
            setLoadStatus(true);
        }

        fetchData()
    }, [slug])

    if (!isLoaded) {
        return <Loading/>
    }

    return (
        <>
            <div className="project-detail">
                <h1 dangerouslySetInnerHTML={{ __html: projectData.title.rendered }}></h1>
                <div className="project-content">
                    <section>
                        <h2 className="txt-header">Project Requirement:</h2>
                        <div dangerouslySetInnerHTML= {{__html: convertToParagraphs(projectData.acf.requirements)}}></div>
                    </section>
                    {/* CarouselSlide goes here */}
                    <section>
                        <h2 className="txt-header">Tech Stack:</h2>
                        <p className="proj-stacks">{getLabels(projectData.acf.tech_stack, techStackLabels).join(', ')}</p>

                        <h2 className="txt-header">Programs & Tools:</h2>
                        <p className="proj-stacks">{getLabels(projectData.acf.prog_tools, progToolsLabels).join(', ')}</p>

                        <h2 className="txt-header">Collaboration:</h2>
                        <p className="proj-collaboration">{collaborationLabels[projectData.acf.collaboration]}</p>
                    </section>

                    <a href={projectData.acf.live_link}>Visit Live</a>

                    <div className="accordion-area">
                        <button className="accordion">{projectData.acf.accordion.accordion_header_insights}</button>
                        <div className="panel" dangerouslySetInnerHTML={{__html: convertToParagraphs(projectData.acf.accordion.content_insights)}}></div>

                        <button className="accordion">{projectData.acf.accordion.accordion_header_features}</button>
                        <div className="panel" dangerouslySetInnerHTML={{__html: projectData.acf.accordion.content_features}}></div>

                        <button className="accordion">{projectData.acf.accordion.accordion_header_hurdles}</button>
                        <div className="panel" dangerouslySetInnerHTML={{__html: projectData.acf.accordion.content_hurdles}}></div>
                    </div>

                    <div className="cta">
                        <NextProjectLink projectsList={projectsList} />
                        <CTAProjectContact />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project