import { featuredImage } from '../utilities/Utilities'
import { Link } from 'react-router-dom'

const ProjectsList = ( { projects } ) => {
    return (
        <>
            {projects.map(post => (
                <article key={post.id} className="project-item">
                    <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
                    <h3 className="subtitle">{post.acf.subtitle}</h3>
                    {post.featured_media !== 0 && post._embedded &&
                        <figure className="featured-image" dangerouslySetInnerHTML={featuredImage(post._embedded['wp:featuredmedia'][0])}></figure>
                    }
                    <section className="project-content">

                        <h3 className="txt-header">Project Overview:</h3>
                        <p className="proj-overview">{post.acf.overview}</p>

                        <h3 className="txt-header">Collaboration:</h3>
                        <p className="proj-collab">{post.acf.collaboration.label}</p>

                        <h3 className="txt-header">Tech Stack:</h3>
                        <p className="proj-stacks">
                            {post.acf.tech_skills.map(skill => skill.label).join(', ')}
                        </p>

                        <h3 className="txt-header">Programs & Tools:</h3>
                        <p className="proj-stacks">
                            {post.acf.prog_skills.map(skill => skill.label).join(', ')}
                        </p>
                    </section>
                        
                    <Link to={`/projects/${post.slug}`} className="link-btn dark">More Details</Link>
                </article>
            ))}
        </>
    )
}

export default ProjectsList