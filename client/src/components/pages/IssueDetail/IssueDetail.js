import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIssueByIdFromApi } from '../../../redux/issuesRedux';

const IssueDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const issue = useSelector((state) => state.issues.data);

  useEffect(async () => {
    await dispatch(fetchIssueByIdFromApi(id));
  }, []);

  return <div>{issue.author}</div>;
};

export default IssueDetail;
