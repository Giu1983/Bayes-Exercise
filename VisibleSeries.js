import React, { Component } from 'react'

import { Series } from './Series'

class VisibleSeries extends Component {
    constructor(props) {
        super(props)
        this.state = {
            series: [], 
            filteredSeries: []
        }
    }
    componentWillMount(){
        this.setState({
             Series,
            filteredSeries: Series 
        })
    }
    filterSeries = (seriesFilter) =>{
        let filteredSeries = this.state.series
        filteredSeries = filteredSeries.filter((series) => {
            let seriesName = series.Name.toLowerCase() 
            return seriesName.indexOf(
                seriesFilter.toLowerCase()) !== -1
        })
        this.setState({
            filteredSeries : this.filteredSeries
        })
        }
        render(){
            return(
                <Series series={this.state.filteredSeries} match={this.props.match} onChange={this.filteredSeries}  />
            )
        }
    }

    export default VisibleSeries; 
