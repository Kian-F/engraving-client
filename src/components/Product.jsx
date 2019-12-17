import React, { Component } from 'react';
import axios from 'axios';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';


const SERVER_URL = "http://localhost:3000/products/index";
const IMAGE_URL = "http://localhost:3000/";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: [],
            material: ''
         }
    }

     fetchProducts () {
        axios.get(SERVER_URL).then((res) => {
            console.log(res.data);
           const allProducts = res.data;
           //this.setState({product: []});
           this.setState({products: res.data});
           this.setState({material: res.data.id});

            // const aProduct = [...new Set(allProducts.map(pro => pro.name))]
            // console.log(aProduct);  
           
        })
        
    }
    componentDidMount(){
        this.fetchProducts();
    }
   _handleClick = event => {
    event.preventDefault();
    axios.get(SERVER_URL,{
        product:{name: this.state.name, category: this.state.category}
    }).then(res =>{
        console.log(this.state.material);
        
    }).catch(error => {console.log(error);
    });
   }

    render() {
        return (

            <div className="productGrid">
                {this.state.products.map((product, index) => (
                    // <p>Name: {product.name} <p>Price:{product.price}</p> <p>Category:{product.category}</p>
                    //     <p> Fixing Method:{product.fixing_method}</p> <p>Material:{product.material}</p> 
                    //     <p>Height:{product.height}</p>
                        
                          <CardDeck>
                          <Card>
                              <Card.Img variant="top" src={IMAGE_URL + product.img_tag} />
                              <Card.Body>
                                  <Card.Title>Name: {product.name}</Card.Title>
                                  <Card.Text>Category: {product.category}</Card.Text>
                                  <Card.Text>Price: ${product.price}</Card.Text>
                                  <Card.Text>Material: {product.material}</Card.Text>
                                  <Card.Text>Fixin Method: {product.fixing_method}</Card.Text>
                                  <Card.Text>Shape: {product.shape}</Card.Text>
                                  <Card.Text>Height: {product.height}</Card.Text>
                                  <Card.Text>Width: {product.width}</Card.Text>
                                  <Link to="/DesignPage"><button onClick={this._handleClick}>Design Me</button></Link> 
                              </Card.Body>
                          </Card>
                  </CardDeck>
                //   </p>
              
             ))}
            </div>
         );
    }
}
 
export default Product;