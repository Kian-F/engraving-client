import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

const SERVER_URL = "http://localhost:3000/products/index";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: [],
            categories: []
         }
    }

     fetchProducts () {
        axios.get(SERVER_URL).then((res) => {
            console.log(res.data[0].name);
            const allProducts = res.data;
            this.setState({products: allProducts})

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
           
            <div>
                <Nav/>
                <h1>Hi From Products</h1>
                </div>
         );
    }
}
 
export default Products;