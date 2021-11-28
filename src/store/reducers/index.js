import { combineReducers } from "redux";

import auth from "./auth.reducer";
import catalogue from "./catalogue.reducer";
import item from "./item.reducer";

const allReducers = combineReducers({
  auth,
  catalogue,
  item,
});

const rootReducers = (state, action) => {
  return allReducers(state, action);
};

export default rootReducers;
