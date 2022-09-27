import React from "react";

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
const Signup = (props) => {
  return (
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
                <h3>Let's get started.</h3>
                <a
                  href="https://accounts.google.com/signin/v2/identifier?rart=ANgoxcdbbNxH1nYXChBQ7n_DhSet9sRm1XXzUFTdrodQQJThJv3oPCktvjFuZq-YDK8WsXHW_gXYeU7G-XB1iBPG0qMJAeBgcA&TL=AKqFyY9H8i5ljnapQaNJMsXcWw1rh4Z_tVf0nb1bkAEO151p7ug2APGCvReiTaJI&flowName=GlifWebSignIn&cid=1&flowEntry=ServiceLogin"
                  target="_blank"
                  class="googlebtn"
                >
                  <img src={google} alt="" />
                  Sign in with Google
                </a>
                <p class="line">Or, sign in with your email</p>
                <div class="logininput">
                  <span>Email address</span>
                  <input type="email" placeholder="Enter Mail address" />
                </div>
                <div class="logininput">
                  <span>Password</span>
                  <input type="password" placeholder="Enter password" />
                </div>
                <div class="logininput">
                  <span>Rewrite Password</span>
                  <input type="password" placeholder="Enter password" />
                </div>
                <div class="keepme">
                  <span>
                    <input type="checkbox" id="check" />
                    <label for="check">Keep me sign in</label>
                  </span>
                  <a href="#">Forgot password?</a>
                </div>
                <div class="signinbtn">
                  <button>Sign up</button>
                </div>
                <p>
                  Already have an account? <a href="signin.php">Sign in now</a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Signup;
