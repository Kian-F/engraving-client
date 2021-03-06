import React, { Component } from "react";
import axios from "axios";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Display from "./Display";
import { Container, Row, Col } from "react-bootstrap";

const SERVER_URL = "http://localhost:3000/products/index";
const IMAGE_URL = "http://localhost:3000/";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      name: "",
      material: "",
    };
  }

  fetchProducts() {
    axios.get(SERVER_URL).then((res) => {
      //console.log(res.data);
      const allProducts = res.data;
      //this.setState({product: []});
      this.setState({ products: res.data });
      this.setState({ material: res.data.id });

      // const aProduct = [...new Set(allProducts.map(pro => pro.name))]
      // console.log(aProduct);
    });
  }
  componentDidMount() {
    this.fetchProducts();
  }
  _handleClick = (event) => {
    event.preventDefault();
    axios
      .get(SERVER_URL, {
        //product:{name: this.state.name, category: this.state.category}
      })
      .then((res) => {
        this.setState({});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <Row>
        {this.state.products.map((product, index) => (
          <CardDeck className="cardImg">
            <Card>
              <Card.Img
                className="cardImg"
                variant="top"
                src={IMAGE_URL + product.img_tag}
              />
              <Card.Body>
                <Card.Title>Name: {product.name}</Card.Title>
                <Card.Text>Category: {product.category}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Card.Text>Material: {product.material}</Card.Text>
                <Card.Text>Fixing Method: {product.fixing_method}</Card.Text>
                <Card.Text>Shape: {product.shape}</Card.Text>
                <Card.Text>Height: {product.height}</Card.Text>
                <Card.Text>Width: {product.width}</Card.Text>
                <Link to={"/DesignPage/" + product.id}>
                  <button id="DesignButton">Design Me</button>
                </Link>
              </Card.Body>
            </Card>
          </CardDeck>
        ))}
      </Row>
    );
  }
}

export default Product;
