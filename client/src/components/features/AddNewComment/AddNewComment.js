import React from 'react';
import { useForm } from 'react-hook-form';
// import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addNewCommentToIssue } from '../../../redux/currentIssueRedux';

const AddNewComment = ({ postId }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const doWhileSubmit = (data) => {
    console.log(postId);
    dispatch(addNewCommentToIssue(postId, data));
  };

  return (
    <form onSubmit={handleSubmit(doWhileSubmit)}>
      <input
        type="text"
        placeholder="author"
        name="author"
        ref={register({ required: true })}
      />
      <input
        type="text"
        placeholder="description"
        name="description"
        ref={register({ required: true })}
      />
      <button type="submit">Yes</button>
    </form>
  );
};

export default AddNewComment;
