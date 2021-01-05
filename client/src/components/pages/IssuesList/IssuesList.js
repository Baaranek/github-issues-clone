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

  function dateFormat(date) {
    const d = date.slice(0, -14);
    const day = d.slice(8);
    const month = parseInt(d.slice(5, 7));
    const year = d.slice(0, 4);
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const getMonth = months[month - 1];
    const newDate = `${getMonth} ${day}, ${year}`;
    return newDate;
  }

  return (
    <div>
      {issues ? (
        issues.map(({ _id, title, date, author, tags }) => (
          <div key={_id}>
            <StyledLink to={`/issue/${_id}`}>
              <h3>{title}</h3>
            </StyledLink>
            <h4>
              #{_id} opened on {dateFormat(date)} by {author}
            </h4>
            {tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
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
