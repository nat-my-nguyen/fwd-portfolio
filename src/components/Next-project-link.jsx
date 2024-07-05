import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { featuredImage } from '../utilities/Utilities'

const NextProjectLink = ({ projectsList }) => {
    const { slug } = useParams()
    const [nextProject, setNextProject] = useState(null)

    useEffect(() => {
        if ( projectsList.length > 0 ) {
            const currentIndex = projectsList.findIndex(project => project.slug === slug)
            const nextIndex = (currentIndex + 1) % projectsList.length
            setNextProject(projectsList[nextIndex])
        }
    }, [slug, projectsList])

    if ( !nextProject ) {
        return null
    }

    return (
        <Link to={`/projects/${nextProject.slug}`} className="link-btn next-link">
            View Next: {nextProject.title.rendered}
            {nextProject.featured_media !== 0 && nextProject._embedded &&
                <figure className="featured-image__next-preview" dangerouslySetInnerHTML={featuredImage(nextProject._embedded['wp:featuredmedia'][0])}></figure>
            }
        </Link>
    )
}

export default NextProjectLink