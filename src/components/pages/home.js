import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-wrapper">

            {/* <div className="image-wrapper">
                <img src=""alt="car">
            </div> */}

                <div>
                    <h1 id='header'>Welcome to SwordFish Customs</h1>
                </div>

            <div className="header">

            </div>

            <p> This site is under construction 
            but you can still add an estimate.
             This site will have links to other companies.  Please come back soon.</p>

            {/* <div className="home-buttons-wrapper">
                <Link exact to="/estimates">
                    Make an appointment.
                </Link>

                <Link to="/estimates">
                    FREE ONLINE ESTIMATES
                </Link>
                <Link to="/estimates">
                    About us
                </Link>
            </div> */}

        </div>
       
    )
}