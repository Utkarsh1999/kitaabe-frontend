import React from "react";

import { Button, Row, Col } from "react-bootstrap";

import { CategoryCard, Footer } from "../components";

const LandingPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Col md="8">
          <Row>
            <Col md="6" className="mx-auto mb-4">
              <h1> 📚 KITAABE </h1>
              <sub>Buy and Sell used books and notes!</sub>
            </Col>
          </Row>
          <Row>
            <Col md={2}></Col>
            <Col md={4}>
              <Button
                className="color-primary no-border"
                variant="primary"
                type="submit"
              >
                Explore
              </Button>
            </Col>
            <Col md={4}>
              <Button
                className="full-btn color-primary no-border"
                variant="primary"
                type="submit"
              >
                View Wishlist
              </Button>
            </Col>
            <Col md={2} className="mx-auto"></Col>
          </Row>
        </Col>
      </header>

      <CategoryCard />
      <Footer />
    </div>
  );
};

export default LandingPage;
