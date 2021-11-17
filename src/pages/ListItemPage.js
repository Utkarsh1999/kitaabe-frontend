import { Col, Row, Form, Button } from "react-bootstrap";

const ListItemPage = () => {
  return (
    <div className="app">
      <Col md={6} className="mx-auto mt-4">
        <Row xs={1} md={12} className="g-2 mt-2 mb-2">
          <h1 className="text-center">Login</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Item Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Item Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control placeholder="This is scientific calculator" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
              <Form.Label>price (in INR)</Form.Label>
              <Form.Control placeholder="100" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="availableIn">
              <Form.Label>Available in City</Form.Label>
              <Form.Control placeholder="Delhi/Meerut" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="category">
              <Form.Label>category</Form.Label>
              <Form.Control placeholder="category" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="subCategory">
              <Form.Label>Sub Category (can be Null)</Form.Label>
              <Form.Control placeholder="sub-category" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="university">
              <Form.Label>
                University/College/Institution (can be Null)
              </Form.Label>
              <Form.Control placeholder="University of Delhi" />
            </Form.Group>

            <Button
              className="full-btn color-primary no-border"
              variant="primary"
              type="submit"
            >
              Add to Catalogue
            </Button>
          </Form>
        </Row>
      </Col>
    </div>
  );
};

export default ListItemPage;
