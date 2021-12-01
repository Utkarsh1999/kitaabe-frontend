import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button, Form, FormControl, Badge } from "react-bootstrap";
import { ItemCard, FilterDropdown, Advertisement } from "../components";

import { getAllItems } from "../store/actions/catalogue.actions";

const CatalogePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItems.request(filterValue));
  }, []);

  const { categories, subCategories, items, promotedItems } = useSelector(
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

      <Col md={10} className="mx-auto row">
        <FilterDropdown
          inputHandler={inputHandler}
          filterName="Category"
          filterItems={categories}
        />
        <FilterDropdown
          inputHandler={inputHandler}
          filterName="Sub Category"
          filterItems={subCategories}
        />

        <Col md="6" className="mt-4 mb-4 mr-2">
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
              className="w-100pc"
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
      </Col>
      <Col md="2" className="mx-auto row mb-4">
        <Col md={"auto"}>
          <Badge pill bg="primary">
            {pills.category_id}
          </Badge>{" "}
        </Col>
        <Col md={"auto"}>
          <Badge pill bg="secondary">
            {pills.subcategory_id}
          </Badge>
        </Col>
      </Col>

      {/* item cards */}
      <Col md={10} className="mx-auto">
        <Row className="">
          {promotedItems &&
            promotedItems.map((item, idx) => {
              return (
                <ItemCard
                  className="mt-2 mb-2 border-yellow"
                  key={idx}
                  item={item}
                  img={"https://picsum.photos/200"}
                />
              );
            })}

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

      <Advertisement />
    </div>
  );
};

export default CatalogePage;
