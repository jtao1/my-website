import React from 'react'
import './TopNavBar.css';
import { Link } from 'react-router-dom';
import signature from '../Images/signature.png'

export default function TopNavBar() {
    return (
        <nav className='TopNavBar'>
            <Link className='TopNavBar__Home' to='/'>
                <h1 className='TopNavBar__Text' >Home.</h1>
            </Link>
            <img className='TopNavBar__Signature' src={signature} alt='signature' />
            <Link className='TopNavBar__Photography' to='/photography'>
                <h1 className='TopNavBar__Text'>Photography.</h1>
            </Link>
        </nav>
    );
}
