import React from 'react';
import './AboutMeSection.css';

export default function AboutMeSection() {
    return (
        <div className='about_me'>
            <h1 className='about_me_title'>About me</h1>
            <div className='about_me_contents'>
                <h1 className='about_me_name'>Junshen Tao</h1>
                <h1 className='about_me_description'>Analytically minded self starter that is seeking a data science internship. 
                    Willing to take on new challenges while learning about data. 
                    Currently a sophomore at Purdue University studying data science
                </h1>    
            </div>
        </div>
    )
}