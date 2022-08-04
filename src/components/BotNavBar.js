import React from 'react'
import './BotNavBar.css';

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
            <div className='left_nav'>
                <a href='./Resume.pdf' download>
                    <button type='button' className='resume_download'>
                        <h1 className='download_text'>Download Resume</h1>
                        <h1 className='update_text'>updated August 2022</h1>
                    </button>
                </a>
                <h1 className='email'>junshentao1@gmail.com</h1>
                <h1 className='phone'>(312)-731-9187</h1>
            </div>
            <div className='right_nav'>
                <button type='button' className='linkedin' onClick={() => openLink('linkedin')}>Linkedin.</button>
                <button type='button' className='twitter' onClick={() => openLink('twitter')}>Twitter.</button>
                <button type='button' className='github' onClick={() => openLink('github')}>Github.</button>
            </div>
        </nav>
    );
}