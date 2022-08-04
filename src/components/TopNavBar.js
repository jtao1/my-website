import React from 'react'
import './TopNavBar.css';
import {Link} from 'react-router-dom'

export default function TopNavBar() {
    return (
        <nav className='top_nav_bar'>
            <Link className='home' to='/'>
                <p>Home.</p>
            </Link>
            <Link className='photography' to='/photography'>
                <p>Photography.</p>
            </Link>
            <p className='blog'>Blog.</p>
        </nav>
    );
}
