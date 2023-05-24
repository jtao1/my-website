import React from 'react';
//import AboutMeSection from './Sections/AboutMeSection.js';
import SkillsSection from './Sections/SkillsSection.js';
import EducationSection from './Sections/EducationSection';
import WorkExperienceSection from './Sections/WorkExperienceSection';
import ProjectsSection from './Sections/ProjectsSection.';

export default function HomePage() {
    return (
        <div>
            {/*<AboutMeSection />*/}
            <SkillsSection />
            <EducationSection />
            <WorkExperienceSection />
            <ProjectsSection />
        </div>
    );
}

