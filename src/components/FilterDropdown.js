import { DropdownButton, Dropdown, Col } from "react-bootstrap";

const FilterDropdown = ({ filterName, filterItems, inputHandler }) => {
  if (filterName !== undefined) {
    return (
      <Col md="auto" className="mt-4 mb-4 mr-2">
        <DropdownButton id="dropdown-item-button" title={filterName}>
          {filterItems !== undefined &&
            filterItems.map((item, idx) => {
              return (
                <Dropdown.Item
                  key={idx}
                  as="button"
                  className="full-btn color-primary no-border"
                  value={
                    item.category_name == undefined
                      ? item.subcategory_name
                      : item.category_name
                  }
                  onClick={inputHandler(
                    filterName,
                    item.category_name == undefined
                      ? item.subcategory_name
                      : item.category_name
                  )}
                >
                  {item.category_name == undefined
                    ? item.subcategory_name
                    : item.category_name}
                </Dropdown.Item>
              );
            })}
        </DropdownButton>
      </Col>
    );
  } else {
    return <></>;
  }
};

export default FilterDropdown;
