import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ItemTable } from "../components";
import { getItemsByUserId } from "../store/actions/item.actions";

const ViewItemPage = () => {
  const dispatch = useDispatch();
  const { cred } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.item);
  useEffect(() => {
    dispatch(getItemsByUserId.request(cred._id));
  }, [cred]);
  return (
    <div>
      <h1>
        This page will display all the listed items of a user {cred.email} -{" "}
        {cred._id}
      </h1>
      {items && <ItemTable items={items} />}
    </div>
  );
};

export default ViewItemPage;
