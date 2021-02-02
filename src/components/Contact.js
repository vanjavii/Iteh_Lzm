import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../App.css";
import { ReactComponent as Phone } from "../icons/phone.svg";
import { ReactComponent as MapPin } from "../icons/map-pin.svg";
import { ReactComponent as Mail } from "../icons/mail.svg";
import ContactForm from "../components/ContactForm";

class Contact extends Component {
  render() {
    return (
      <div className="subComponent-lg" id="contactBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>Kontaktirajte nas!</h1>
          </header>
          <section className="svg-group text-center">
            <Row>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <Phone width="50" height="55" strokeWidth="1" />
                  <p>011/1234-4567</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <MapPin width="55" height="55" strokeWidth="1" />
                  <p>Beograd</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <Mail width="55" height="55" strokeWidth="1" />
                  <p>letovanjezamene@gmail.com</p>
                </div>
              </Col>
              <ContactForm/>
            </Row>
          </section>
          
        </Container>
      </div>
    );
  }
}

export default Contact;
