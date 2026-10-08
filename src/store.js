import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import loremReducer from "./reducers/loremReducer";

const store = createStore(
  loremReducer,
  applyMiddleware(thunk)
);

export default store;