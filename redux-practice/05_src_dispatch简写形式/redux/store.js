import { createStore } from "redux";
import count_reducer from "./count_reducers";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

export default createStore(count_reducer,applyMiddleware(thunk));