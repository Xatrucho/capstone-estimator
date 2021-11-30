import React from 'react';
import { Link } from "react-router-dom"

export default function NavBar()  {
        return (
            <div className='navigation-container'>
                <div className='nav-link-wrapper'>
                        <Link exact to="/">
                        Home
                        </Link>
                
                        <Link to="/add-estimate">
                        Add Estimate
                        </Link>
                        
                        <Link to="/estimates">
                        Estimates
                        </Link>
                
                        {/* {false ? <button>Add Estimate</button> : null} */}                                                                                                                                       
                </div>
            </div> 
        );
    }
        <div className="nav-wrapper">
            <Link exact to="/">Home</Link>
            {/* <NavLink to="/nav">Nav Bar</NavLink> */}
            <Link to="/add-estimates">Add Estimates</Link>
            <Link to="/estimates">Estimates</Link>
        </div>
        
