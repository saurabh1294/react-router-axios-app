import { FETCH_FAQ, FETCH_FAQ_LIST } from "../actions/actionTypes";

export default function faqReducer(state = [], action) {
  switch (action.type) {
    case FETCH_FAQ:
      console.log("FETCH_FAQ");
      return [...state, action];
    case FETCH_FAQ_LIST:
      console.log("FETCH_FAQ_LIST", state, action);
      return [...state, action];
    // add more actions here if needed
    default:
      console.log("default action");
      return state;
  }
}
