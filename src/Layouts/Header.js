import React from "react";
import Logo from "../Assets/images/logo.png";
import "./headerfooter.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../src/Assets/images/logo.png";
const Header = (props) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/">
            <img src={Logo} />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/">Home</Link>
              <Link to="/">See A Doctor</Link>

              <Link to="/">Speciality</Link>
              <Link to="/about-us">About Us</Link>
              <Link to="/FAQs">FAQs</Link>
            </Nav>
            <Form className="d-flex">
              <Link to="/Login" className="login">
                Login
              </Link>
              <Link to="/signup" className="signup">
                {" "}
                Sign up
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
