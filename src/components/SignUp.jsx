import React, { Component } from 'react';
import axios from 'axios';
import {Form, Col,Button} from 'react-bootstrap'; 


const SERVER_URL_Token = "http://localhost:3000/user/token";
const SERVER_URL = "http://localhost:3000/users";

class SignUp extends Component {
    constructor() {
        super();
        this.state = { 
            name:'',
            password:'',
            password_confirmation:'',
            email:'',
            phone_Number:'',
            address:''
         }
    }
    
    _handleEmailInput = event => {
        this.setState({email: EventTarget.value} )
    }
    _handleNameInput = event => {
        this.setState({name: event.target.value})
    }
    _handlePasswordInput = event => {
        this.setState({password: event.target.value})
    }
    _handlePasswordConfInput = event => {
        this.setState({password_confirmation: event.target.value})
    }
    _handlePhoneNumberInput = event => {
        this.setState({phoneNumber: event.target.value})
    }
    _handleAdressInput = event => {
        this.setState({address: event.target.value})
    }

    _handleSubmit = event =>{
        event.preventDefault();
        this.createUser();
        this.props.history.push('/Products');
        

    }

    createUser = event => {
        axios.post(SERVER_URL,{
            user:{name: this.state.name, password: this.state.password, 
                password_confirmation: this.state.password_confirmation, email: this.state.email,
                phoneNumber: this.state.phone_Number, address: this.state.address}
        }).then(res =>{
            console.log(res);
            
            this.SignIn();
            
        }).catch(error => {console.log(error);
        });
    }

    SignIn = () => {
        axios.post(SERVER_URL_Token, {
          "auth": {
            "email": this.state.email,
            "password": this.state.password,
          }
        }).then( result => {
          console.log(result);
          localStorage.setItem("jwt", result.data.jwt)
          console.log("user logged in");
          this.props.history.push('/Products') 
        })
        .catch( err => {
          this.setState({ errorMessage: 'Invalid email or password'})
        }) 
  
      }

      render() {
        return (
          <div id="page">
            <div id='main' className="signup">
              <div>
              <h2>New Customer</h2>
              <br />
              <Form id="forms" >
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" required onInput={ this._handleNameInput } />
                  </Form.Group>
                </Form.Row>
    
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" required onInput={ this._handleEmailInput } />
                  </Form.Group>
                </Form.Row>
    
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Password" required onInput={ this._handlePasswordInput } />
                  </Form.Group>
                </Form.Row>
    
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridPasswordConfirmation">
                    <Form.Label>Password confirmation:</Form.Label>
                    <Form.Control type="password" placeholder="Confirm password" required onInput={ this._handlePasswordConfInput } />
                  </Form.Group>
                </Form.Row>
    
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Phone number:</Form.Label>
                    <Form.Control type="text" placeholder="000-000-000" onInput={ this._handlePhoneNumberInput } />
                  </Form.Group>
                </Form.Row>
    
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridAddress">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control type="text" placeholder="Street address" onInput={ this._handleAdressInput} />
                  </Form.Group>
                </Form.Row>
    
                <Button id="loginButton" type="submit" onClick={this._handleSubmit} >
              Sign Up
            </Button>
              </Form>
            </div>
          </div>
        </div>
    
        );
      }
}
 
export default SignUp;