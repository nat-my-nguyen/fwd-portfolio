import ProjectsList from '../components/Projects-list'

const FeaturedProjects = ( { data } ) => {
    //Array of specific project IDs to display
    //35 = JS game, 38 = movie DB
    const specificProjectIDs = [35, 38];

    //Filter posts by specific project IDs
    const specificPosts = data.filter(post => specificProjectIDs.includes(post.id));

    return (
        <section className="projects-container" id={`post-${data.id}`}>
            <h2>Featured Projects</h2>
            {/* Output specific projects, limited to two on Home Page */}
            <ProjectsList projects={specificPosts} />
        </section>
    )
}

export default FeaturedProjects