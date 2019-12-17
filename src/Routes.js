import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import CustomerZone from './components/CustomerZone';
import DesignPage from './components/DesignPage';


const Routes =(
    <Router basename="/EngravingOnline">
        <div>
        <Route exact path ="/" component={Home}/> 
        <Route exact path ="/Products" component={Products}/>
        <Route exact path ="/CustomerZone" component={CustomerZone}/>
        <Route exact path ="/DesignPage" component={DesignPage}/>
        </div>
    </Router>
);

export default Routes;