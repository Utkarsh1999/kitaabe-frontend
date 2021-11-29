import Button from "@restart/ui/esm/Button";
import { Table } from "react-bootstrap";

const ItemTable = ({ items }) => {
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
                <td>{item.status == "1" ? "published" : "in draft"}</td>
                <td>{item.university}</td>
                <td>{item.listed_on}</td>
                <td>
                  <Button className="btn btn-success">Edit</Button>
                </td>
                <td>
                  {item.status == "3" ? null : (
                    <Button className="btn btn-danger">Delete Entry</Button>
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
