import { Row, Col, Form, Button } from "react-bootstrap";

const LoginPage = () => {
  return (
    <div className="app">
      <Col md={6} className="mx-auto mt-4">
        <Row xs={1} md={12} className="g-2 mt-2 mb-2">
          <h1 className="text-center">Login</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button
              className="full-btn color-primary no-border"
              variant="primary"
              type="submit"
            >
              Login
            </Button>
          </Form>
        </Row>
      </Col>
    </div>
  );
};

export default LoginPage;
