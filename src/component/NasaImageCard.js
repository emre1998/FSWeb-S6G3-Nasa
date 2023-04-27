import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

class NasaImageCard extends React.Component {
  render() {
    const { title, date, explanation, url } = this.props;

    return (
      <div>
        <Card>
          <CardImg top width="100%" src={url} alt={title} />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>Date: {date}</CardSubtitle>
            <CardText>{explanation}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default NasaImageCard;
