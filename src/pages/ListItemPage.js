import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Form, Button, Dropdown } from "react-bootstrap";

// import actions
import { saveItem } from "../store/actions/item.actions";

const ListItemPage = () => {
  const dispatch = useDispatch();
  const { categories, subCategories } = useSelector((state) => state.catalogue);

  const [formData, setFormData] = useState({
    item_name: null,
    item_description: null,
    price: null,
    seller_id: null,
    available_in_city: null,
    category_id: null,
    subcategory_id: null,
    status: "2",
    university: null,
  });

  const inputHandler = (name) => (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveItem.request(formData));
  };

  return (
    <div className="app">
      <Col md={6} className="mx-auto mt-4">
        <Row xs={1} md={12} className="g-2 mt-2 mb-2">
          <h1 className="text-center">Add Item</h1>
          <p>{JSON.stringify(formData)}</p>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Item Name"
                onChange={inputHandler("item_name")}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                onChange={inputHandler("item_description")}
                placeholder="This is scientific calculator"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
              <Form.Label>price (in INR)</Form.Label>
              <Form.Control
                type="text"
                onChange={inputHandler("price")}
                placeholder="for e.g. 100"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="availableIn">
              <Form.Label>Available in City</Form.Label>
              <Form.Control
                type="text"
                onChange={inputHandler("available_in_city")}
                placeholder="Delhi/Meerut"
              />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="category">
                  <Dropdown required>
                    <Dropdown.Toggle variant="primary" id="categoryDropdown">
                      Category
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {categories.map((category, idx) => {
                        return (
                          <Dropdown.Item
                            as="option"
                            key={idx}
                            value={category._id}
                            onClick={inputHandler("category_id")}
                          >
                            {category.category_name}
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="subCategory">
                  {/* <Form.Label>Sub Category (can be Null)</Form.Label> */}
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="subCategoryDropdown">
                      Sub-Category/Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {subCategories.map((subCategory, idx) => {
                        return (
                          <Dropdown.Item
                            as="option"
                            key={idx}
                            value={subCategory._id}
                            onClick={inputHandler("subcategory_id")}
                          >
                            {subCategory.subcategory_name}
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="university">
              <Form.Label>
                University/College/Institution (can be Null)
              </Form.Label>
              <Form.Control
                type="text"
                onChange={inputHandler("university")}
                placeholder="University of Delhi"
              />
            </Form.Group>

            <div className="mb-3">
              <Form.Check
                inline
                label="save as draft"
                name="group1"
                type="radio"
                value="2"
                onChange={inputHandler("status")}
                id={`inline-radio-1`}
              />
              <Form.Check
                inline
                label="publish to catalogue"
                name="group1"
                type="radio"
                value="1"
                onChange={inputHandler("status")}
                id={`inline-radio-2`}
              />
            </div>

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
