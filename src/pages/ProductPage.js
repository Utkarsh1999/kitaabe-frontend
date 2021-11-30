import { useState } from "react";
import { useParams } from "react-router";

import { Row, Col, Button, Image } from "react-bootstrap";

//this component need productId in urlparam
const ProductPage = () => {
  const { itemId } = useParams();

  const [details, setDetails] = useState({
    name: "Product Name",
    price: "150",
    type: "pdf/hardcopy",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "notes",
    images: [
      "https://picsum.photos/200",
      "https://picsum.photos/200",
      "https://picsum.photos/200",
      "https://picsum.photos/200",
      "https://picsum.photos/200",
      "https://picsum.photos/200",
    ],
    contactinfo: "Mr. X  +91 9876543210  Delhi, India",
  });

  return (
    <Row className="container mt-4">
      <Col>
        {itemId}
        <Row md={12}>
          <Col md={2}>
            {details.images.map((img, idx) => (
              <Image className="mb-2" key={idx} src={img} rounded fluid />
            ))}
          </Col>
          <Col md={8}>
            <Image className="w-h-100pc" src={details.images[0]} rounded />
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <h1>{details.name}</h1>
          <h5>
            <strong>₹{details.price}</strong>
            &nbsp; ({details.type})
          </h5>
          <p>{details.desc}</p>
          <h5>
            <strong>{details.category}</strong>
          </h5>
          <hr />
          <h5>
            <strong>Seller info</strong>
          </h5>
          <p>{details.contactinfo}</p>
        </Row>
        <Row>
          <Col md={6}>
            <Button
              className="full-btn color-primary no-border"
              variant="primary"
              type="submit"
            >
              Chat with Seller
            </Button>
          </Col>
          <Col md={6}>
            <Button
              className="full-btn color-primary no-border"
              variant="primary"
              type="submit"
            >
              Add to Wishlist
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ProductPage;
