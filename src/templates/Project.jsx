import { useState, useEffect } from 'react'
import { 
    restBase,
    getLabels,
    techStackLabels,
    progToolsLabels,
    collaborationLabels,
    convertToParagraphs } from '../utilities/Utilities'
import Loading from '../utilities/Loading'
import { useParams } from 'react-router-dom'
import { Accordion, AccordionItem } from '@szhsin/react-accordion'
import chevronDown from '../assets/chevron-down.svg'
import CarouselSlide from '../components/Carousel-slide'
import SkillsList from '../components/Skills-list'
import NextProjectLink from '../components/Next-project-link'
import CTAProjectContact from '../components/CTA-project-contact'

const Project = () => {
    const { slug } = useParams()
    const [projectData, setProjectData] = useState(null)
    const [carouselImages, setCarouselImages] = useState([])
    const [projectsList, setProjectsList] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchProjectData = async () => {
            const response = await fetch(`${restBase}posts?slug=${slug}&_embed`)
            if ( response.ok ) {
                const data = await response.json()
                const project = data[0]
                setProjectData(project)
                /*If there are images in the ACF carousel, set the image data*/
                if (project.acf.carousel && project.acf.carousel.length > 0) {
                    const images = await fetchImageData(project.acf.carousel)
                    setCarouselImages(images)
                }
            }
        }

        /*Take an  array of image IDs from the WP media, fetch each data, then returns image object*/
        const fetchImageData = async (ids) => {
            const getIDs = ids.map(id => fetch(`${restBase}media/${id}`))
            const responses = await Promise.all(getIDs)
            const images = await Promise.all(responses.map(response => response.json()))
            return images
        }

        /*Fetches all project posts, this is for the NextProjectLink*/
        const fetchProjectsList = async () => {
            const response = await fetch(`${restBase}posts?_embed`)
            if (response.ok) {
                const data = await response.json()
                setProjectsList(data)
            }
        }

        const fetchData = async () => {
            await Promise.all( [ fetchProjectData(), fetchProjectsList() ] )
            setLoadStatus(true)
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

                    {carouselImages.length > 0 && <CarouselSlide images={carouselImages} />}

                    <section>
                        <h2 className="txt-header">Collaboration:</h2>
                        <p className="proj-collaboration">{collaborationLabels[projectData.acf.collaboration]}</p>

                        <SkillsList
                            title="Tech Stack:"
                            skills={getLabels(projectData.acf.tech_stack, techStackLabels)}
                        />
                        <SkillsList
                            title="Programs & Tools:"
                            skills={getLabels(projectData.acf.prog_tools, progToolsLabels)}
                        />
                    </section>

                    <a href={projectData.acf.live_link}>Visit Live</a>

                    <Accordion allowMultiple transition transitionTimeout={400}>
                        <AccordionItem 
                            header={
                                <>
                                {projectData.acf.accordion.header_insights}
                                <img className="chevron-down" src={chevronDown} alt="Chevron Down" />
                                </>} initialEntered>
                            <div dangerouslySetInnerHTML={{__html: convertToParagraphs(projectData.acf.accordion.content_insights)}}></div>
                        </AccordionItem>

                        <AccordionItem header={projectData.acf.accordion.header_features}>
                            <div dangerouslySetInnerHTML={{__html: projectData.acf.accordion.content_features}}></div>
                        </AccordionItem>

                        <AccordionItem header={projectData.acf.accordion.header_hurdles}>
                            <div dangerouslySetInnerHTML={{__html: projectData.acf.accordion.content_hurdles}}></div>
                        </AccordionItem>
                    </Accordion>

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