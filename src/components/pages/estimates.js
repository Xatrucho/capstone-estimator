import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function Estimates() {
    const [allEstimates, setAllEstimates] = useState([]);

    useEffect(() => {
        getAllEstimates();
    }, [])


    const getAllEstimates = () => {
        axios.get("http://localhost:5000/estimates")
        .then(res => {
            console.log(res)
            setAllEstimates(res.data)
        })
        .catch(error => {
            console.log('An Error has occured while fetching your Estimates', error);
        });
    }

   const estimates = () => {
        const estimatesHtml = allEstimates.map(estimate => (
            <div className="estimate-wrapper" key={estimate}>
                <h3>{estimate.year}</h3>
                <h3>{estimate.make}</h3>
                <h3>{estimate.model}</h3>
                <h3>{estimate.condition}</h3>
            </div>
        ))

        return estimatesHtml
    }

    return <div className="estimate-page-wrapper">{estimates()}</div>
}
