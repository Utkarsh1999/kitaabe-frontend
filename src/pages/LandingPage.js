import React from "react";

import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            <Col md={8}>
              <Link to="/explore">
                <Button
                  className="color-primary no-border"
                  variant="primary"
                  to="/explore"
                >
                  Explore
                </Button>
              </Link>
            </Col>

            <Col md={2} className="mx-auto"></Col>
          </Row>
        </Col>
      </header>

      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
