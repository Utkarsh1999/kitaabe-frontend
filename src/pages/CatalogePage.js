import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { ItemCard, FilterDropdown } from "../components";

const CatalogePage = () => {
  const [cardItems, setCardItems] = useState([
    {
      name: "item name",
      desc: "item desc",
      category: "item category",
      img: "https://picsum.photos/200",
    },
    {
      name: "item name",
      desc: "item desc",
      category: "item category",
      img: "https://picsum.photos/200",
    },
    {
      name: "item name",
      desc: "item desc",
      category: "item category",
      img: "https://picsum.photos/200",
    },
    {
      name: "item name",
      desc: "item desc",
      category: "item category",
      img: "https://picsum.photos/200",
    },
    {
      name: "item name",
      desc: "item desc",
      category: "item category",
      img: "https://picsum.photos/200",
    },
    {
      name: "item name",
      desc: "item desc",
      category: "item category",
      img: "https://picsum.photos/200",
    },
    {
      name: "item name",
      desc: "item desc",
      category: "item category",
      img: "https://picsum.photos/200",
    },
  ]);

  const [filters, setFilters] = useState([
    {
      name: "filterName filterName filterName",
      items: ["filter 1", "filter 2", "filter 3", "filter 4"],
    },
    {
      name: "filterName",
      items: ["filter 1", "filter 2", "filter 3", "filter 4"],
    },
    {
      name: "filterName",
      items: ["filter 1", "filter 2", "filter 3", "filter 4"],
    },
    {
      name: "filterName",
      items: ["filter 1", "filter 2", "filter 3", "filter 4"],
    },
  ]);

  return (
    <div>
      <h1 className="text-center"> Explore</h1>

      {/* category buttons */}
      <Col md={6} className="mx-auto">
        <Row xs={1} md={12} className="g-2 mt-2 mb-2">
          <Col md={6}>
            <Button
              className="full-btn color-primary no-border"
              variant="primary"
              type="submit"
            >
              Notes
            </Button>
          </Col>
          <Col md={6}>
            <Button
              className="full-btn color-primary no-border"
              variant="primary"
              type="submit"
            >
              Used Books
            </Button>
          </Col>
          {/* <Button>Notes</Button> */}
        </Row>
      </Col>

      {/* filter buttons */}
      <Row md={12} style={{ flexDirection: "row-reverse" }}>
        {filters.map((filter, idx) => {
          return (
            <FilterDropdown
              key={idx}
              filterName={filter.name}
              filterItems={filter.items}
            />
          );
        })}
      </Row>

      {/* item cards */}
      <Col md={10} className="mx-auto">
        <Row className="">
          {cardItems.map((cardDetail, idx) => {
            return (
              <ItemCard
                className="mt-2 mb-2"
                key={idx}
                name={cardDetail.name}
                desc={cardDetail.desc}
                category={cardDetail.category}
                img={cardDetail.img}
              />
            );
          })}
        </Row>
      </Col>
    </div>
  );
};

export default CatalogePage;
