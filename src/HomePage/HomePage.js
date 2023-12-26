import React, { useState } from 'react';
import { useClickAway } from '@uidotdev/usehooks';
import './HomePage.css';
import defaultbg from './images/default-img.jpg';
import stocks_chart from './images/stocks-chart.png';
import ai_childrenstories from './images/aichildrenstories.png';
import garage_sales_tracker from './images/garage-sales-tracker.png';

export default function HomePage() {
    const [selectedProject, setSelectedProject] = useState(null);

    const ref = useClickAway(() => {
        setSelectedProject(null);
    });


    const openLink = (project) => {
        setSelectedProject(project);
    };

    const projects = [
        {
            name: 'IdolDB',
            image: defaultbg,
            description: 'Description for IdolDB project.',
            link: 'https://github.com/jtao1/idoldb',
        },
        {
            name: 'AI Children Stories',
            image: ai_childrenstories,
            description: 'Description for AI Children Stories project.',
            link: 'https://github.com/jtao1/ai_children_stories',
        },
        {
            name: 'Garage Sales Tracker',
            image: garage_sales_tracker,
            description: 'Description for Garage Sales Tracker project.',
            link: 'https://github.com/jtao1/garage-sales-tracker',
        },
        {
            name: 'Stocks Chart',
            image: stocks_chart,
            description: 'Description for Stocks Chart project.',
            link: 'https://github.com/jtao1/stocks-visualization',
        },
        {
            name: 'Personal Website',
            image: defaultbg,
            description: 'Description for Personal Website project.',
            link: 'https://github.com/jtao1/my-website',
        },
    ];

    return (
        <nav className='home_page'>
            <h1 className='home_page_project_title'>Projects</h1>
            <div className='home_page_projects_container'>
                {projects.map((project) => (
                    <div
                        key={project.name}
                        className='home_page_project'
                        onClick={() => openLink(project)}
                        style={{ backgroundImage: `url(${project.image})` }}
                    >
                        <h2 className='home_page_project_name'>{project.name}</h2>
                    </div>
                ))}

                {selectedProject && (
                    <div className='home_page_popup' ref={ref}>
                        <h2 className='home_page_description_title'>{selectedProject.name}</h2>
                        <h3 >{selectedProject.description}</h3>
                        <a className='home_page_link' href={selectedProject.link} target='_blank' rel='noopener noreferrer'>
                            View on GitHub
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}