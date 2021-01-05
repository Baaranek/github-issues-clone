import React from 'react';
import IssuesList from './components/pages/IssuesList/IssuesList';
import IssueDetail from './components/pages/IssueDetail/IssueDetail';
import NewIssue from './components/pages/NewIssue/NewIssue';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch location={location}>
      <Route exact path="/">
        {' '}
        <IssuesList />{' '}
      </Route>
      <Route exact path="/issue/new">
        {' '}
        <NewIssue />{' '}
      </Route>
      <Route exact path="/issue/:id">
        {' '}
        <IssueDetail />{' '}
      </Route>
    </Switch>
  );
};

export default App;
