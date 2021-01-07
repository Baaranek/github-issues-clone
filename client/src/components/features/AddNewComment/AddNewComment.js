import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  addNewCommentToIssue,
  fetchIssueByIdFromApi,
} from '../../../redux/currentIssueRedux';

const AddNewComment = ({ postId }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const doWhileSubmit = async (data, e) => {
    await dispatch(addNewCommentToIssue(postId, data));
    dispatch(fetchIssueByIdFromApi(postId));
    e.target.reset();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(doWhileSubmit)}>
        <StyledInput
          type="text"
          placeholder="author"
          name="author"
          autoComplete="off"
          ref={register({ required: true })}
        />
        <DescriptionInput
          type="text"
          placeholder="description"
          name="description"
          autoComplete="off"
          ref={register({ required: true })}
        />
        <StyledButton type="submit">Comment</StyledButton>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  border: 1px solid #30363d;
  width: 70%;
`;

const StyledInput = styled.input`
  background-color: #06090f;
  border: 1px solid #30363d;
  color: white;
  border-radius: 0.3rem;
  display: block;
  width: 95%;
  height: 2rem;
  margin: 0.5rem auto;
  padding-left: 0.5rem;

  :focus {
    outline: none;

    ::placeholder {
      color: transparent;
    }
  }
`;

const DescriptionInput = styled(StyledInput)`
  height: 6rem;
`;

const StyledButton = styled.button`
  background-color: #238636;
  border: none;
  border-radius: 0.3rem;
  color: white;
  width: 7rem;
  height: 2rem;
  margin: 1rem 0 1rem 2.5%;

  :hover {
    background-color: #2ea043;
  }
`;

export default AddNewComment;
