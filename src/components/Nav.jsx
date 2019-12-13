import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import SignIn from './SignIn';


const Nav = (props) => {

    return(
        <Navbar id="bootstrap-override" bg="dark" variant="dark" className="justify-content-between">

            <Link to="/">
                <img  alt="Home" className="navbar-brand" />
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
                <div id="bootstrap-override">
               
            </div>
          </li>
          </ul>
        </div>
           

            </Navbar>

    )

}
 
export default Nav;