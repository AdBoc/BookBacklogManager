import { createStore, combineReducers, applyMiddleware } from "redux";
import { bookReducer } from "./Books/reducer";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { userReducer } from "./User/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { BookStateObject } from "./Books/interfaces";
import { UserInitialState } from "./User/interfaces";

export interface ReduxStore {
  books: BookStateObject[];
  user: UserInitialState;
}

export const rootReducer = combineReducers({
  books: bookReducer,
  user: userReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware))
);

// Middleware
// const myLogger = () => () => () => {
//   console.log("work");
// };
