import React, { Component } from 'react';
import Products from './Products';
import CustomerZone from './CustomerZone';
import Display from './Display';
import DesignPage from './DesignPage';
//import Nav from './Nav';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
           
           <Products/>
           <h1></h1>
           
        </div> );
    }
}
 
export default Home;
