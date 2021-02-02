import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../App.css";
import { ReactComponent as Facebook } from "../icons/facebook.svg";
import { ReactComponent as Twitter } from "../icons/twitter.svg";
import { ReactComponent as Linkedin } from "../icons/linkedin.svg";
import { ReactComponent as Instagram } from "../icons/instagram.svg";

class Footer extends Component {
  render() {
    return (
      <div className="subComponent-lg" id="footerBody">
        <Container>
          <footer className="svg-group text-center">
            <Row>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="https://www.facebook.com/BestDestinationsToTravel/">
                    <Facebook width="50" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="https://twitter.com/traveltothebest/">
                    <Twitter width="55" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="https://www.instagram.com/beautifuldestinations/">
                    <Instagram width="55" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="#">
                    <Linkedin width="55" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
            </Row>
            <hr />
            <br />
          </footer>
        </Container>
      </div>
    );
  }
}

export default Footer;
