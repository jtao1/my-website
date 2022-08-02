import React from "react";
import TopNavBar from "../components/TopNavBar.js";
import AboutMeSection from "./Sections/AboutMeSection.js"
import SkillsSection from "./Sections/SkillsSection.js"
import EducationSection from "./Sections/EducationSection";
import WorkExperienceSection from "./Sections/WorkExperienceSection";
import ProjectsSection from "./Sections/ProjectsSection.";
import BotNavBar from "../components/BotNavBar.js";
import "./HomePage.css";

export default function HomePage() {
    return (
        <div>
            <TopNavBar/>
            <AboutMeSection />
            <SkillsSection />
            <EducationSection />
            <WorkExperienceSection />
            <ProjectsSection />
            <BotNavBar />
        </div>
    );
}