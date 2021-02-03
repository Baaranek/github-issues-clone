import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIssueByIdFromApi } from '../../../redux/currentIssueRedux';
import styled from 'styled-components';
import AddNewComment from '../../features/AddNewComment/AddNewComment';

const IssueDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.currentIssue);
  const { comments } = data;
  const amountOfComments = comments ? comments.length : null;
  console.log(data);

  useEffect(() => {
    dispatch(fetchIssueByIdFromApi(id));
  }, []);

  return (
    <Container>
      <ContentContainer>
        {data ? (
          <TitleContainer>
            <div>
              <TitleSpan>{data.title}</TitleSpan>
              <IdSpan>#{data._id}</IdSpan>
            </div>
            <div>
              {/* TODO Make day counter since issue was created + Comments counter*/}
              <span>
                #{data.author} opened this issue X days ago * {amountOfComments}{' '}
                comments
              </span>
            </div>
          </TitleContainer>
        ) : null}
        {/* Mapping all comments*/}
        {/* TODO Also make day counter, include ( DAYS /DAY ) */}
        {comments &&
          comments.map(({ _id, author, description }) => (
            <CommentContainer key={_id}>
              <CommentInfo>
                <p>{author} commented X days ago</p>
              </CommentInfo>
              <div>
                <p>{description}</p>
              </div>
            </CommentContainer>
          ))}
        {/* Import Add Issue component */}
        <AddNewComment postId={id} />
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

const ContentContainer = styled.div`
  margin: auto;
  width: 80%;
`;

const CommentContainer = styled.div`
  border: 1px solid #30363d;
  width: 70%;
  margin: 1.5rem 0;
`;

const CommentInfo = styled.div`
  border-bottom: 1px solid #30363d;
  background-color: #161b22;
  height: 2.5rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;

const TitleSpan = styled.span`
  font-size: 2rem;
`;

const IdSpan = styled.span`
  color: #484f58;
`;

const TitleContainer = styled.div`
  margin: 1.5rem 0;
`;

export default IssueDetail;
