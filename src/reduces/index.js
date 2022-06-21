import { failedRequest, getImage, requestDog, URL_ACTION } from "../actions";

export function fetchDog() { // Thunk creatror
// export function fetchDog(xablau) { // Thunk creatror
  // console.log(xablau);
  return async (dispatch) => {
    dispatch(requestDog());
    try {
      const response = await fetch(URL_ACTION);
      const json = await response.json();
      return dispatch(getImage(json));
    } catch (error) {
      return dispatch(failedRequest(error));
    }
  };
}
