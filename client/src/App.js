import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIssuesFromApi } from './redux/issuesRedux';

const App = () => {
  const dispatch = useDispatch();
  const issues = useSelector((state) => state.issues.data);

  useEffect(() => {
    dispatch(fetchIssuesFromApi());
  }, []);

  return (
    <>
      {issues ? (
        issues.map(({ id, title }) => (
          <ul key={id}>
            <li>{title}</li>
          </ul>
        ))
      ) : (
        <span>Elo</span>
      )}
    </>
  );
};

export default App;
