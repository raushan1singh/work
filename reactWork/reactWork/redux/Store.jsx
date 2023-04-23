import rootRedcer from "./reducer/Index";
import { createStore } from "redux";

const Store = createStore(rootRedcer);

export default Store;