import { Row, Col, Card } from "react-bootstrap";

const ItemCard = ({ name, desc, img, category }) => {
  return (
    <Col md={3} className=" mt-4 mb-4">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{category}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemCard;
