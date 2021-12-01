import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Form, Button, Image } from "react-bootstrap";

import { Link, useNavigate, Navigate } from "react-router-dom";

import { SIGNIN, signIn, signUp } from "../store/actions/auth.actions";

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authenticated } = useSelector((state) => state.auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      email: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };

    dispatch(signIn.request(credentials));
  };

  return (
    <div className="app row">
      {authenticated ? (
        <>{<Navigate to="/explore" />}</>
      ) : (
        <Col md={4} className="mx-auto mt-4">
          <Row xs={1} md={12} className="g-2 mt-2 mb-2">
            <h1 className="text-center">Login</h1>
            <Form>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  // id="username"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  // id="password"
                />
              </Form.Group>

              <Button
                className="full-btn color-primary no-border mx-auto"
                variant="primary"
                onClick={handleSubmit}
              >
                Login
              </Button>
            </Form>
            <p className="text-dark mx-auto">
              Need a new username and password?{" "}
              <Link className="text-dark" to="/signup">
                Register now!
              </Link>
            </p>
          </Row>
        </Col>
      )}

      <Col md={6} className="mt-4 mt-2em">
        <Image src="https://picsum.photos/500/500" fluid />
      </Col>
    </div>
  );
};

export default SignInPage;
