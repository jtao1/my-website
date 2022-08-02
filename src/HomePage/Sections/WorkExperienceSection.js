import React from "react"
import "./WorkExperienceSection.css"

export default function WorkExperienceSection() {
    return (
        <div className="work_experience_section">
            <h1 className="section_title">Work Experience</h1>
            <div className="contents">
                <h1 className="employer">McDonalds</h1>
                <h1 className="job_title">Crew Member</h1>
                <ul className="info">
                    <li>Improved the store to rank 2nd among 25 local McDonalds for the average order completion time</li>
                    <li>Trained and mentored 2 new employees in multiple positions</li>
                    <li>Completed daily tasks of cleaning the store and restocking inventory</li>
                    <li>Helped fulfill customer orders in the cashier, drive-thru, and food prep positions</li>
                </ul>
            </div>
            <div className="time">
                <h1>May 2022 - August 2022</h1>
            </div>
        </div>
    )
}
