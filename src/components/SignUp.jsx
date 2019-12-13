import React, { Component } from 'react';
import axiox from 'axios';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            email:'',
            phoneNumber:'',
            adress:''
         }
    }
    
    _handleEmailInput = event => {
        this.setState({email: EventTarget.value} )
    }

    render() { 
        return ( <div>This is signup</div> );
    }
}
 
export default SignUp;