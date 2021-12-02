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

    // const handleDeleteClick = () => {

    //     axios.delete(`http://127.0.0.1:5000/estimate/delete`)
    //     .then(res => {
    //         setAllEstimatesall.filter(estimate => {
    //             return estimate.id !== id;
    //         }))
    //     })
    //     .catch(error => {
    //         console.log('An error has occured while trying to delete your book.', error);
    //     })
    // }

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
<div
className="header">
    Swordfish Customs
</div>