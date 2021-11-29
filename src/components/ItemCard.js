import { Row, Col, Card } from "react-bootstrap";

const ItemCard = (props) => {
  const {
    item_name,
    item_description,
    category_id,
    subcategory_id,
    available_in_city,
  } = props.item;
  return (
    <Col md={3} className=" mt-4 mb-4">
      <Card>
        {/* <Card.Img variant="top" src={img} /> */}
        <Card.Body>
          <Card.Title>{item_name}</Card.Title>
          <Card.Title>{category_id}</Card.Title>
          <Card.Title>{subcategory_id}</Card.Title>
          <Card.Text>{item_description}</Card.Text>
          <Card.Text>{available_in_city}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemCard;
