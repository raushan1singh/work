import Rootreducer from "./reducer/Index";
import { createStore } from "redux";

const Store = createStore(Rootreducer);

export default Store;