import React from 'react'

const SkillsList = ( { title, skills } ) => (
    <>
        <h3 className="txt-header">{title}</h3>
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