import { Row, Col, Card, Badge, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

const ItemCard = (props) => {
  const {
    _id,
    item_name,
    item_description,
    price,
    category_id,
    subcategory_id,
    available_in_city,
    image,
    promoted,
    university,
  } = props.item;
  return (
    <Col md={3} className={props.className}>
      <Card>
        {promoted && <small className="promoted-text">promoted</small>}
        {image && <Card.Img variant="top" src={image[0]} />}

        <Card.Body>
          <Card.Title className="text-capitalize">
            <Link to={`/view/product/${_id}`} className="pl-0">
              {item_name}
            </Link>
          </Card.Title>

          <Card.Subtitle className="text-capitalize text-muted text-wrap">
            <strong>Price:</strong> ₹{price}/-
          </Card.Subtitle>
          <Card.Text className="text-capitalize mb-0">
            <strong>Location</strong> : {available_in_city}
          </Card.Text>
          <Card.Text className="text-capitalize mt-0">
            <strong>University</strong> : {university}
          </Card.Text>
          <Card.Text className="card-desc">{item_description}</Card.Text>
          <Link
            as="button"
            to={`/view/product/${_id}`}
            className="btn btn-primary full-btn color-primary no-border"
            size="sm"
          >
            View Item
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemCard;
