import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities'
import Loading from '../utilities/Loading'
import { useParams } from 'react-router-dom'
import { Accordion, AccordionItem } from '@szhsin/react-accordion'
import chevronDown from '../assets/chevron-down.svg'
import SkillsList from '../components/Skills-list'
import NextProjectLink from '../components/Next-project-link'
import CTAProjectContact from '../components/CTA-project-contact'
import SwiperSection from '../components/Swiper-section'

/*Handles accordion headers in the Project*/
const AccordionHeader = ({ text }) => (
    <>
        {text}
        <img className="chevron-down" src={chevronDown} alt="Chevron Down" />
    </>
)

const Project = () => {
    const { slug } = useParams()
    const [projectData, setProjectData] = useState(null)
    const [carouselImages, setCarouselImages] = useState([])
    const [projectsList, setProjectsList] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchProjectData = async () => {
            const response = await fetch(`${restBase}posts?slug=${slug}&acf_format=standard&_embed`)
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
        const fetchImageData = async (carousel) => {
            const getIDs = carousel.map(item => fetch(`${restBase}media/${item.id}`))
            const responses = await Promise.all(getIDs)
            const images = await Promise.all(responses.map(response => response.json()))
            return images
        }

        /*Fetches all project posts, this is for the NextProjectLink*/
        const fetchProjectsList = async () => {
            const response = await fetch(`${restBase}posts?acf_format=standard&_embed`)
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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])

    if (!isLoaded) {
        return <Loading/>
    }

    return (
        <>
            <section className="project-detail">
                <h1 dangerouslySetInnerHTML={{ __html: projectData.title.rendered }}></h1>
                <h2 className="subtitle">{projectData.acf.subtitle}</h2>
                <div className="project-content">
                    <section className="requirement">
                        <h2 className="txt-header">Project Requirement:</h2>
                        <div dangerouslySetInnerHTML= {{__html: projectData.acf.requirements}}></div>
                    </section>

                    <SwiperSection images={carouselImages}/>
                    
                    <div className="visit-link">
                        <a href={projectData.acf.live_link} className="link-btn-right">Visit Live</a>
                    </div>

                    <section className="col-stacks">
                        <h2 className="txt-header">Collaboration:</h2>
                        <p className="proj-collab">{projectData.acf.collaboration.label}</p>

                        <SkillsList
                            title="Tech Stack:"
                            skills={projectData.acf.tech_skills}
                        />
                        <SkillsList
                            title="Programs & Tools:"
                            skills={projectData.acf.prog_skills}
                        />
                    </section>

                    <Accordion allowMultiple transition transitionTimeout={400}>
                        <AccordionItem 
                            header={
                                <AccordionHeader 
                                text={projectData.acf.accordion.header_insights}
                                />} initialEntered>
                            <div dangerouslySetInnerHTML={{__html: projectData.acf.accordion.content_insights}}></div>
                        </AccordionItem>

                        <AccordionItem 
                            header={
                                <AccordionHeader 
                                text={projectData.acf.accordion.header_features}
                                /> }>
                            <div dangerouslySetInnerHTML={{__html: projectData.acf.accordion.content_features}}></div>
                        </AccordionItem>

                        <AccordionItem 
                            header={
                                <AccordionHeader 
                                text={projectData.acf.accordion.header_hurdles}
                                /> }>
                            <div dangerouslySetInnerHTML={{__html: projectData.acf.accordion.content_hurdles}}></div>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="cta-container">
                    <NextProjectLink projectsList={projectsList} />
                    <CTAProjectContact />
                </div>
            </section>
        </>
    );
}

export default Project