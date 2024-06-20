import React from 'react'

const SkillsList = ( { title, skills } ) => (
    <>
        <h2 className="txt-header">{title}</h2>
        <div className="stack-container">
            {skills.map((tool, index) => (
                <div key={index} className="stack-card">
                    <p>{tool}</p>
                </div>
            ))}
        </div>
    </>
);

export default SkillsList