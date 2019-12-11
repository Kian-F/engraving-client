import React, { Component } from 'react';
import Products from './Products'
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
