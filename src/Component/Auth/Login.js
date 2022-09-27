import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./loginsignup.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import loginimg from "../../Assets/images/loginimg.png";
import note from "../../Assets/images/note.png";
import google from "../../Assets/images/google.svg";
// import loginimg from "../../Assets/images/loginimg.png";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.uname === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const renderForm = (
    <>
      <section class="signinsec">
        <Container>
          <Row>
            <Col lg={6}>
              <div class="signinimg">
                <img src={loginimg} alt="" />
                <span class="note animation">
                  <img src={note} alt="" />
                </span>
              </div>
            </Col>
            <Col lg={6}>
              <div class="signininfo">
                <h3>Welcome back.</h3>
                <a
                  href="https://accounts.google.com/signin/v2/identifier?rart=ANgoxcdbbNxH1nYXChBQ7n_DhSet9sRm1XXzUFTdrodQQJThJv3oPCktvjFuZq-YDK8WsXHW_gXYeU7G-XB1iBPG0qMJAeBgcA&TL=AKqFyY9H8i5ljnapQaNJMsXcWw1rh4Z_tVf0nb1bkAEO151p7ug2APGCvReiTaJI&flowName=GlifWebSignIn&cid=1&flowEntry=ServiceLogin"
                  target="_blank"
                  class="googlebtn"
                >
                  <img src={google} alt="" />
                  Sign in with Google
                </a>
                <p class="line">Or, sign in with your email</p>
                <div className="form">
                  <form onSubmit={handleSubmit}>
                    <div class="logininput">
                      <span>Email address</span>
                      <input
                        type="text"
                        name="uname"
                        placeholder="Enter mail address"
                      />
                      {renderErrorMessage("uname")}
                    </div>
                    <div class="logininput">
                      <span>Password</span>
                      <input
                        type="password"
                        name="pass"
                        required
                        placeholder="Enter password"
                      />
                      {renderErrorMessage("pass")}
                    </div>

                    <div class="keepme">
                      <span>
                        <input type="checkbox" id="check" />
                        <label for="check">Keep me sign in</label>
                      </span>
                      <a href="#">Forgot password?</a>
                    </div>
                    <div class="signinbtn">
                      {/* <button type="submit">Sign in</button> */}
                      <input type="submit" />
                    </div>
                    <p>
                      Don’t have an account?{" "}
                      <a href="signup.php">Sign up now</a>
                    </p>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;
