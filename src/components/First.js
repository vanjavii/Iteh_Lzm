import React from "react";
import { Button } from "reactstrap";
import "../App.css";
const First = () => (
  <div>
    <main className="cover-page" id="first">
      <section className="wrapped-page">
        <div className="item-center">
          <h1>Letovanje za mene</h1>
          <Button outline color="warning" href="#carouselBody">
            Pogledaj najbolje ponude!
          </Button>
        </div>
      </section>
    </main>
  </div>
);

export default First;
