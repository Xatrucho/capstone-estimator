import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Estimates() {
    const [allEstimates, getAllEstimates] = useState([]);
       
    // componentDidMount() {
    //         fetch('127.0.0.1:3000/estimates/get')
    //         .then(function (res) {
    //         return res.json();
    //         })
    //         .then(function (data) {
    //             console.log(data)
    //             this.setState({
    //             estimates: data,
    //             loading: false
    //     });
    // })


    const getAllEstimates = () => {
        axios.get("localhost:3000/estimates")
        .then(res => {
            setAllEstimates(res.data)
        })
        .catch(error => {
            console.log('An Error has occured while fetching your Estimates', error);
        });
    }
    
        
    //     .catch(error => {
    //         console.log("Error retrieving estimate", error)
    //         this.setState({
    //             error: true,
    //             loading: false
    //         })
    //     })
    // }

    renderEstimates() {
        const estimatesHtml = this.state.estimates.map(estimate => (
            <div className="estimate-wrapper" key={estimate.id}>
                <h3>{estimate.year}</h3>
                <h3>{estimate.make}</h3>
                <h3>{estimate.model}</h3>
                <h3>{estimate.condition}</h3>
            </div>
        ))

        return estimatesHtml
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="estimates-page-wrapper">
                    <h2>Estimates</h2>
                    <div className="estimates-wrapper">
                        <div className="loading">Loading...</div>
                    </div>
                </div>
            )
        }

        else if (this.state.error) {
            return (
                <div className="estimates-page-wrapper">
                    <h2>Estimates</h2>
                    <div className="estimates-wrapper">
                        <div className="error">Error occured... Please try again</div>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div className="estimates-page-wrapper">
                    <h2>Estimates</h2>
                    <div className="estimates-wrapper">
                        {this.renderEstimates()}
                    </div>    
                </div>    
            )
        }
    }
}