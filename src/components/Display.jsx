import React, { Component } from 'react';
import Product from './Product';
import Card from 'react-bootstrap/Card';
import axios from 'axios'

const SERVER_URL = "http://localhost:3000/products/";
const IMAGE_URL = "http://localhost:3000/";


class Display extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: ''
        }
    }

    fetchProduct() {
        console.log(this.props.design);
        axios.get(SERVER_URL + this.props.design).then((res) => {

            this.setState({ product: res.data })

        })

    }
    componentDidMount() {


        this.fetchProduct();
    }


    render() {
        return (
            <div className="card card-content">
                <div className="container-lg">
                    <Card.Img variant="top" src={IMAGE_URL + this.state.product.img_tag} />

                    <div>{this.props.design}</div>

                </div>
            </div>
        )
    }
}
export default Display;