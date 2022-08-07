import React from 'react'
import './TopNavBar.css';
import { Link } from 'react-router-dom'

export default function TopNavBar() {
    return (
        <nav className='top_nav_bar'>
            <Link className='top_nav_bar_home_container' to='/'>
                <h1 className='top_nav_bar_home' >Home.</h1>
            </Link>
            <Link className='top_nav_bar_photography_container' to='/photography'>
                <h1 className='top_nav_bar_photography' >Photography.</h1>
            </Link>
            <h1 className='top_nav_bar_blog'>Blog.</h1>
        </nav>
    );
}
