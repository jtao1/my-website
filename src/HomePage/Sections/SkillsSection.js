import React from 'react';
import './SkillsSection.css';

export default function SkillsSection() {
    return (
        <div className='skills'>
            <h1 className='skills_title'>Skills</h1>
            <div className='skills_contents'>
                <h1 className='skills_examples'>
                    <span className='skills_descriptor'>Languages: </span> 
                    JavaScript (React), HTML, CSS,  Python, Java SQL, R, C
                </h1>
                <h1 className='skills_examples'>
                    <span className='skills_descriptor'>Frameworks and libraries: </span>    
                    Github, VSCode, Adobe Suite, Excel, Jupyter Notebook, GCP, Heroku, Google Analytics
                </h1>
            </div>
        </div>
    )
}