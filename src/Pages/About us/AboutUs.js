import React from "react";
import "./Aboutus.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import mission from "../../Assets/images/missionicon.png";
// import aboutimg from "../../Assets/images/aboutimg.png";
import aboutimg2 from "../../Assets/images/aboutimg2.png";
import watch from "../../Assets/images/watch.png";
import profile from "../../Assets/images/profile.png";
import clientreview from "../../Assets/images/clientreview.png";
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

class Aboutus extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("https://project.delemontstudio.com/aboutdata.json")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return;

    return (
      <>
        <section className="heroabout">
          <Container>
            <div className="heroaboutinfo">
              <a href="#" className="btnwhatwedo">
                ABOUT US
              </a>
              <h2>Our mission is to make healthcare more accessible</h2>
              <p>
                All your medications delivered directly to your door for free.
                Anywhere in Canada and as fast as same day.
              </p>
            </div>
          </Container>
        </section>

        <section className="missionsec">
          <Container>
            <ul className="missioninfo">
              {Data.aboutus.map((data) => {
                return (
                  <li>
                    <img src={mission} alt="" />
                    <h4>{data.aboutus}</h4>
                    <p>{data.aboutusdis}</p>
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>
        <section className="aboutml">
          <Container>
            <Row>
              <Col lg={6}>
                <div className="benifitinfo">
                  <a href="#" className="btnwhatwedo">
                    About Us
                  </a>
                  <h4>Lorem ipsum dolor sit amet, consetetur.</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea.
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                {items.aboutimg.map((aboutimg) => (
                  <div className="benifitimg">
                    <img src={aboutimg.aboutimg} alt="" />
                  </div>
                ))}
              </Col>
            </Row>
          </Container>
        </section>
        <section className="oursection">
          <Container>
            {items.whyus.map((whyus) => (
              <div className="oursectiontitle" key={whyus.id}>
                <a href="#" className="btnwhatwedo">
                  {" "}
                  WHY US{" "}
                </a>
                <h4>{whyus.whyustitle}</h4>
                <p>{whyus.whyusdis}</p>
              </div>
            ))}
            <ul className="promiseinfo">
              {items.aboutdata.map((item) => (
                <li key={item.id}>
                  <div className="promisebox">
                    <span className={item.classname}></span>
                    <h5> {item.aboutustitle}</h5>
                    <p>{item.aboutusdis}</p>
                  </div>
                </li>
              ))}
            </ul>
            {/* {items.map((item) => (
              <ol key={item.id}>
                User_Name: {item.username}, Full_Name: {item.name}, User_Email:{" "}
                {item.email}
              </ol>
            ))} */}
          </Container>
        </section>
        <section className="aboutml2">
          <Container>
            <Row>
              <Col lg={6}>
                <div className="benifitimg">
                  <img src={aboutimg2} alt="" />
                  <span className="watch animation ">
                    <img src={watch} alt="" />
                  </span>
                </div>
              </Col>
              <Col lg={6}>
                <div className="benifitinfo">
                  <a href="#" className="btnwhatwedo">
                    About us
                  </a>
                  <h4>Lorem ipsum dolor sit amet, consetetur.</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="oursection">
          <Container>
            <>
              {items.testimonial.map((item) => (
                <div className="oursectiontitle" key={item.id}>
                  <a href="#" className="btnwhatwedo">
                    Testimonials
                  </a>
                  <h4>{item.testimonialtitle}</h4>
                  <p>{item.testimonialdis}</p>
                </div>
              ))}
            </>
            <OwlCarousel className="owl-theme" items={2} loop margin={10} nav>
              <div className="item">
                <div className="review star">
                  <img src={clientreview} alt="" />
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters,
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
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters,
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
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters,
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
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters,
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
  }
}
export default Aboutus;
