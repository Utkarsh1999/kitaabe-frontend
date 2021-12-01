import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ItemTable } from "../components";
import { getItemsByUserId } from "../store/actions/item.actions";

import { Col } from "react-bootstrap";

const ViewItemPage = () => {
  const dispatch = useDispatch();
  const { cred } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.item);
  useEffect(() => {
    dispatch(getItemsByUserId.request(cred._id));
  }, [cred]);
  return (
    <div>
      <h1>Listed Items</h1>
      <Col md={10} className="mx-auto">
        {items == null ? (
          <p>you haven't listed any items so far.</p>
        ) : (
          <ItemTable items={items} />
        )}
      </Col>
    </div>
  );
};

export default ViewItemPage;
