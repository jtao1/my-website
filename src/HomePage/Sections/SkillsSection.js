import React from 'react';
import './SkillsSection.css';

export default function SkillsSection() {
    return (
        <div className='skills'>
            <h1 className='skills_title'>Skills</h1>
            <div className='skills_contents'>
                <h1 className='skills_examples'>
                    <span className='skills_descriptor'>Languages: </span> 
                    Python, R, Java, HTML, CSS, JavaScript
                </h1>
                <h1 className='skills_examples'>
                    <span className='skills_descriptor'>Frameworks and libraries: </span>    
                    Pandas, Numpy, Streamlit, React
                </h1>
            </div>
        </div>
    )
}