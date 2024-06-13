import { 
    restBase,
    featuredImage,
    getLabels,
    techStackLabels,
    progToolsLabels,
    collaborationLabels } from '../utilities/Utilities'
import Loading from '../utilities/Loading'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const FeaturedProjects = () => {
    const restPath = restBase + 'posts?_embed'
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
                setLoadStatus(true)
            } else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])
    
    return (
        <>
        { isLoaded ?
            <section className="featured-container" id={`post-${restData.id}`}>
                <h2>Featured Projects</h2>
                {restData.map(post =>
                    <article key={post.id} id={`post-${post.id}`} className="featured-item">
                        {post.featured_media !== 0 && post._embedded &&
                            <figure className="featured-image" dangerouslySetInnerHTML={featuredImage(post._embedded['wp:featuredmedia'][0])}></figure>
                        }
                        <div className="project-content">
                            <h3>{post.title.rendered}</h3>
                            <h4 className="subtitle">{post.acf.subtitle}</h4>
                            <p className="proj-overview">
                                <span className="txt-header">Project Overview: </span>
                                {post.acf.overview}
                            </p>
                            <p className="proj-stacks">
                                <span className="txt-header">Tech Stack: </span>
                                {getLabels(post.acf.tech_stack, techStackLabels).join(', ')}
                            </p>
                            <p className="proj-stacks">
                                <span className="txt-header">Programs & Tools: </span>
                                {getLabels(post.acf.prog_tools, progToolsLabels).join(', ')}
                            </p>
                            <p className="proj-collaboration">
                                <span className="txt-header">Collaboration: </span>
                                {collaborationLabels[post.acf.collaboration]}
                            </p>
                            <Link to={`/blog/${post.slug}`} className="more-details-btn">
                                More Details
                            </Link>
                        </div>
                    </article>
                )}
            </section>       
        : 
            <Loading /> 
        }
        </>            
    )
}

export default FeaturedProjects