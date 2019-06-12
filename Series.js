import React from 'react'
import { Route, Link } from 'react-router-dom'
import Data from '../Components/Data'
import Datafilter from '../Components/Datafilter'

const Series = ({ series, match, onChange }) => {
    return(
        <div>
            <h1>Series</h1>
            <Series onChange={onChange} />
            <ul>
                {series.map((series) => {
                    let path = Series(series, match.url)
                    return (
                        <li key={series.id}>
                            <p><Link to={path}>{series.date_start} {series.date_end}</Link></p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}