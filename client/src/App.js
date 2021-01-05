import React from 'react';
import IssuesList from './components/pages/IssuesList/IssuesList';
import IssueDetail from './components/pages/IssueDetail/IssueDetail';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch location={location}>
      <Route exact path="/">
        {' '}
        <IssuesList />{' '}
      </Route>
      <Route exact path="/issue/:id">
        {' '}
        <IssueDetail />{' '}
      </Route>
    </Switch>
  );
};

export default App;
