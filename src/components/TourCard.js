import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "../App.css";

const TourCard = ({ tourcard }) => {
  const { img, alt, title, subtitle } = tourcard;
  return (
    <Card>
      <CardImg top width="100%" src={img} alt={alt} />
      <CardBody>
        <Button outline color="secondary" className="float-right" href="lefkada">
          Saznaj više
        </Button>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardBody>
    </Card>
  );
};
export default TourCard;
