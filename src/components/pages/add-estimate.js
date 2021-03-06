import React, { Component } from 'react';
// import '../images/daniel-deluxe-jpeg'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            yearInput: "",
            makeInput: "",
            modelInput: "",
            conditionInput: "",
            loading: false,
            error: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()

        this.setState({
            loading: true,
            error: false
        })

        fetch("https://mepv-capstone-back-end.herokuapp.com/add-estimate", { 
            method: "POST",
            headers: { "content-type": "application/json"},
            body: JSON.stringify({
                year: this.state.yearInput,
                make: this.state.makeInput,
                model: this.state.modelInput,
                condition: this.state.conditionInput
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                this.props.history.push("/estimates")
            }
        })
        .catch(error => {
            console.log("Error adding estimate", error)

            this.setState({
                loading: false,
                error: true
            })
        })
    }

    render() {
        return (
            <div className="add-estimate-wrapper">

                    <h1>SwordFish Customs</h1>
                
                    <h2>
                        Add Estimate
                    </h2>
             

                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        placeholder="year"
                        name="yearInput"
                        value={this.state.yearInput}
                        onChange={this.handleChange}
                    />

                    <input 
                        type="text"
                        placeholder="make"
                        name="makeInput"
                        value={this.state.makeInput}
                        onChange={this.handleChange}
                    />

                    <input 
                        type="text"
                        placeholder="model"
                        name="modelInput"
                        value={this.state.modelInput}
                        onChange={this.handleChange}
                    />

                    <input 
                        type="text"
                        placeholder="condition"
                        name="conditionInput"
                        value={this.state.conditionInput}
                        onChange={this.handleChange}
                    />

                    <button type="submit" disabled={this.state.loading}>SUBMIT</button>
                </form>

                {this.state.loading ? <div className="loading">Submitting Estimate...</div> : null}

                {this.state.error ? <div className="error">Error ocurred... Please try again</div> : null}
            </div>
        )
    }
}