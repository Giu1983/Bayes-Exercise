import React from 'react'

const data = ({ series }) => {
    return (
        <div>
            <h2>{series.name}</h2>
            <p>Start: {series.date_start} - End: {series.date_end}</p>
        </div>
    )
}

export default data; 