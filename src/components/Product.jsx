import React, { Component } from 'react';
import axios from 'axios';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

const SERVER_URL = "http://localhost:3000/products/index";
const IMAGE_URL = "http://localhost:3000/";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: [],
            categories: [],

         }
    }

     fetchProducts () {
        axios.get(SERVER_URL).then((res) => {
            console.log(res.data);
           const allProducts = res.data;
           //this.setState({product: []});
           this.setState({products: res.data});
            // const aProduct = [...new Set(allProducts.map(pro => pro.name))]
            // console.log(aProduct);
            

            const categories = [...new Set(allProducts.map(pro => pro.category))]
            console.log(categories);
            this.setState({categories: categories});
            
           
        })
        
    }
    componentDidMount(){
        this.fetchProducts();
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
                                  <Card.Text>{product.category}</Card.Text>
                                  <Card.Text>{product.price}</Card.Text>
                                  <Card.Text>{product.material}</Card.Text>
                                  <Card.Text>{product.fixing_method}</Card.Text>
                                  <Card.Text>{product.height}</Card.Text>
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