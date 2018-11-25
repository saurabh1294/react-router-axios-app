import { FETCH_FAQ_LIST, FETCH_FAQ } from "./actionTypes";
import axios from "axios";

const baseURL = "http://localhost:3456/faqs/public/api/v1/static";
const faqListURL = `${baseURL}/list`;
const faqURL = `${baseURL}/faq`;

export const fetAllFAQS = () => {
  return dispatch => {
    return axios
      .get(`${faqListURL}`)
      .then(response => {
        dispatch(fetAllFAQSSuccess(response.data));
      })
      .catch(error => {
        console.log("ERROR in api call");
        throw error;
      });
  };
};

export const fetAllFAQSSuccess = data => {
  return {
    type: FETCH_FAQ_LIST,
    state: "FETCH_FAQ_LIST_STATE",
    response: data
  };
};

export const fetchFAQ = id => {
  return dispatch => {
    return axios
      .get(`${faqURL}`, { faqID: id })
      .then(response => {
        dispatch(fetchFAQSuccess(response.data));
      })
      .catch(error => {
        console.log("ERROR in api call");
        throw error;
      });
  };
};

export const fetchFAQSuccess = data => {
  return {
    type: FETCH_FAQ,
    state: "FETCH_FAQ_STATE",
    response: data
  };
};
