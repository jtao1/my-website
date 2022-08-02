import React from "react"
import "./EducationSection.css"

export default function EducationSection() {
    return (
        <div className="education_section">
            <h1 className="section_title">Education</h1>
            <div className="contents">
                <h1 className="university">Purdue University (Main Campus)</h1>
                <h1 className="degree">B.S. in Data Science</h1>
                <ul>
                    <li>GPA: 3.67/4.00</li>
                </ul>            
            </div>
            <div className="time">
                <h1>August 2021 - May 2025</h1>
            </div>
        </div>
    )
}
