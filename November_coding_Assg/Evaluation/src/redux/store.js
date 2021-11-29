import { createStore } from "redux";
import { reducerAuth } from "./reducer";

export const store = createStore(reducerAuth)