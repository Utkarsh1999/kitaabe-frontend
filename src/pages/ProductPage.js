import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Row, Col, Button, Image, Badge } from "react-bootstrap";

import { Advertisement } from "../components";

import { getItemByItemId } from "../store/actions/item.actions";

//this component need productId in urlparam
const ProductPage = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();

  useEffect(() => {
    dispatch(getItemByItemId.request(itemId));
  }, [itemId]);

  const { item, loadingItem } = useSelector((state) => state.item);
  const { authenticated } = useSelector((state) => state.auth);

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
    <>
      {loadingItem && <h1 className="mx-auto text-center">Loading...</h1>}

      {!loadingItem && item != null && (
        <Row className="container mt-4">
          {console.log(item[0].image)}
          <Col>
            <Row md={12}>
              <Col md={2}>
                {item[0].image.map((img, idx) => (
                  <Image className="mb-2" key={idx} src={img} rounded fluid />
                ))}
              </Col>
              <Col md={8}>
                <Image className="w-h-100pc" src={item[0].image[0]} rounded />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <h1>{item[0].item_name}</h1>
              <h5>
                <strong>₹{item[0].price}</strong>
                &nbsp;
                <Badge pills bg="warning">
                  ({item[0].subcategory_id})
                </Badge>
              </h5>
              <h5>
                <strong>{item[0].category_id}</strong>
              </h5>
              <p>{item[0].item_description}</p>

              <hr />
              <h5>
                <strong>Seller info</strong>
              </h5>
              {authenticated === true ? (
                <p>{item[0].contact_info}</p>
              ) : (
                <h5>
                  <u>
                    <Link to="/login" className="text-primary">
                      <strong>Login to view seller info</strong>
                    </Link>
                  </u>
                </h5>
              )}
            </Row>
            <Row>
              <Col md={12}>
                <Button
                  className="full-btn color-primary no-border disabled"
                  variant="primary"
                  type="submit"
                >
                  Chat with Seller (upcoming feature)
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
      <Advertisement />
    </>
  );
};

export default ProductPage;
