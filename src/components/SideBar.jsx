import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import Editor from './Editor'



const SERVER_URL = "http://localhost:3000/products/index";


class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Shapes:''
        }
    }

    
    render() {
        return (<div>
            
            <Accordion className="according" defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Shapes
      </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="0">
                    <Card.Img className="rect" src="https://sdo.textalk.se/img/preview/rectangle.png" />
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">  
                    <Card.Img className="rounded" src="https://sdo.textalk.se/img/preview/rectangle_rounded_corners.png"></Card.Img>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">  
                    <Card.Img className="oval" src="https://sdo.textalk.se/img/preview/ellipse.png"></Card.Img>
                    </Accordion.Collapse>

                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Text
      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="editor"><Editor /></Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            
            
        </div>);
    }

}



export default SideBar;
