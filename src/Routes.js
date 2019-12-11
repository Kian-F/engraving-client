import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';


const Routes =(
    <Router basename="/engraving-client">
        <div>
        <Route exact path ="/" component={Home}/> 
        <Route exact path ="/Products" component={Products}/>
        </div>
    </Router>
);

export default Routes;