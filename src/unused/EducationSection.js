import React from 'react';
import './EducationSection.css';

export default function EducationSection() {
    return (
        <div className='education'>
            <h1 className='education_title'>Education</h1>
            <div className='education_contents'>
                <h1 className='education_university'>Purdue University (West Lafayette)</h1>
                <h1 className='education_degree'>B.S. in Computer Science and Data Science with 3.37 gpa, graduating December 2024</h1>
            </div>
            {/*<div className='education_time'>
                <h1>August 2021 - December 2024</h1>
            </div>*/}
        </div>
    )
}
