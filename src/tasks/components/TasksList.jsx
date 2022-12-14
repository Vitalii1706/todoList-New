import React from 'react';
import Task from './Task.jsx';
import PropTypes from 'prop-types';

const TasksList = ({ tasks }) => {
  return (
    <ul className="list">
      {tasks.map(task => (
        <Task key={task.id} {...task} />
      ))}
    </ul>
  );
};

const mapState = state => {
  return {
    tasks: sortedTaskListSelector(state),
  };
};

TasksList.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TasksList;
