import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Row, Col, Form, Button } from "react-bootstrap";

// import actions
import { SIGNUP, signUp } from "../store/actions/auth.actions";

const SignupPage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    university: "",
    email: "",
    password: "",
  });

  const { name, university, email, password } = formData;

  const inputHandler = (name) => (e) => {
    setFormData({
      ...formData,
      [name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // setFormData({
    //   name: document.getElementById("fullname").value,
    //   university: document.getElementById("university").value,
    //   email: document.getElementById("email").value,
    //   password: document.getElementById("password").value,
    // });
    console.log(formData);
    dispatch(signUp.request(formData));
  };

  return (
    <div className="app" onSubmit={submitHandler}>
      <Col md={6} className="mx-auto mt-4">
        <Row xs={1} md={12} className="g-2 mt-2 mb-2">
          <h1 className="text-center">Sign Up</h1>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                id="fullname"
                value={name}
                onChange={inputHandler("name")}
                placeholder="Your Full Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>University</Form.Label>
              <Form.Control
                type="text"
                id="university"
                value={university}
                onChange={inputHandler("university")}
                placeholder="University you're studying at?"
                required
              />
              <Form.Text className="text-muted">
                In case you're graduated, Enter your last University Name.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={inputHandler("email")}
                placeholder="Enter email"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                value={password}
                onChange={inputHandler("password")}
                placeholder="Password"
                required
              />
            </Form.Group>

            <Button
              className="full-btn color-primary no-border"
              variant="primary"
              type="submit"
            >
              SignUp
            </Button>
          </Form>
          {JSON.stringify(formData)}
        </Row>
      </Col>
    </div>
  );
};

export default SignupPage;
