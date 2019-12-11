import React, { Component } from 'react';
import Products from './Products';
//import Nav from './Nav';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            
           <Products/>
           <h1>Hi From Home</h1>
        </div> );
    }
}
 
export default Home;
