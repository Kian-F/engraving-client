import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import SignIn from './SignIn';
import axios from 'axios'
import {useHistory} from 'react-router-dom';
import logo from "./logo.png"
const SERVER_URL = "http://localhost:3000/user/token";

const Nav = (props) => {
   const  _handleSubmit = event => {
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
        this.props.history.push("/Products");
      })
      .catch( err => {
        this.setState({ errorMessage: 'Invalid email or password'});
      })
    }
    

const history = useHistory();

const logoutUser = () => {
 localStorage.clear();
 history.push("/");
}

    return(
        <Navbar id="bootstrap-override" bg="dark" variant="dark" className="justify-content-between">

            <Link to="/">
            
                Home
            </Link>
                <div className="nav-bar-links">
                <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-2">
             <Link to="/Products" className="nav-link">
              Products
            </Link>
                </li>
                 
                 <li className="nav-item ml-2">
                     <Link to="/CustomerZone" className="nav-link">
                         Customer Zone
                     </Link>
                    
          </li>
          <div id="bootstrap-override">
                    <li className="nav-item ml-2">
                     {localStorage.getItem('jwt') ? <button variant="primary" onClick={logoutUser} >Logout</button> : ""}
                    </li>
          </div>
          </ul>
        </div>
           

            </Navbar>

    )

}
 
export default Nav;