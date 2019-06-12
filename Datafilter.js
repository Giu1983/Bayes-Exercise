import React, { Component } from 'react'; 

class Datafilter extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           dataFilter : ""
       }
   }
   handleChange = (e) => {
       this.setState({
           dataFilter: e.target.value
       })
       this.props.onChange(e.target.value)
   }
   render () {
       return(
           <div>
               <label htmlFor="filter">Filter data</label>
               <input type="text" id="filter" value={this.state.dataFilter} onChange={this.handleChange} />
           </div>
       )
   }
}