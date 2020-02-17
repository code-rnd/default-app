import { createStore, applyMiddleware } from "redux";
import { reducers } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(
  reducers /* preloadedState, */,
  composeWithDevTools(applyMiddleware(thunk))
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
