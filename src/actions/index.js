export const GET_IMAGE = "GET_IMAGE";
export const REQUEST_IMAGE = "REQUEST_IMAGE";
export const FAILED_REQUEST = "FAILED_REQUEST";
export const URL_ACTION = "https://dog.ceo/api/breeds/image/random";

export const getImage = (json) => ({ type: GET_IMAGE, payload: json.message })

export const requestDog = () => ({ type: REQUEST_IMAGE });

export const failedRequest = (error) => ({ type: FAILED_REQUEST, payload: error })
