import { createStore } from "redux";
import count_reducer from "./count_reducers";

export default createStore(count_reducer);