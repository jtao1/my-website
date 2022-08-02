import React from "react"
import "./ProjectsSection.css"

export default function ProjectsSection() {
    return (
        <div className="projects_section">
            <h1 className="section_title">Projects</h1>
            <div className="contents">
                <h1 className="project_title">Personal Website</h1>
                <ul>
                    <li>Built with React, designed on Figma, utilized React Router</li>
                </ul>
                <h1 className="project_title">Quiz Learning System</h1>
                <ul>
                    <li>Utilized Java: file i/o, sockets, swing</li>
                    <li>Worked with others to divide the project equally and set biweekly goals</li>
                </ul>    
            </div>
        </div>
    )
}