import { createStore } from "redux";
import { bookReducer } from "./Books/reducer";

export const store = createStore(bookReducer);
