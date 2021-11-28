import React from "react";

import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { ToastContainer } from "react-toastify";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <strong>KITAABE</strong>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel" className="text-center">
              <strong>KITAABE</strong>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link to="/">Home</Link>
              <Link to="/explore">Explore</Link>
              <Link to="/profile">My Account</Link>
              <Link to="/item/new">List Item</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
              <Link to="/view/productId">Product Page</Link>
              <Link to="/view/items">Listed Items Page</Link>

              {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
      <ToastContainer autoClose={2000} />
    </Navbar>
  );
};

export default NavBar;
