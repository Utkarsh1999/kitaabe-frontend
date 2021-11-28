import { combineReducers } from "redux";

import auth from "./auth.reducer";

const allReducers = combineReducers({
  auth,
});

const rootReducers = (state, action) => {
  return allReducers(state, action);
};

export default rootReducers;
