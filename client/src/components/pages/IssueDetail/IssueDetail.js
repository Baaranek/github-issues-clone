import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIssueByIdFromApi } from '../../../redux/currentIssueRedux';

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
      {data && <p>{data.description}</p>}
      {comments && comments.map(({ _id, author }) => <p key={_id}>{author}</p>)}
    </div>
  );
};

export default IssueDetail;
