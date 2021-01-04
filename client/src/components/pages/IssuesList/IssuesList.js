import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIssuesFromApi } from '../../../redux/issuesRedux';
import { Link } from 'react-router-dom';

const IssuesList = () => {
  const dispatch = useDispatch();
  const issues = useSelector((state) => state.issues.data);

  useEffect(() => {
    dispatch(fetchIssuesFromApi());
  }, []);

  return (
    <div>
      {issues ? (
        issues.map(({ _id, title }) => (
          <Link to={`/issue/${_id}`} key={_id}>
            {title}
          </Link>
        ))
      ) : (
        <span>No Issues Found!</span>
      )}
    </div>
  );
};

export default IssuesList;
