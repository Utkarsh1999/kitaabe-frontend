import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Col,
  Row,
  Form,
  Button,
  Dropdown,
  Image,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
// import actions
import { saveItem } from "../store/actions/item.actions";

const ListItemPage = () => {
  const dispatch = useDispatch();
  const { categories, subCategories } = useSelector((state) => state.catalogue);
  const { savingItem, itemId } = useSelector((state) => state.item);
  const { cred } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    item_name: null,
    item_description: null,
    image: [],
    contact_info: null,
    price: null,
    seller_id: cred._id,
    available_in_city: null,
    category_id: null,
    subcategory_id: null,
    status: "2",
    university: null,
  });

  const inputHandler = (name) => (e) => {
    e.preventDefault();
    if (name == "image") {
      console.log(e.target.files);
      setFormData({
        ...formData,
        image: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: e.target.value,
      });
    }
  };

  const uploadFile = (file) => (e) => {
    const fd = new FormData();
    fd.append("image", e.target.files[0]);

    fetch("https://kitaabe.herokuapp.com/api/media/upload", {
      // Your POST endpoint
      method: "POST",
      headers: {
        // Content-Type may need to be completely **omitted**
        // or you may need something
      },
      body: fd, // This is your file object
    })
      .then(
        (response) => response.json() // if the response is a JSON object
      )
      .then(
        (data) =>
          setFormData({
            ...formData,
            image: [data.url],
          }) // Handle the success response object
      )
      .catch(
        (error) => console.log(error) // Handle the error response object
      );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      seller_id: cred._id,
    });
    dispatch(saveItem.request(formData));
    setFormData({
      item_name: "",
      item_description: "",
      image: [],
      contact_info: "",
      price: "",
      seller_id: "",
      available_in_city: "",
      category_id: "",
      subcategory_id: "",
      status: "2",
      university: "",
    });
  };

  return (
    <div className="app">
      <Col md={6} className="mx-auto mt-4">
        <Row xs={1} md={12} className="g-2 mt-2 mb-2">
          <h1 className="text-center">Add Item</h1>

          <Form onSubmit={submitHandler} encType="multipart/form-data">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Item Name"
                value={formData.item_name}
                onChange={inputHandler("item_name")}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={formData.item_description}
                onChange={inputHandler("item_description")}
                placeholder="This is scientific calculator"
              />
            </Form.Group>
            <Row>
              <Col md={6}>
                {formData.image && <Image src={formData.image} fluid />}
              </Col>
              <Col md={6}>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Add Item Image</Form.Label>
                  <Form.Control type="file" onChange={uploadFile("image")} />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Contact Information</Form.Label>
              <Form.Control
                type="text"
                value={formData.contact_info}
                onChange={inputHandler("contact_info")}
                placeholder="Contact information, e.g. contact no, or/and email address"
              />
              <Form.Text className="text-muted">
                Note: This will be available publicly on our platform to the
                registered users.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
              <Form.Label>price (in INR)</Form.Label>
              <Form.Control
                type="text"
                value={formData.price}
                onChange={inputHandler("price")}
                placeholder="for e.g. 100"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="availableIn">
              <Form.Label>Available in City</Form.Label>
              <Form.Control
                type="text"
                value={formData.available_in_city}
                onChange={inputHandler("available_in_city")}
                placeholder="for e.g. Delhi/Meerut"
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
                            value={category.category_name}
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
                            value={subCategory.subcategory_name}
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
                value={formData.university}
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

          {!savingItem && itemId != null && (
            <Alert variant={"success"}>
              Item Added Successfully!
              <Link to={`/view/product/${itemId}`}>View Item</Link>
            </Alert>
          )}
        </Row>
      </Col>
    </div>
  );
};

export default ListItemPage;
