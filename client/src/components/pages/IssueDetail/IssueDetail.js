import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIssueByIdFromApi } from '../../../redux/currentIssueRedux';
import styled from 'styled-components';
import AddNewComment from '../../features/AddNewComment//AddNewComment';

const IssueDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.currentIssue);
  const { comments } = data;

  useEffect(() => {
    dispatch(fetchIssueByIdFromApi(id));
  }, []);

  return (
    <div>
      {data ? (
        <>
          <div>
            <span>{data.title}</span>
            <span>#{data._id}</span>
          </div>
          <div>
            {/* TODO Make day counter since issue was created + Comments counter*/}
            <span>
              #{data.author} opened this issue X days ago * X comments
            </span>
          </div>
        </>
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
    </div>
  );
};

const CommentContainer = styled.div`
  border: 1px solid #30363d;
  width: 80%;
  margin: 3rem auto;
`;

const CommentInfo = styled.div`
  border-bottom: 1px solid #30363d;
  background-color: #161b22;
  height: 2.5rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;

export default IssueDetail;
