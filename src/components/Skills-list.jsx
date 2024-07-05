import React from 'react'
import { displayDevicon } from '../utilities/Utilities'

const SkillsList = ( { title, skills } ) => (
    <>
        <div className="stack-container">
            <h2 className="txt-header">{title}</h2>
            {skills.map((skill, index) => {
                const formattedLabel = skill.label.replace(/\s+/g, '\u00A0');
                return (
                    <div key={index} className="stack-card">
                        <p>{formattedLabel}</p>
                        {displayDevicon(skill.value)}
                    </div>
                )
            })}
        </div>
    </>
)

export default SkillsList