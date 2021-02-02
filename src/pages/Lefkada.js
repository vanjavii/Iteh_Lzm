import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
// import tours from "../components/Package";
import Lefkada1 from "../img/Lefkada1.jpg";
import Lefkada2 from "../img/Lefkada2.jpg";
import Lefkada3 from "../img/Lefkada3.jpg";
import Lefkada4 from "../img/Lefkada4.jpg";
import Lefkada5 from "../img/Lefkada5.jpg";

const Lefkada = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={Lefkada1} alt="" />
        <h1>Lefkada</h1>
        <h4>Biser Jonskog mora!</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
              Četvrto po veličini ostrvo Jonskog arhipelaga, ukupne površine preko 300km2. Ostrvo je odvojeno od kopna uzanim moreuzom, koji je danas premošćen pokretnim mostom na baržama, dužine 50-ak metara. Severno od Lefkade se nalazi ostrvo Krf, a južno ostrva Itaka i Kefalonija. Lefkada je dobila ime po svom najjužnijem rtu, Lefkatasa, koji je u antičko doba nosio naziv Lefkos petra (beli kamen). 24 mala ostrva ovog jedinstvenog arhipelaga čine prefektutru Lefkade a samo ostrvo Lefkada je uglavnom krševito i brdovito ali postoji nekoliko malih plodnih dolina gde se gaje specifične biljne kulture (masline, vinova loza, agrumi). Klima na ostrvu je sredozemna, sa dugim toplim letima i blagim, kišovitim zimama. Lefkada je čuvena po netaknutoj prirodi, prelepim peščanim plažama, kao što su Porto Kaciki, Egremni, Katisma, Pefkulia, Jalos i Milos, kristalno čistom Jonskom moru koje je ovde u svim nijansama tirkizne boje i u kombinaciji sa belim peskom i stenama deluje stvarno rajski, kao i glavnom gradu Lefkasu sa svojim prepoznatljivim starim jezgrom.
              </p>
            </div>
          </Col>
          <Col sm="4">
            <div className="tour-gallery">
              <a href={Lefkada5}>
                <img src={Lefkada5} alt="" />
              </a>
              <a href={Lefkada2}>
                <img src={Lefkada2} alt="" />
              </a>
              <a href={Lefkada3}>
                <img src={Lefkada3} alt="" />
              </a>
              <a href={Lefkada4}>
                <img src={Lefkada4} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
    
  </div>
);

export default Lefkada;
