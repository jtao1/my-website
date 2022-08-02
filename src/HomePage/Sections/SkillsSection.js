import React from "react"
import "./SkillsSection.css"

export default function SkillsSection() {
    return (
        <div className="skills_section">
            <h1 className="section_title">Skills</h1>
            <div className="contents">
                <h1 className="examples">
                    <span className="descriptor">Languages: </span> 
                    Python, R, Java, HTML, CSS, JavaScript
                </h1>
                <h1 className="examples">
                    <span className="descriptor">Frameworks and libraries: </span>    
                    Pandas, Numpy, Streamlit, React
                </h1>
            </div>
        </div>
    )
}