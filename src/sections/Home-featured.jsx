import ProjectsList from '../components/Projects-list'
import { Link } from 'react-router-dom';

const FeaturedProjects = ( { data } ) => {
    /* Array of specific project IDs to display
    35 = JS game, 38 = movie DB */
    const specificProjectIDs = [35, 38];

    /* Filter posts by specific project IDs */
    const specificPosts = data.filter(post => specificProjectIDs.includes(post.id));

    return (
        <section id="featured" className="projects-container featured-section">
            <h2>Featured Projects</h2>
            {/* Output specific projects, limited to two on Home Page */}
            <ProjectsList projects={specificPosts} />
            <div>
                <Link to='/projects' className="link-btn dark">Visit the Projects</Link>
            </div>
        </section>
    )
}

export default FeaturedProjects