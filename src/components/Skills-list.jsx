import React from 'react'
import { displayDevicon } from '../utilities/Utilities'

const SkillsList = ( { title, skills } ) => (
    <>
        <h2 className="txt-header">{title}</h2>
        <div className="stack-container">
            {skills.map((skill, index) => (
                <div key={index} className="stack-card">
                    <p>{skill.label}</p>
                    {displayDevicon(skill.value)}
                </div>
            ))}
        </div>
    </>
)

export default SkillsList