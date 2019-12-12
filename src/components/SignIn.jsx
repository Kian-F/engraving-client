import React, { Component } from 'react';
import axios from 'axios';
import {Form, Button, Col} from 'react-bootstrap';


const SERVER_URL = "http://localhost:3000/users/index";

class SignIn extends Component {
    constructor() {
        super();
        this.state = { 
            email: '',
            password: '',
            errorMessage: ''
         }
    }
    _handleSubmit = event => {
        event.preventDefault();
    axios.post(SERVER_URL, {
        "auth": {
          "email": this.state.email,
          "password": this.state.password,
        }
      }).then( res => {
        localStorage.setItem("jwt", res.data.jwt)
        console.log(res.data);
        console.log("user logged in");
        this.props.history.push('/') 
      })
      .catch( err => {
        window.alert("Invalid email and/or password");
        this.setState({ errorMessage: 'Invalid email or password'});
      })
    }

    _handleInputEmail = event => {
        this.setState({email: event.target.value})
    }
    
    _handleInputPassword = event => {
        this.setState({password: event.target.value})
    }


    render() {
        return (
          <Form id="login">
    
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" required onInput={this._handleInputEmail}/>
              </Form.Group>
            </Form.Row>
    
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" required onInput={this._handleInputPassword} />
              </Form.Group>
            </Form.Row>
    
            <Button type="submit" onClick={this._handleSubmit} >
              Log In
            </Button>
    
          </Form>
        );
      }
}


 
export default SignIn;