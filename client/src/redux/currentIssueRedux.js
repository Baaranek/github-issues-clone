import axios from 'axios';
import { API_URL } from '../config';

/* ACTIONS */
const reducerName = 'currentIssue';
const createActionName = (name) => `app/${reducerName}/${name}`;

const LOAD_CURRENT_ISSUE = createActionName('LOAD_CURRENT_ISSUE');
const SEND_COMMENT_TO_CURRENT_ISSUE = createActionName(
  'SEND_COMMENT_TO_CURRENT_ISSUE'
);

export const loadIssue = (payload) => ({ payload, type: LOAD_CURRENT_ISSUE });
export const sendCommentToIssue = (payload) => ({
  payload,
  type: SEND_COMMENT_TO_CURRENT_ISSUE,
});

/* THUNKS */

export const fetchIssueByIdFromApi = (id) => {
  return async (dispatch) => {
    let res = await axios.get(`${API_URL}/issues/${id}`);
    dispatch(loadIssue(res.data));
  };
};

export const addNewCommentToIssue = (id, data) => {
  return async (dispatch) => {
    const res = await axios.put(`${API_URL}/issues/${id}`, data);
    dispatch(sendCommentToIssue(res));
  };
};

/* REDUCER */
export default function reducer(state = [], action = {}) {
  const data = action.payload;
  switch (action.type) {
    case LOAD_CURRENT_ISSUE:
      return { ...state, ...data };
    default:
      return state;
  }
}
