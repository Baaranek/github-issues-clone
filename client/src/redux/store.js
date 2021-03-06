import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Import Reducers
import issues from './issuesRedux';
import currentIssue from './currentIssueRedux';

// Combine Reducers
const rootReducer = combineReducers({
  issues,
  currentIssue,
});

// Create Store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
