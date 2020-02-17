import { combineReducers } from "redux";
import { defaultReducers } from "./default";
import { counterReducers } from "./counter";
import { swReducers } from "./sw";

export const reducers = combineReducers({
  content: defaultReducers,
  counter: counterReducers,
  sw: swReducers
});
