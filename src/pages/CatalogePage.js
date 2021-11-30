import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button, Form, FormControl, Badge } from "react-bootstrap";
import { ItemCard, FilterDropdown } from "../components";

import { getAllItems } from "../store/actions/catalogue.actions";

const CatalogePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItems.request(filterValue));
  }, []);

  const { categories, subCategories, items } = useSelector(
    (state) => state.catalogue
  );

  const [pills, setPills] = useState({
    category_id: null,
    subcategory_id: null,
  });

  const [filterValue, setFilterValue] = useState({
    search: "",
    category_id: "",
    subcategory_id: "",
  });

  const inputHandler =
    (name, displayName = null) =>
    (e) => {
      e.preventDefault();
      setPills({
        ...pills,
        [name]: displayName,
      });
      setFilterValue({
        ...filterValue,
        [name]: e.target.value,
      });
    };

  const applyFilters = (e) => {
    e.preventDefault();
    dispatch(getAllItems.request(filterValue));
  };
  const clearFilters = () => {
    setPills({
      category_id: null,
      subcategory_id: null,
    });
    setFilterValue({
      search: "",
      category_id: "",
      subcategory_id: "",
    });
  };

  return (
    <div>
      <h1 className="text-center"> Explore</h1>

      {/* filter buttons */}
      <Row md={6} className="mx-auto" style={{ flexDirection: "row" }}>
        <FilterDropdown
          inputHandler={inputHandler}
          filterName="subcategory_id"
          filterItems={subCategories}
        />
        <FilterDropdown
          inputHandler={inputHandler}
          filterName="category_id"
          filterItems={categories}
        />
        <Col md="auto" className="mt-4 mb-4 mr-2">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={filterValue.search}
              onChange={inputHandler("search")}
            />
            <Button
              variant="outline-success"
              type="submit"
              onClick={applyFilters}
            >
              Search/Apply Filters
            </Button>
          </Form>
        </Col>
        <Col md="auto" className="mt-4 mb-4 mr-2">
          <Button variant="outline-info" onClick={clearFilters}>
            Clear Filters
          </Button>
        </Col>
      </Row>
      <Row md="2">
        <Col md={1}>
          <Badge pill bg="primary">
            {pills.category_id}
          </Badge>{" "}
        </Col>
        <Col md={1}>
          <Badge pill bg="secondary">
            {pills.subcategory_id}
          </Badge>
        </Col>
      </Row>
      {/* item cards */}
      <Col md={10} className="mx-auto">
        <Row className="">
          {items &&
            items.map((item, idx) => {
              return (
                <ItemCard
                  className="mt-2 mb-2"
                  key={idx}
                  item={item}
                  img={"https://picsum.photos/200"}
                />
              );
            })}
        </Row>
      </Col>
    </div>
  );
};

export default CatalogePage;
