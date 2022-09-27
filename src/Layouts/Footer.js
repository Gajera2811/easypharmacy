import React from "react";
import "./headerfooter.css";
import { Row, Col, Container } from "react-bootstrap";
import footerlogo from "../Assets/images/footerlogo.png";
import { Link } from "react-router-dom";
// import FontAwesomeIcon from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = (props) => {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col lg={3}>
              <div class="footerlogo">
                <img src={footerlogo} alt="" />
                <p>
                  7063 Venture St, Unit 104, Delta, BC, V4G 1H8 8 Automatic Rd,
                  Unit B9, Brampton, ON, L6S 5N4
                </p>
                <ul>
                  <li>
                    <a href="#">
                      {/* <FontAwesomeIcon icon="fa-brands fa-facebook-f" /> */}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {/* <FontAwesomeIcon icon="fa-brands fa-youtube" /> */}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fas fa-envelope"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i class="fas fa-phone-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6}>
              <ul class="footermenu">
                <li>
                  <h4>Discover</h4>
                  <a href="index.php">Home</a>
                  <a href="#">Services</a>
                  <a href="#">E-Learning</a>
                  <a href="#">Our Projects</a>
                </li>
                <li>
                  <h4>Information</h4>
                  <a href="aboutus.php">About Us</a>
                  <a href="#">Why Us</a>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <h4>Quick Links</h4>
                  <a href="#">Terms and Conditions</a>
                  <a href="#">Privacy Policy</a>
                  <a href="FAQs.php">FAQs</a>
                </li>
              </ul>
            </Col>
            <Col lg={3}>
              <div class="footersearch">
                <h4>Subscribe to Newsletter</h4>
                <p>Subscribe to get updates right in your inbox</p>
                <div class="mail">
                  <input type="email" placeholder="Enter your email" />
                  <a href="#" class="submit">
                    Submit
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <div class="copyright">
            <p>Copyright © 2022 Easypharmacy. All Rights Reserved.</p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
