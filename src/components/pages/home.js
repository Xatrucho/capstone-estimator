import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-wrapper">
            <div>
                <h1>Welcome to SwordFish Customs</h1>
            </div>

            <div className="home-buttons-wrapper">
                <Link exact to="/estimates">
                    Make an appointment.
                </Link>

                <Link to="/estimates">
                    FREE ONLINE ESTIMATES
                </Link>
                <Link to="/estimates">
                    About us
                </Link>
            </div>

        </div>
       
    )
}