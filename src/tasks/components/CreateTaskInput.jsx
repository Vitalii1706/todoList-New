import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

const CreateTaskInput = ({ onCreate }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    onCreate(data.text, data.firstname);
    e.target.reset();
  };

  return (
    <form className="create-task" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register('firstname')}
        className="create-task__input-name"
        placeholder="Name"
      />
      <input
        type="text"
        {...register('text')}
        className="create-task__input"
        placeholder="Description"
      />
      <button className="btn create-task__btn">Create</button>
    </form>
  );
};

CreateTaskInput.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default CreateTaskInput;
