import React from 'react'
import { NavLink } from "react-router-dom"

export default function Nav() {
    return (
        <div className="nav-wrapper">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/add-estimates">Add Estimates</NavLink>
            <NavLink to="/estimates">Estimates</NavLink>
        </div>
    )
}