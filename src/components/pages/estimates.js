import React, { Component } from 'react'

export default class Estimates extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estimates: [],
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        fetch("")
        .then(res => res.json())
        .then(data => {
            this.setState({
                estimates: data,
                loading: false
            })
        })
        .catch(error => {
            console.log("Error retrieving estimate", error)
            this.setState({
                error: true,
                loading: false
            })
        })
    }

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