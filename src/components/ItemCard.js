import { Row, Col, Card, Badge, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

const ItemCard = (props) => {
  const {
    _id,
    item_name,
    item_description,
    category_id,
    subcategory_id,
    available_in_city,
  } = props.item;
  return (
    <Col md={3} className={props.className}>
      <Card>
        {/* <Card.Img variant="left" src={props.img} /> */}
        <Card.Body>
          <Card.Title className="text-capitalize">
            <Link to={`/view/product/${_id}`} className="pl-0">
              {item_name}
            </Link>
          </Card.Title>

          <Card.Subtitle className="text-capitalize text-muted text-wrap">
            {category_id}
            {", "}
            {subcategory_id}
          </Card.Subtitle>
          <Card.Text className="text-capitalize mb-2">
            <strong>Available Location</strong> : {available_in_city}
          </Card.Text>
          <Card.Text className="card-desc">{item_description}</Card.Text>
          <Link
            as="button"
            to={`/view/product/${_id}`}
            className="btn btn-warning full-btn color-primary no-border"
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
