import {
  Action,
  InitialBookState,
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  ADD_SUCCESS,
  ADD_FAIL,
  REMOVE_SUCCESS,
  REMOVE_FAILURE,
  DOWNLOAD_BOOK,
} from "./interfaces";

const initialState: InitialBookState = {
  isFetching: true,
  items: [],
};

export function bookReducer(
  state = initialState,
  action: Action
): InitialBookState {
  switch (action.type) {
    case REQUEST_BOOKS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_BOOKS:
      return {
        isFetching: false,
        items: action.payload,
      };
    case ADD_SUCCESS:
    case ADD_FAIL:
    case REMOVE_SUCCESS:
    case REMOVE_FAILURE:
    case DOWNLOAD_BOOK:
      return state;
    default:
      return state;
  }
}

// import {
//   BookStateObject,
//   BookActionTypes,
//   ADD_BOOK,
//   REMOVE_BOOK,
// } from "./interfaces";
// import { initialArray } from "../../_helpers/dummyData";

// const initialState: BookStateObject[] = initialArray;

// export function bookReducer(state = initialState, action: BookActionTypes) {
//   switch (action.type) {
//     case ADD_BOOK:
//       return [...state, action.payload];
//     case REMOVE_BOOK:
//       state.splice(action.payload, 1);
//       return [...state];
//     default:
//       return state;
//   }
// }
