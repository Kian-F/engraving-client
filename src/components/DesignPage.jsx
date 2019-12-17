import React, { Component } from 'react';
import SideBar from './SideBar';

class DesignPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <SideBar/>
        </div>);
    }
}
 
export default DesignPage;