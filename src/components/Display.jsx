import React, { Component } from 'react';
import Product from './Product';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import Editor from './Editor';
import SideBar from './SideBar';
import "../index.css"



const SERVER_URL = "http://localhost:3000/products/";
const IMAGE_URL = "http://localhost:3000/";


class Display extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            product: '',
            inputText: '',
            inputSize: ''

        }
        // console.log(this.state);
    }

    fetchProduct() {
        // console.log(this.props);
        axios.get(SERVER_URL + this.props.design).then((res) => {

            this.setState({ product: res.data })

        })

    }
    componentDidMount() {
        this.fetchProduct();
    }
    //callback function for passing text from Editor to Display
    handleTextInput = (text) => {
        this.setState({ inputText: text });


    }

    handleTextSize = (size) => {
        this.setState({ inputSize: size })
    }



    render() {
        console.log(this.state);


        const divStyle = () => {
            let size = '1em'
            if (this.props.size === "small") {
                size = '2em'
            } else {
                size = "3em"
            }
            return size;
        }
        return (
            <div className="card card-content">
                <div className="container-lg">

                    <div className="productDisplay">
                        {/* <Editor onTextSubmit={this.props.}/> */}
                        <Card.Img variant="top" src={IMAGE_URL + this.state.product.img_tag} />

                        <div className="canvas">
                            <div className="editorText" dangerouslySetInnerHTML={{ __html: this.props.text }}></div>
                            {/* <div className="editorText"  > {this.props.text} </div>  */}

                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default Display;


{/* <textarea type="text" value={this.props.text}/> */ }

// const divStyle = () => {
//     let size = '1em'
//     if (this.props.size === "small")  {
//         size = '2em'
//     } else {
//         size = "3em"
//     }
//     return size;
// }