import React, { Component } from 'react';
import SignIn from './SignIn';
import Nav from './Nav';
import SignUp from './SignUp';



class CustomerZone extends Component {
    
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Nav/>
                <SignIn history={this.props.history}/>
                <SignUp history={this.props.history}/>

                <h1></h1>
            </div>
         );
    }
}
 
export default CustomerZone;