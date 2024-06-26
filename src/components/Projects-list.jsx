import { featuredImage } from '../utilities/Utilities'
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
                        <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
                        <h3 className="subtitle">{post.acf.subtitle}</h3>

                        <h3 className="txt-header">Project Overview:</h3>
                        <p className="proj-overview">{post.acf.overview}</p>

                        <h3 className="txt-header">Collaboration:</h3>
                        <p className="proj-collaboration">{post.acf.collaboration.label}</p>

                        <h3 className="txt-header">Tech Stack:</h3>
                        <p className="proj-stacks">
                            {post.acf.tech_skills.map(skill => skill.label).join(', ')}
                        </p>

                        <h3 className="txt-header">Programs & Tools:</h3>
                        <p className="proj-stacks">
                            {post.acf.prog_skills.map(skill => skill.label).join(', ')}
                        </p>
                        
                        <Link to={`/projects/${post.slug}`} className="link-btn">More Details</Link>
                    </div>
                </article>
            ))}
        </>
    )
}

export default ProjectsList