import React from 'react'
import './TopNavBar.css';
import { Link } from 'react-router-dom'

export default function TopNavBar() {
    return (
        <nav className='top_nav_bar'>
            <Link className='top_nav_bar_home' to='/'>
                <h1 className='top_nav_bar_text' >Home.</h1>
            </Link>
            <Link className='top_nav_bar_photography' to='/photography'>
                <h1 className='top_nav_bar_text' >Photography.</h1>
            </Link>
            {/*
            <Link className='top_nav_bar_blog' to='/blog'>
                <h1 className='top_nav_bar_text'>Blog.</h1>
            </Link>
            */}
        </nav>
    );
}
