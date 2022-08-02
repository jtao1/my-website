import React from "react"
import "./TopNavBar.css";

export default function TopNavBar() {
    return (
        <nav className="top_nav_bar">
            <p className="home">Home.</p>
            <p className="photography">Photography.</p>
            <p className="blog">Blog.</p>
        </nav>
    );
}