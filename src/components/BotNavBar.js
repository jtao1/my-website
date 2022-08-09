import React from 'react';
import './BotNavBar.css';
import Resume from '../Resume.pdf';

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
        <nav className='bot_nav_bar'>
            <div className='bot_nav_bar_left_nav'>
                <a href={Resume} download='Junshen_Tao_Resume.pdf'>
                    <div className='bot_nav_bar_resume_download'>
                        <h1 className='bot_nav_bar_download_text'>Download Resume</h1>
                        <h1 className='bot_nav_bar_update_text'>updated August 2022</h1>
                    </div>
                </a>
                <h1 className='bot_nav_bar_email'>junshentao1@gmail.com</h1>
                <h1 className='bot_nav_bar_phone'>(312)-731-9187</h1>
            </div>
            <div className='bot_nav_bar_right_nav'>
                <button type='button' className='bot_nav_bar_linkedin' onClick={() => openLink('linkedin')}>Linkedin.</button>
                <button type='button' className='bot_nav_bar_twitter' onClick={() => openLink('twitter')}>Twitter.</button>
                <button type='button' className='bot_nav_bar_github' onClick={() => openLink('github')}>Github.</button>
            </div>
        </nav>
    );
}