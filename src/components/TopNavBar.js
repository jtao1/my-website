import React from 'react'
import './TopNavBar.css';
import { Link } from 'react-router-dom'

export default function TopNavBar() {
    return (
        <nav className='top_nav_bar'>            
            <div className='top_nav_bar_left_nav'>
                <Link className='top_nav_bar_home' to='/'>
                    <h1 className='top_nav_bar_text' >Home.</h1>
                </Link>
            </div>
            <div className='top_nav_bar_center'>
                <img className='top_nav_bar_signature' src={require('./signature.png')} alt='signature'/>
            </div>
            <div className='top_nav_bar_right_nav'>
                <Link className='top_nav_bar_photography' to='/photography'>
                    <h1 className='top_nav_bar_text'>Photography.</h1>
                </Link>
            </div>
            {/*
            <Link className='top_nav_bar_blog' to='/blog'>
                <h1 className='top_nav_bar_text'>Blog.</h1>
            </Link>
            */}
        </nav>
    );
}
