import React from 'react';
import './ProjectsSection.css';

export default function ProjectsSection() {
    return (
        <div className='projects'>
            <h1 className='projects_title'>Projects</h1>
            <div className='projects_contents'>
                <h1 className='projects_project_title'><a className='projects_links' href='https://jtao1-stocks-visualization-stocks-display-roe5sa.streamlitapp.com/'>Stock Visualization</a></h1>
                <ul className='projects_project_info'>
                    <li>Displayed multiple stock charts with technical indicators simultaneously based on stock input</li>
                    <li>Gave users customization options with line colors and indicator length</li>
                    <li>Built with Python (matplotlib, pandas, numpy, streamlit), utilized google cloud storage</li>
                </ul>    
                <h1 className='projects_project_title'>Personal Website</h1>
                <ul>
                    <li>Built with React, designed on Figma, utilized React Router, deployed on Heroku</li>
                </ul>
                <h1 className='projects_project_title'>Quiz Learning System</h1>
                <ul className='projects_project_info'>
                    <li>Utilized Java: file i/o, sockets, swing</li>
                    <li>Worked with others to divide the project equally and set biweekly goals</li>
                </ul>
            </div>
        </div>
    )
}