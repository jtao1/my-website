import React, { useState } from 'react';
import { useClickAway } from '@uidotdev/usehooks';
import './HomePage.css';
import defaultbg from '../Images/default-img.jpg';
import stocks_chart from '../Images/stocks-chart.png';
import ai_childrenstories from '../Images/aichildrenstories.png';
import garage_sales_tracker from '../Images/garage-sales-tracker.png';
import website_pic from '../Images/website.png';

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
            image: website_pic,
            description: 'Description for Personal Website project.',
            link: 'https://github.com/jtao1/my-website',
        },
    ];

    return (
        <nav className='HomePage'>
            <h1 className='HomePage__ProjectTitle'>Projects</h1>
            <div className='HomePage__ProjectsContainer'>
                {projects.map((project) => (
                    <div
                        key={project.name}
                        className='HomePage__Project'
                        onClick={() => openLink(project)}
                        style={{ backgroundImage: `url(${project.image})` }}
                    >
                        <h2 className='HomePage__ProjectName'>{project.name}</h2>
                    </div>
                ))}

                {selectedProject && (
                    <div className='HomePage__Popup' ref={ref}>
                        <h2 className='HomePage__DescriptionTitle'>{selectedProject.name}</h2>
                        <h3 className='HomePage__Description'>{selectedProject.description}</h3>
                        <a className='HomePage__Link' href={selectedProject.link} target='_blank' rel='noopener noreferrer'>
                            View on GitHub
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}