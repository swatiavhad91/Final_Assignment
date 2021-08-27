import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import Register from "./Register";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
    
    </div>
    </div>
  );
}

export default App;
