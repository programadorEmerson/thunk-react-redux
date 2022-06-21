// src/store/index.js
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { FAILED_REQUEST, GET_IMAGE, REQUEST_IMAGE } from "../actions";

const initialState = {
  isFetching: false,
  imagePath: "https://images.dog.ceo/breeds/terrier-irish/n02093991_403.jpg",
  error: "",
};

function dogReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_IMAGE:
      return { ...state, isFetching: true };
    case GET_IMAGE:
      return { ...state, imagePath: payload, isFetching: false };
    case FAILED_REQUEST:
      return { ...state, error: payload, isFetching: false };
    default:
      return state;
  }
}

const store = createStore(
  dogReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
