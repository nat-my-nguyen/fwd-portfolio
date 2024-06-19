import { 
    featuredImage,
    getLabels,
    techStackLabels,
    progToolsLabels,
    collaborationLabels } from '../utilities/Utilities'
import { Link } from 'react-router-dom'

const ProjectsList = ( { projects } ) => {
    return (
        <>
            {projects.map(post => (
                <article key={post.id} id={`post-${post.id}`} className="project-item">
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
                        <Link to={`/projects/${post.slug}`} className="link-btn">More Details</Link>
                    </div>
                </article>
            ))}
        </>
    )
}

export default ProjectsList