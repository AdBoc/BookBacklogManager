import { BookStateObject, SHOW, BookActionTypes } from "./interfaces";
import { initialArray } from "../../_helpers/dummyData";

const initialState: BookStateObject[] = initialArray;

export function bookReducer(
  state = initialState,
  action: BookActionTypes
): any {
  switch (action.type) {
    case SHOW:
      console.log(state);
      break;
    default:
      return state;
  }
}
