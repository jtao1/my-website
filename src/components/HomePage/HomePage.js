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
            description: `This was my final project for my databases class where I used Holoviz Panel and Google Cloud's MYSQL.
                It allowed the user to interact with the database and provided a summary statistics of the KPOP idols.`,
            link: 'https://github.com/jtao1/idoldb',
        },
        {
            name: 'AI Children Stories',
            image: ai_childrenstories,
            description: `This app was made for Anaconda's 2023 data app contest, where it won second place and was my introduction to using Holoviz Panel. 
                I incorporated OpenAI's ChatGPT and DALL-E to allow for text and image generation based on user-created prompts.`,
            link: 'https://github.com/jtao1/ai_children_stories',
        },
        {
            name: 'Garage Sales Tracker',
            image: garage_sales_tracker,
            description: `In the summer of 2023, I attempted to flip items from garage sales. 
                One issue that I came across was that there were multiple sites for sites tracking garage sales, 
                which made it time-consuming to mark out where I wanted to go for the day; this was my motivation for creating this app.
                I aggregated the data from 3 different websites and displayed them all using Folium and Panel`,
            link: 'https://github.com/jtao1/garage-sales-tracker',
        },
        {
            name: 'Stocks Chart',
            image: stocks_chart,
            description: `This was one of the first personal projects I ever made, 
                which I began on the summer after freshman year. 
                I learned to use Python along with its packages including Pandas, Matplotlib, and Streamlit.`,
            link: 'https://github.com/jtao1/stocks-visualization',
        },
        {
            name: 'Personal Website',
            image: website_pic,
            description: `This is the website you are looking at right now! 
                This project has taught me how to use ReactJS, HTML, and CSS while pushing me creatively.`,
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
                        <div className='HomePage__PopupImage' style={{ backgroundImage: `url(${selectedProject.image})` }}></div>
                    </div>
                )}
            </div>
        </nav>
    );
}