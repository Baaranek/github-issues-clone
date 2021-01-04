import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIssuesFromApi } from '../../../redux/issuesRedux';

const IssuesList = () => {
  const dispatch = useDispatch();
  const issues = useSelector((state) => state.issues.data);

  useEffect(() => {
    dispatch(fetchIssuesFromApi());
  }, []);

  return (
    <div>
      <ul>
        {issues ? (
          issues.map(({ id, title }) => <li key={id}>{title}</li>)
        ) : (
          <span>No Issues Found!</span>
        )}
      </ul>
    </div>
  );
};

export default IssuesList;
