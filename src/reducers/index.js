import { combineReducers } from "redux";

import data from "./dataReducer";
import filters from "./filterReducer";

export default combineReducers({
  data,
  filters,
});
