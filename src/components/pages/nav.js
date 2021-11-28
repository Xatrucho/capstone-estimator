import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
            <Navlink exact path to="/">
                Home
            </Navlink>

                <NavLink to="/add-estimates">Add Estimates</NavLink>
                <NavLink to="/estimates">Estimates</NavLink>
                {/* <button>Home</button> */}
                {/* <button>Add Estimates</button>
                <button>Estimates</button> */}
                {false ? <button>Add Estimate</button> : null }
            </div>
        );
    }
}