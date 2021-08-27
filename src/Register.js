import React, { PureComponent } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startRegister } from "./actions.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Register extends PureComponent {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  register = e => {
    e.preventDefault();
    const { email, password, confirmPassword } = this.state;
    this.setState({ email: "", password: "", confirmPassword: "" });
    console.log(email, password, confirmPassword);
    this.props.register(this.state);
  };

  render() {
    const { email, password, confirmPassword } = this.state;
    return (
      <form className="loginForm">
       
        {this.props.registering && !this.props.registered ? "Registering" : ""}
        <h1 className="heading">Create Account</h1>


        <div className="field">
          <div className="customInput">
            <FontAwesomeIcon className="inputicon" icon="envelope" />
            <input
              className="inputfield"
              type="email"
              placeholder="Email.."
              autoComplete="username"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="customInput">
            <FontAwesomeIcon className="inputicon" icon="key" />
            <input
              className="inputfield"
              type="password"
              placeholder="Password.."
              autoComplete="new-password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="customInput">
            <FontAwesomeIcon className="inputicon" icon="key" />
            <input
              className="inputfield"
              type="password"
              placeholder="Confirm Password.."
              autoComplete="new-password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field submitfield">
          <input
            className="submit"
            type="submit"
            value="SIGN UP"
            onClick={this.register}
          />
        </div>

        {this.props.registered ? "Registered" : ""}
        
        <div className="field signupfield">
          <span className="linkfield">
            <Link to="/">Already signed up? Login here</Link>
          </span>
        </div>

        <div style={{ marginTop: "2%" }}>
          <h4 className="standardText">Or</h4>
          <h4 className="standardText">Login With</h4>
        </div>
        <div className="socialLogins" style={{ marginTop: "2%", display: "flex", justifyContent: "space-around", marginLeft: "auto", marginRight: "auto", width: "10%" }}>

          <a href="https://m.facebook.com/?locale=en_GB" >
            <FontAwesomeIcon icon={["fab", "facebook-f"]} /></a>

          <a href="https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">

            <FontAwesomeIcon icon={["fab", "google"]} /></a>

          <a href="https://www.linkedin.com/login?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Flogin&fromSignIn=true&trk=organization_guest_nav-header-signin">


            <FontAwesomeIcon icon={["fab", "linkedin-in"]} /> </a>

        </div>

      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    registered: state.registered,
    registering: state.registering
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: content => dispatch(startRegister(content))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
