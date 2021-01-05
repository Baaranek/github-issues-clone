import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIssuesFromApi } from '../../../redux/issuesRedux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
          <StyledLink to={`/issue/${_id}`} key={_id}>
            {title}
          </StyledLink>
        ))
      ) : (
        <span>No Issues Found!</span>
      )}
      <div>
        <Link to="/issue/new">New Issue</Link>
      </div>
    </div>
  );
};

const StyledLink = styled(Link)`
  display: block;
`;

export default IssuesList;
