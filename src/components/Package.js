import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import TourCard from "./TourCard";
import "../App.css";

import Lefkada from "../img/Lefkada4.jpg";
import Santorini from "../img/Santorini.jpg";
import Mikonos from "../img/Mikonos.jpeg";
import Antalija from "../img/Antalija.jpg";
import Bodrum from "../img/Bodrum.jpg";
import Hurgada from "../img/Hurgada.jpg";
import Nica from "../img/Nica.jpg";
import Ibica from "../img/Ibica.jpg";
import Majorka from "../img/Majorka.jpg";
const tours = [
  {
    id: 1,
    category: ["Grčka"],
    img: Lefkada,
    alt: "lefkada",
    title: "*****",
    subtitle: "Lefkada"
  },
  {
    id: 2,
    category: ["Grčka"],
    img: Santorini,
    alt: "santorini",
    title: "*****",
    subtitle: "Santorini"
  },
  {
    id: 3,
    category: ["Grčka"],
    img: Mikonos,
    alt: "mikonos",
    title: "*****",
    subtitle: "Mikonos"
  },
  {
    id: 4,
    category: ["Turska"],
    img: Antalija,
    alt: "antalija",
    title: "****",
    subtitle: "Antalija"
  },
  {
    id: 5,
    category: ["Turska"],
    img: Bodrum,
    alt: "bodrum",
    title: "****",
    subtitle: "Bodrum"
  },
  {
    id: 6,
    category: ["Egipat"],
    img: Hurgada,
    alt: "hurgada",
    title: "****",
    subtitle: "Hurgada"
  },
  {
    id: 7,
    category: ["Francuska"],
    img: Nica,
    alt: "nica",
    title: "*****",
    subtitle: "Nica"
  },
  {
    id: 8,
    category: ["Španija"],
    img: Ibica,
    alt: "ibica",
    title: "*****",
    subtitle: "Ibica"
  },
  {
    id: 9,
    category: ["Španija"],
    img: Majorka,
    alt: "majorka",
    title: "*****",
    subtitle: "Majorka"
  }
];

const itemCategories = [
  "Grčka",
  "Turska",
  "Egipat",
  "Francuska",
  "Španija",
];

class Package extends Component {
  state = {
    cards: [],
    category: "all"
  };

  componentDidMount() {
    this.setState({ cards: tours });
  }

  render() {
    const { cards, category } = this.state;
    return (
      <div className="subComponent-lg" id="packageBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>Odaberite državu:</h1>            
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "dark" : "light"}
                onClick={() => this.setState({ category: badge })}
              >
                {badge}
              </Badge>
            ))}

            <Row className="text-left">
              <CardColumns>
                {category !== "all"
                  ? cards.map(tourcard => {
                    return tourcard.category.map(catItem => {
                      return catItem === category ? (
                        <TourCard key={tourcard.id} tourcard={tourcard} />
                      ) : null;
                    });
                  })
                  : cards.map(tourcard => (
                    <TourCard key={tourcard.id} tourcard={tourcard} />
                  ))}
              </CardColumns>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Package;
