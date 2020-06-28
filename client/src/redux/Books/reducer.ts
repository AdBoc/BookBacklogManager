import {
  BookStateObject,
  BookActionTypes,
  ADD_BOOK,
  REMOVE_BOOK,
} from "./interfaces";
import { initialArray } from "../../_helpers/dummyData";

const initialState: BookStateObject[] = initialArray;

export function bookReducer(
  state = initialState,
  action: BookActionTypes
): any {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      state.splice(action.payload, 1);
      return [...state];
    default:
      return state;
  }
}
