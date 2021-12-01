import Button from "@restart/ui/esm/Button";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { updateItem } from "../store/actions/item.actions";

const ItemTable = ({ items }) => {
  const dispatch = useDispatch();

  const changeStatus = (item, status) => {
    item.status = status;
    console.log("item: " + JSON.stringify(item));
    console.log(status);
    dispatch(updateItem.request(item));
  };

  return (
    <>
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price (in Rs)</th>
            <th>Status</th>
            <th>University</th>
            <th>Listed On</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => {
            return (
              <tr key={item._id}>
                <td>{item.item_name}</td>
                <td>{item.item_description}</td>
                <td>{item.price}</td>
                <td>
                  {item.status === "1" ? "published" : null}

                  {item.status === "2" ? "saved as Draft" : null}

                  {item.status === "3" ? "Sold Out" : null}

                  {item.status === "4" ? "Deleted" : null}
                </td>
                <td>{item.university}</td>
                <td>{item.listed_on}</td>
                <td>
                  {item.status === "3" || item.status === "4" ? null : (
                    <>
                      {item.status == "3" ? null : (
                        <Button className="btn btn-success" disabled>
                          Edit (upcoming feature)
                        </Button>
                      )}

                      {item.status === "1" ? (
                        <Button
                          className="btn btn-warning"
                          onClick={() => changeStatus(item, "3")}
                        >
                          Sold Out!
                        </Button>
                      ) : null}

                      {item.status === "2" ? (
                        <Button
                          className="btn btn-info"
                          onClick={() => changeStatus(item, "1")}
                        >
                          Publish Item!
                        </Button>
                      ) : null}
                    </>
                  )}
                </td>
                <td>
                  {item.status === "3" || item.status === "4" ? null : (
                    <Button
                      className="btn btn-danger"
                      onClick={() => changeStatus(item, "4")}
                    >
                      Delete
                    </Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ItemTable;
