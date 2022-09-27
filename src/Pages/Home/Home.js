import React from "react";
import "./Home.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import clientreview from "../../Assets/images/clientreview.png";
import profile from "../../Assets/images/profile.png";
import pillwayimg from "../../Assets/images/pillwayimg.png";
import smallheart from "../../Assets/images/smallheart.png";
import heart from "../../Assets/images/heart.png";
import benefitimg from "../../Assets/images/benefitimg.png";
import Data from "../../data.json";
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
import heroimg from "../../Assets/images/heroimg.png";
import plusicon from "../../Assets/images/plusicon.png";

import fight from "../../Assets/images/fight.png";

import iconplus from "../../Assets/images/+icon.png";
import doctorprofessional from "../../Assets/images/doctorprofessional.png";
import { data } from "jquery";

const Home = (props) => {
  var finaldata = Data.value;
  return (
    <>
      <section className="herosection">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="heroinfo">
                <h1 contentEditable="true">Your Pharmacy Made Simple</h1>
                <p>
                  All your medications delivered directly to your door for free.
                  Anywhere in Canada and as fast as same day.
                </p>
                <div className="getstarted">
                  <a href="#" className="btnwhite">
                    <span>Get Started</span>{" "}
                  </a>
                  <a href="#" className="textwhite">
                    How it works?{" "}
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="heroimg">
                <img src={heroimg} alt="" />
                <span className="plusicon animation">
                  <img src={plusicon} alt="" />
                </span>
                <span className="fight">
                  <img src={fight} alt="" />
                </span>
                <span className="plus animation">
                  <img src={iconplus} alt="" />
                </span>
                <span className="doctorpro">
                  <img src={doctorprofessional} alt="" />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="exeptionalsec">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="exeptionaltitle">
                <h2>Exceptional Care You Deserve</h2>
              </div>
            </Col>
            <Col lg={6}>
              <div className="exeptiondetail">
                <a href="#" className="btnwhatwedo">
                  What we do
                </a>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable.
                </p>
              </div>
            </Col>
          </Row>

          <ul className="whatwedoinfo">
            {Data.value.map((data) => {
              return (
                <li>
                  <div className="whatwedosubinfo" key={data.id}>
                    <span class={data.className}></span>
                    <div className="whatwe">
                      <h4>{data.whatwedo}</h4>
                      <p>{data.whatwedodis}</p>
                      {/* <img src={data.Image}></img> */}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg={6}>
              <div className="benifitimg">
                <img src={benefitimg} alt="" />
                <span className="heart">
                  <img src={heart} alt="" />
                </span>
              </div>
            </Col>
            <Col lg={6}>
              <div className="benifitinfo">
                <a href="#" className="btnwhatwedo">
                  Benefits
                </a>
                <h4>Do The Following Before Your Vaccination</h4>
                <ul className="tickpoint">
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40.834"
                        height="40.834"
                        viewBox="0 0 40.834 40.834"
                      >
                        <g id="tick" transform="translate(-4.583 -4.583)">
                          <path
                            id="Rectangle_77"
                            data-name="Rectangle 77"
                            d="M735,2788.417A20.417,20.417,0,0,1,755.417,2768h0a20.417,20.417,0,0,1,20.417,20.417h0a20.417,20.417,0,0,1-20.417,20.417h0A20.417,20.417,0,0,1,735,2788.417Z"
                            transform="translate(-730.417 -2763.417)"
                            fill="#009fdf"
                          />
                          <g
                            id="Group_482"
                            data-name="Group 482"
                            transform="translate(11.732 11.731)"
                          >
                            <path
                              id="Path_1551"
                              data-name="Path 1551"
                              d="M0,0H26.537V26.537H0Z"
                              fill="none"
                            />
                            <path
                              id="Path_1552"
                              data-name="Path 1552"
                              d="M10.673,16.144,20.836,5.979,22.4,7.542,10.673,19.271,3.636,12.234,5.2,10.671Z"
                              transform="translate(0.25 0.644)"
                              fill="#fff"
                              stroke="#fff"
                              stroke-width="1"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                    <div className="tickdetial">
                      <h5>Your in good health</h5>
                      <p>
                        It is important to know that only those who are in good
                        health can receive the vaccine
                      </p>
                    </div>
                  </li>
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40.834"
                        height="40.834"
                        viewBox="0 0 40.834 40.834"
                      >
                        <g id="tick" transform="translate(-4.583 -4.583)">
                          <path
                            id="Rectangle_77"
                            data-name="Rectangle 77"
                            d="M735,2788.417A20.417,20.417,0,0,1,755.417,2768h0a20.417,20.417,0,0,1,20.417,20.417h0a20.417,20.417,0,0,1-20.417,20.417h0A20.417,20.417,0,0,1,735,2788.417Z"
                            transform="translate(-730.417 -2763.417)"
                            fill="#009fdf"
                          />
                          <g
                            id="Group_482"
                            data-name="Group 482"
                            transform="translate(11.732 11.731)"
                          >
                            <path
                              id="Path_1551"
                              data-name="Path 1551"
                              d="M0,0H26.537V26.537H0Z"
                              fill="none"
                            />
                            <path
                              id="Path_1552"
                              data-name="Path 1552"
                              d="M10.673,16.144,20.836,5.979,22.4,7.542,10.673,19.271,3.636,12.234,5.2,10.671Z"
                              transform="translate(0.25 0.644)"
                              fill="#fff"
                              stroke="#fff"
                              stroke-width="1"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                    <div className="tickdetial">
                      <h5>Your in good health</h5>
                      <p>
                        It is important to know that only those who are in good
                        health can receive the vaccine
                      </p>
                    </div>
                  </li>
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40.834"
                        height="40.834"
                        viewBox="0 0 40.834 40.834"
                      >
                        <g id="tick" transform="translate(-4.583 -4.583)">
                          <path
                            id="Rectangle_77"
                            data-name="Rectangle 77"
                            d="M735,2788.417A20.417,20.417,0,0,1,755.417,2768h0a20.417,20.417,0,0,1,20.417,20.417h0a20.417,20.417,0,0,1-20.417,20.417h0A20.417,20.417,0,0,1,735,2788.417Z"
                            transform="translate(-730.417 -2763.417)"
                            fill="#009fdf"
                          />
                          <g
                            id="Group_482"
                            data-name="Group 482"
                            transform="translate(11.732 11.731)"
                          >
                            <path
                              id="Path_1551"
                              data-name="Path 1551"
                              d="M0,0H26.537V26.537H0Z"
                              fill="none"
                            />
                            <path
                              id="Path_1552"
                              data-name="Path 1552"
                              d="M10.673,16.144,20.836,5.979,22.4,7.542,10.673,19.271,3.636,12.234,5.2,10.671Z"
                              transform="translate(0.25 0.644)"
                              fill="#fff"
                              stroke="#fff"
                              stroke-width="1"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                    <div className="tickdetial">
                      <h5>Your in good health</h5>
                      <p>
                        It is important to know that only those who are in good
                        health can receive the vaccine
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="oursection">
        <Container>
          <div className="oursectiontitle">
            <a href="#" className="btnwhatwedo">
              {" "}
              WHY US{" "}
            </a>
            <h4>Our Promise To You</h4>
            <p>
              There are many options out there for web development services;
              websites have become a necessity for most businesses and
              organizations alike to disseminate and publish vital i
            </p>
          </div>
          <ul className="promiseinfo">
            {Data.whyus.map((whyus) => {
              return (
                <li>
                  <div className="promisebox" key={whyus.no}>
                    <span className={whyus.className}></span>
                    <h5>{whyus.whatwedo}</h5>
                    <p>{whyus.whatwedodis}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="exeptionalsec">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="exeptionaltitle">
                <h2>
                  Getting Started Is As <br /> Easy As...
                </h2>
              </div>
            </Col>
            <Col lg={6}>
              <div className="exeptiondetail">
                <a href="#" className="btnwhatwedo">
                  HOW PILLWAY WORKS
                </a>
                <p>
                  The following are the types of vaccines that will generally be
                  circulated to the public
                </p>
              </div>
            </Col>
          </Row>
          <div className="step">
            <img src={pillwayimg} alt="" />
            <span className="stepheart">
              <img src={heart} alt="" />
            </span>
            <span className="smallheart">
              <img src={smallheart} alt="" />
            </span>
          </div>
          <ul className="stepinfo">
            {Data.bookappoinment.map((bookappoinment) => {
              return (
                <li className="stepborder" key={bookappoinment}>
                  <div className="firststep">
                    <span>{bookappoinment.appoinmentnumber}</span>
                    <h4>{bookappoinment.appoiment}</h4>
                    <p>{bookappoinment.appoimentdis}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>
      <section className="oursection">
        <Container>
          <div className="oursectiontitle">
            <a href="#" className="btnwhatwedo">
              Review{" "}
            </a>
            <h4>Google Reviews</h4>
          </div>
          <OwlCarousel className="owl-theme" items={2} loop margin={10} nav>
            <div className="item">
              <div className="review star">
                <img src={clientreview} alt="" />
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </p>
                <ul className="rate">
                  <li>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                  </li>
                </ul>
                <div className="basicinfo">
                  <h3>Polina Podolski</h3>
                  <span>Patient</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="review star">
                <img src={profile} alt="" />
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </p>
                <ul className="rate">
                  <li>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                  </li>
                </ul>
                <div className="basicinfo">
                  <h3>Polina Podolski</h3>
                  <span>Patient</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="review star">
                <img src={clientreview} alt="" />
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </p>
                <ul className="rate">
                  <li>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                  </li>
                </ul>
                <div className="basicinfo">
                  <h3>Polina Podolski</h3>
                  <span>Patient</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="review star">
                <img src={profile} alt="" />
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </p>
                <ul className="rate">
                  <li>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-star"></i>
                    </a>
                  </li>
                </ul>
                <div className="basicinfo">
                  <h3>Polina Podolski</h3>
                  <span>Patient</span>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </Container>
      </section>
    </>
  );
};

export default Home;
