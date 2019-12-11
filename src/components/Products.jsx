import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = "http://localhost:3000/products/index";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: []
         }
    }

     fetchProducts () {
        axios.get(SERVER_URL).then((res) => {
            console.log(res);
            
           
        })
        
    }
    componentDidMount(){
        this.fetchProducts();
    }


    render() { 
        return ( 
            <div><h1>Hi From Products</h1></div>
         );
    }
}
 
export default Products;