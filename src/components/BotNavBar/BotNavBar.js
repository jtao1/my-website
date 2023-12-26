import React from 'react';
import './BotNavBar.css';
import Resume from '../Images/Resume.pdf';

export default function BotNavBar() {

    function openLink(site) {
        if (site === 'linkedin') {
            window.open('https://www.linkedin.com/in/junshen-tao/');
        } else if (site === 'twitter') {
            window.open('https://twitter.com/JunshenTao');
        } else if (site === 'github') {
            window.open('https://github.com/jtao1');
        }
    }


    return (
        <nav className='BotNavBar'>
            <div className='BotNavBar__LeftNav'>
                <a href={Resume} download='Junshen_Tao_Resume.pdf'>
                    <div className='BotNavBar__ResumeDownload'>
                        <h1 className='BotNavBar__DownloadText'>Download Resume</h1>
                        <h1 className='BotNavBar__UpdateText'>updated May 2023</h1>
                    </div>
                </a>
                <h1 className='BotNavBar__Item'>junshentao1@gmail.com</h1>
                <h1 className='BotNavBar__Item'>(312)-731-9187</h1>
            </div>
            <div className='BotNavBar__RightNav'>
                <button type='button' className='BotNavBar__Item' onClick={() => openLink('linkedin')}>Linkedin.</button>
                <button type='button' className='BotNavBar__Item' onClick={() => openLink('twitter')}>Twitter.</button>
                <button type='button' className='BotNavBar__Item' onClick={() => openLink('github')}>Github.</button>
            </div>
        </nav>
    );
}