import React, { Component } from 'react';
import SideBar from './SideBar';
import Nav from './Nav'
import Display from './Display';
class DesignPage extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        
        this.state = {  }
    }
    render() { 
        console.log(this.props.match);
        return ( 
        
        
            <div><Nav/>
            
            <div className="container py-4">
                
                <div className="row">
                <div className="col-lg-5">
                <SideBar/>
            </div>
            <div className="col-lg-6">
                
            {this.props.match ? <Display design={this.props.match.params.design}/> : ''}
            </div>
            </div>
            </div>
            </div>
        );
    }
}
 
export default DesignPage;