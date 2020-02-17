import { combineReducers } from "redux";
import { defaultReducers } from "./default";
import { counterReducers } from "./counter";

export const reducers = combineReducers({
  content: defaultReducers,
  counter: counterReducers
});
