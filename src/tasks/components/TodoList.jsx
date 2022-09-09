import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CreateTaskInput from './CreateTaskInput.jsx';
import TasksList from './TasksList.jsx';
import * as tasksAction from '../redux/tasks.actions';
import { sortedTaskListSelector } from '../redux/tasks.selectors';
import PropTypes from 'prop-types';

const TodoList = ({ getTaskList, createTask, tasks, updateTask, deleteTask }) => {
  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <>
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <CreateTaskInput onCreate={createTask} />
        <TasksList
          tasks={tasks}
          handleTaskStatusChange={updateTask}
          handleTaskDelete={deleteTask}
        />
      </main>
    </>
  );
};

const mapDispatch = {
  getTaskList: tasksAction.getTaskList,
  updateTask: tasksAction.updateTask,
  deleteTask: tasksAction.deleteTask,
  createTask: tasksAction.createTask,
};

const mapState = state => {
  return {
    tasks: sortedTaskListSelector(state),
  };
};

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  getTaskList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(TodoList);
