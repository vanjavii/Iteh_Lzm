import React, { Component } from "react";
import Santorini from "../img/Santorinii.jpg";
import Ibica from "../img/Ibica.jpg";
import Hurgada from "../img/Hurgada.jpg";
import Nica from "../img/Nica.jpg";
import Antalija from "../img/Antalija.jpg";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src: Santorini,
    altText: "Najlepši predstavnik Kikladskih ostrva",
    caption: "Santorini"
  },
  {
    src: Ibica,
    altText: "Najpopularnije Špansko ostrvo",
    caption: "Ibiza"
  },
  {
    src: Hurgada,
    altText: "Biser Crvenog mora",
    caption: "Hurgada"
  },
  {
    src: Nica,
    altText: "Dragulj Azurne obale",
    caption: "Nica"
  },
  {
    src: Antalija,
    altText: "Mesto na prelazu izmedju Egejskoj i Sredozemnog mora",
    caption: "Antalija"
  }
];

class MainCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} className="img-carousel" />
          <CarouselCaption
            captionText={item.altText}
            captionHeader={item.caption}
          />
        </CarouselItem>
        
      );
    });

    return (
      <div className="carousel" id="carouselBody">
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
      </div>
    );
  }
}

export default MainCarousel;
