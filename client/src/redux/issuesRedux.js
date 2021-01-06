import axios from 'axios';
import { API_URL } from '../config';

/* ACTIONS */
const reducerName = 'issues';
const createActionName = (name) => `app/${reducerName}/${name}`;

const LOAD_ISSUES = createActionName('LOAD_ISSUES');
const ADD_ISSUE = createActionName('ADD_ISSUE');

export const loadIssues = (payload) => ({ payload, type: LOAD_ISSUES });
export const addIssue = (payload) => ({ payload, type: ADD_ISSUE });

/* THUNKS */

export const fetchIssuesFromApi = () => {
  return async (dispatch) => {
    let res = await axios.get(`${API_URL}/issues`);
    dispatch(loadIssues(res.data));
  };
};

export const addNewIssue = (data) => {
  return async (dispatch) => {
    let res = await axios.post(`${API_URL}/issues`, data);
    dispatch(addIssue(res));
  };
};

/* REDUCER */

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case LOAD_ISSUES:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
