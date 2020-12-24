import axios from 'axios';

/* SELECTORS */

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

/* INITIAL STATE */

/* REDUCER */

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case LOAD_ISSUES:
      return { ...statePart, data: action.payload };
    default:
      return statePart;
  }
}
