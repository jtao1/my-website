import React from 'react'
import {Link} from 'react-router-dom'
import './Blog.css'
/*
function postRoute(post) {
    return (
        <Route path={`/Blog/McDonalds`} element={McDonalds} /> 
    )
}

function postContainer(post, title, date) {
    return (
        <Link className='blog_container' to={`/McDonalds`}>
            <div>
                <h1 className='blog_title'>{title}</h1>
                <h1 className='blog_date'>{date}</h1>
            </div>
        </Link>
    )
}
*/

export default function Blog() {
    return (
        <div className='blog_content'>
            <Link className='blog_container' to='/McDonalds'>
                    <h1 className='blog_title'>McDonalds</h1>
                    <h1 className='blog_date'>August</h1>
            </Link>            
            <div className='blog_container'><h1>awdawd</h1></div>
        </div>
    )
}