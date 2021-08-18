import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import Albums from "./components/Albums";
import Blogs from "./components/Blogs";
import Cart from "./components/Cart";
import Men from "./components/Men";
import Women from "./components/Women";
import Jewelery from "./components/Jewelery"
import "./App.css"
import Our_journey from "./components/Our_journey";


const routing = (
  <Router>
    <div>
      <Header />
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/men" component={Men}/>
        <Route path="/women" component={Women}/>
        <Route path="/jewelery" component={Jewelery}/>
        <Route path="/journey" component={Our_journey}/>
        <Route path="/products" component={Products} />
        <Route path="/albums" component={Albums} />
        <Route path ="/blogs" component={Blogs}/>
        <Route path="/cart" component={Cart}/>
         
      </Switch>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));