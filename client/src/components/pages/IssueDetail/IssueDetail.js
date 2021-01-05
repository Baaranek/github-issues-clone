import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIssueByIdFromApi } from '../../../redux/currentIssueRedux';

const IssueDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.currentIssue.data);

  useEffect(async () => {
    await dispatch(fetchIssueByIdFromApi(id));
  }, []);

  return <div>{data && <p>{data.description}</p>}</div>;
};

export default IssueDetail;
