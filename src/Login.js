import React, { PureComponent } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { startLogin } from "./actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Login extends PureComponent {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  login = e => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
    this.props.login(this.state);
         
    this.props.history.push("/home");
  
  };

  render() {
    return (
      <div className="front_page">
              <div className="form_container">
      <form className="loginForm">
        {this.props.loggedIn ? "Logged in" : ""}
        {this.props.loginProcessing && !this.props.loggedIn ? "Logging.." : ""}
      
        <h1>LogIn</h1>
        
        
        <div className="field">
          <div className="customInput">
            <FontAwesomeIcon icon="envelope" className="inputicon" />
            <input
              className="inputfield"
              type="email"
              required
              placeholder="Enter username"
              pattern="\A[A-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Z0-9.-]+\Z"
              title="Please enter valid mail address"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="customInput">
            <FontAwesomeIcon icon="key" className="inputicon" />
            <input
              className="inputfield"
              type="password"
              required
              placeholder="Enter Password"
            
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
        </div>
       
        <div className="field submitfield">
          <input
            className="submit"
            type="submit"
            value="Login"
            onClick={this.login}
          />

        </div>
        <div style={{marginTop:"2%"}}>
        <h4 className="standardText">Or</h4>
        <h4 className="standardText">Login With</h4>
        </div>

        <div className="socialLogins" style={{marginTop:"2%", display:"flex", justifyContent:"space-around", marginLeft:"auto",marginRight:"auto", width:"10%"}}>
    
          <a href="https://m.facebook.com/?locale=en_GB" >
            <FontAwesomeIcon icon={["fab", "facebook-f"]} /></a>
          
            <a  href="https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
              
            <FontAwesomeIcon icon={["fab", "google"]} /></a>
    
        <a href="https://www.linkedin.com/login?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Flogin&fromSignIn=true&trk=organization_guest_nav-header-signin">

         
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} /> </a>
        
        </div>
        <div className="field signupfield" >
          <span className="linkfield" >
            <Link to="/register">Not a member? Register here</Link>
          </span>
        </div>
      </form>
      </div>
      
<div className="image_container">
<div style={{marginLeft:"80%"}}>
      <img src="https://placeholder.pics/svg/150x50/888888/EEE/Logo" alt="..." height="30" />
      </div>

  <img src="../Assets/login.png" height="100%%" width="50%"/>
</div>

      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    loginProcessing: state.loginProcessing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(startLogin(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
