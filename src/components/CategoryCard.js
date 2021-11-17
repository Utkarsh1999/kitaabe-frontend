import React, { useState } from "react";

import { Row, Col, Card, Button } from "react-bootstrap";

const CategoryCard = () => {
  const [cardDetails, setCardDetails] = useState([
    {
      title: "notes",
      description: "small description of this category",
      img: "https://picsum.photos/200",
    },
    {
      title: "used books",
      description: "small description of this category",
      img: "https://picsum.photos/200",
    },
  ]);
  return (
    <Col md={6} className="mx-auto">
      <Row xs={1} md={12} className="g-2 mt-2 mb-2">
        {cardDetails.map((cardDetail, idx) => (
          <Col md={5} className="mx-auto">
            <Card key={idx}>
              <Card.Img variant="top" src={cardDetail.img} />
              <Card.Body>
                <Card.Title>{cardDetail.title}</Card.Title>
                <Card.Text>{cardDetail.description}</Card.Text>
                <Button
                  className="full-btn color-primary no-border"
                  variant="primary"
                  type="submit"
                >
                  View Items
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default CategoryCard;
