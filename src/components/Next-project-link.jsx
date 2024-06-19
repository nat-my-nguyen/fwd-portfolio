import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

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
        <Link to={`/projects/${nextProject.slug}`} className="link-btn">
            {nextProject.title.rendered}
        </Link>
    )
}

export default NextProjectLink