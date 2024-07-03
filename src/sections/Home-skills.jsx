import SkillsList from '../components/Skills-list'
import CTAAboutContact from '../components/CTA-about-contact'

const HomeSkills = ( {data } ) => {
    return (
        <>
            <section className="skills-section">
                <h2>My Skills</h2>
                <SkillsList
                    title="Tech Stack"
                    skills={data.acf.tech_skills}
                />
                <SkillsList
                    title="Programs & Tools"
                    skills={data.acf.prog_skills}
                    />

            </section>
            <CTAAboutContact />
        </>
    )
}

export default HomeSkills