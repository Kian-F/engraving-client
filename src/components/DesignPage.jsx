import React, { Component } from 'react';
import SideBar from './SideBar';
import Nav from './Nav'
import Display from './Display';
import Editor from './Editor';



class DesignPage extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        console.log(this.state);
        
        
        this.state = { 
            text: '',
            textSize: '' 
            
         }
        
    }
    
    
   
    _textHandler =(text) =>{
        this.setState({
            text: text
            
        })
         

    }
    
    _sizeHandler = (size) =>{
        this.setState({textSize: size})  
        
    }
    render() { 
        console.log(this.state);
       //console.log(this.props.match);
        return ( 
        
        
            <div><Nav/>
            
            <div className="container py-4">
                
                <div className="row">
                <div className="col-lg-5">
                <SideBar handleTextInput={this._textHandler} handleSize={this._sizeHandler}/>
            </div>
            <div className="col-lg-6">
             
            
            {this.props.match ? <Display size={this.state.textSize} design={this.props.match.params.design} text={this.state.text} dangerouslySetInnerHTML={{__html: this.state.text}}/>  : '' }
            
           
            </div>
            </div>
            </div>
            </div>
        );
    }
}
 
export default DesignPage;