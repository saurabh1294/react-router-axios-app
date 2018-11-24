import { FETCH_FAQ_LIST, FETCH_FAQ } from './actionTypes';
import axios from 'axios';

const faqListURL = 'http://localhost:3456/faqs/public/api/v1/static/list';
const faqURL = 'http://localhost:3456/faqs/public/api/v1/static/faq';

export const fetAllFAQS = () => {
  return (dispatch) => {
    return axios.get(`${faqListURL}`)
      .then(response => {
        dispatch(fetAllFAQSSuccess(response.data))
      })
      .catch(error => {
        console.log("ERROR in api call");
        throw(error);
      });
  };
};

export const fetAllFAQSSuccess =  (data) => {
  return {
    type: FETCH_FAQ_LIST,
    response: data
  }
};

export const fetchFAQ = (id) => {
  return (dispatch) => {
    return axios.get(`${faqURL}`, { 'faqID': id })
      .then(response => {
        dispatch(fetchFAQSuccess(response.data))
      })
      .catch(error => {
        console.log("ERROR in api call");
        throw(error);
      });
  };
};

export const fetchFAQSuccess =  (data) => {
  return {
    type: FETCH_FAQ,
    response: data
  }
};