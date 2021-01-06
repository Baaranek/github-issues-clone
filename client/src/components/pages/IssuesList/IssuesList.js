import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIssuesFromApi } from '../../../redux/issuesRedux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import formatDate from '../../../utils/formatDate';

const IssuesList = () => {
  const dispatch = useDispatch();
  const issues = useSelector((state) => state.issues.data);

  useEffect(() => {
    dispatch(fetchIssuesFromApi());
  }, []);

  return (
    <div>
      <IssuesContainer>
        {issues ? (
          issues.map(({ _id, title, date, author, tags }) => (
            <IssueContainer key={_id}>
              <TitleAndTagsContainer>
                <StyledLink to={`/issue/${_id}`}>{title}</StyledLink>
                {tags.map((tag) => (
                  <StyledTag key={tag}>{tag}</StyledTag>
                ))}
              </TitleAndTagsContainer>
              <StyledSpan>
                #{_id} opened on {formatDate(date)} by {author}
              </StyledSpan>
            </IssueContainer>
          ))
        ) : (
          <span>No Issues Found!</span>
        )}
      </IssuesContainer>
      <div>
        <Link to="/issue/new">New Issue</Link>
      </div>
    </div>
  );
};

const IssuesContainer = styled.div`
  border: 1px solid #30363d;
  width: 80%;
  margin: auto;
`;

const IssueContainer = styled.div`
  border-top: 1px solid #30363d;
  padding: 1rem;

  :hover {
    background-color: #161b22;
  }
`;

const TitleAndTagsContainer = styled.div`
  padding-bottom: 0.5rem;
`;

const StyledLink = styled(Link)`
  display: inline;
`;

const StyledSpan = styled.span`
  font-size: 0.8rem;
`;

const StyledTag = styled.span`
  font-size: 0.8rem;
  color: #00e6c4;
  padding: 0 7px;
  border-radius: 2rem;
  cursor: pointer;
  border: 1px solid #00e6c4;
  background-color: #0086722e;
  margin: 0 0.3rem;
`;

export default IssuesList;
