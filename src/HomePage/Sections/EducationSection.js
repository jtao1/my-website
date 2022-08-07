import React from 'react';
import './EducationSection.css';

export default function EducationSection() {
    return (
        <div className='education'>
            <h1 className='education_title'>Education</h1>
            <div className='education_contents'>
                <h1 className='education_university'>Purdue University (Main Campus)</h1>
                <h1 className='education_degree'>B.S. in Data Science</h1>
                <ul>
                    <li>GPA: 3.67/4.00</li>
                </ul>            
            </div>
            <div className='education_time'>
                <h1>August 2021 - May 2025</h1>
            </div>
        </div>
    )
}
