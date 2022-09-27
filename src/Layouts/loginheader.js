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

const Header = (props) => {
  return (
    <>
      <header class="bgwhite">
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <a class="navbar-brand" href="index.php">
              <img src={logo} alt="logo" />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
