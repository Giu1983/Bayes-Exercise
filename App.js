import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../Containers/App.css'
import Datafilter from '../Components/Datafilter'
import Data from '../Components/Data'
import Home from './Home'
import { Button } from 'react-bootstrap'; 



class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); 
  }
    handleClick = (e) => {
     e.preventDefault(); 
     console.log('Click on the Button')
    
   }
  

   render() {
    return ( 
     <Router>
      <div>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/Data" >Data</Link></li>
        <li><Link to="/FetchData">FetchData</Link></li>
        <li><Link to="/Datafilter">Data Filter</Link></li>
  
        <Route exact path="/" component={Home} />
        <Route path="/Data" render={({ match }) =>(
          <Data match={match} />
        )} />

        <Button variant="primary" size="lg" onClick={this.handleClick}>Submit</Button>
        <a href="#" onClick={this.handleClick}>Submit</a>
      </div>
    </Router>
    
  );
}
}

export default App;
