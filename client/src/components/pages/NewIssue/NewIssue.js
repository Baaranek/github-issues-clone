import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addNewIssue } from '../../../redux/issuesRedux';
import styled from 'styled-components';

const NewIssue = () => {
  const { register, handleSubmit } = useForm({ mode: 'onChange' });
  const dispatch = useDispatch();

  const submitForm = (data) => {
    // console.log(data);
    dispatch(addNewIssue(data));
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(submitForm)}>
        <InFormDiv>
          <StyledInput
            type="text"
            placeholder="title"
            name="title"
            ref={register({
              required: true,
            })}
          />
          <StyledInput
            type="text"
            placeholder="author"
            name="author"
            ref={register({
              required: true,
            })}
          />
          <StyledInput
            type="text"
            placeholder="tag"
            name="tags"
            ref={register({
              required: false,
            })}
          />
          <StyledInput
            type="text"
            placeholder="description"
            name="description"
            ref={register({
              required: true,
            })}
          />
        </InFormDiv>
        <InFormDiv>
          <StyledButton type="submit">Submit new issue</StyledButton>
        </InFormDiv>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: 60%;
  margin: auto;
  border: 1px solid #30363d;
`;

const StyledInput = styled.input`
  background-color: #06090f;
  border: 1px solid #30363d;
  color: white;
  border-radius: 0.3rem;
  display: block;
  width: 100%;
  height: 2rem;
  margin: 0.5rem 0;
  padding-left: 0.5rem;

  :focus {
    outline: none;

    ::placeholder {
      color: transparent;
    }
  }
`;

const StyledButton = styled.button`
  background-color: #238636;
  border: none;
  border-radius: 0.3rem;
  color: white;
  width: 9rem;
  height: 2rem;
  margin: 1rem 0;

  :hover {
    background-color: #2ea043;
  }
`;

const InFormDiv = styled.div`
  width: 90%;
  margin: auto;

  :nth-child(2) {
    text-align: right;
  }
`;

export default NewIssue;
