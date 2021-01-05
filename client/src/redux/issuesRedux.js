import axios from 'axios';

/* ACTIONS */
const reducerName = 'issues';
const createActionName = (name) => `app/${reducerName}/${name}`;

const LOAD_ISSUES = createActionName('LOAD_ISSUES');
export const loadIssues = (payload) => ({ payload, type: LOAD_ISSUES });

/* THUNKS */

export const fetchIssuesFromApi = () => {
  return async (dispatch) => {
    let res = await axios.get('http://localhost:8000/api/issues');
    dispatch(loadIssues(res.data));
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
