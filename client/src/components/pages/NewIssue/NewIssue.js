import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addNewIssue } from '../../../redux/issuesRedux';

const NewIssue = () => {
  const { register, handleSubmit } = useForm({ mode: 'onChange' });
  const dispatch = useDispatch();

  const submitForm = (data) => {
    console.log(data);
    dispatch(addNewIssue(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <input
          type="text"
          placeholder="title"
          name="title"
          ref={register({
            required: true,
          })}
        />
        <input
          type="text"
          placeholder="author"
          name="author"
          ref={register({
            required: true,
          })}
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          ref={register({
            required: true,
          })}
        />
        <button type="submit">Add Issue</button>
      </form>
    </>
  );
};

export default NewIssue;
