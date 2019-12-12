import React, { Component } from 'react';
import SignIn from './SignIn';


class CustomerZone extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <SignIn/>
                <h1>customerzone</h1>
            </div>
         );
    }
}
 
export default CustomerZone;