import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-wrapper">
            <h1>whats going on Car Enthusiasts</h1>
            <div className="home-buttons-wrapper">
                <Link to="/estimates">Make an appointment</Link>
                <Link to="/estimates">FREE ESTIMATES</Link>
            </div>
        </div>
    )
}