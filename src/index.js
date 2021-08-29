import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import Register from "./Register";
import "./styles.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/Home";
import Albums from "./components/Albums";
import Blogs from "./components/Blogs";
import Cart from "./components/Cart";
import Men from "./components/Men";
import Women from "./components/Women";
import Jewelery from "./components/Jewelery";
import Our_journey from "./components/Our_journey";
import "./App.css"
import Application from "./components/Products";
import Support from "../src/components/Support"
import Electronics from "./components/Electronics";

library.add(faFacebookF, faGoogle, faLinkedinIn, faKey,  faEnvelope);
const store = createStore(reducer, applyMiddleware(thunk));

function App2() {
  return (
    <div>
      
    <div className="App">
    <Router> 
             
    <Route exact path="/" component={Login} />
         <Route path="/register" component={Register} /> 
        
  
       <Route path="/home" component={Home} />   
        <Route path="/men" component={Men}/>
        <Route path="/women" component={Women}/>
        <Route path="/jewelery" component={Jewelery}/>
        <Route path="/journey" component={Our_journey}/>
        <Route path="/products" component={Application} />
        <Route path="/albums" component={Albums} />
        <Route path ="/blogs" component={Blogs}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/support" component={Support}/>
        <Route path="/electronics" component={Electronics}></Route>
    
        </Router>
        </div>       
         </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  
  <Provider store={store}> 

       <App2 />
       
       </Provider>,
  rootElement
 );


// const routing = (
//   <Router>
//     <div>
    
//       <Header />
//       <hr />
//       <Switch>
      
        
        
         
//       </Switch>
//       <Footer />
//     </div>
//   </Router>
// );

//  ReactDOM.render(routing, document.getElementById("root"));

