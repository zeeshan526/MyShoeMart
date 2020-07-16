import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';

import Product from './components/products';
import ProductItem from './components/ProductItem';
import NavBar from './components/navbar';

function RouteConfig() {

  return (
	<div>
        <Router>
          <NavBar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/products" component={Product}/>
                <Route path="/Product/:id" component={ProductItem}/>
                <Route path="*" component={()=><h2>404 Not Found</h2>}/>
            </Switch>
        </Router>
	</div>
  );
}

export default RouteConfig;