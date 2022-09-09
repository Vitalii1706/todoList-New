import React, { useState } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as tasksAction from '../redux/tasks.actions';
import moment from 'moment';

const Task = ({
  id,
  text,
  createdDate,
  done,
  updateTask,
  updateTextTask,
  deleteTask,
  firstname,
}) => {
  const [isShowInput, setIsShowInput] = useState(false);
  const [inputValue, setInputValue] = useState(text);

  const showDate = `${moment(createdDate).format('L')} ${moment(createdDate).format('LT')}`;

  const updateTaskHandler = () => {
    updateTextTask(id, inputValue);
    setIsShowInput(false);
  };

  const inputElem = (
    <>
      <input
        onChange={event => setInputValue(event.target.value)}
        type="text"
        value={inputValue}
        className="create-task__input"
      />
      <button onClick={updateTaskHandler} className="list-item__edit-btn">
        ok
      </button>
    </>
  );

  const taskTextItem = <span className="list-item__text">{text}</span>;

  return (
    <li className={classNames('list-item', { 'list-item_done': done })}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => updateTask(id)}
      />
      <span className="list-item__name">{firstname}</span>
      {isShowInput ? inputElem : taskTextItem}
      <span className="list-item__time">{showDate}</span>
      <button onClick={() => setIsShowInput(!isShowInput)} className="list-item__edit-btn">
        Edit
      </button>
      <button className="list-item__delete-btn" onClick={() => deleteTask(id)}></button>
    </li>
  );
};

Task.propTypes = {
  done: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  updateTask: PropTypes.func.isRequired,
  updateTextTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  firstname: PropTypes.string.isRequired,
  createdDate: PropTypes.number.isRequired,
};

const mapDispatch = {
  updateTextTask: tasksAction.updateTextTask,
  updateTask: tasksAction.updateTask,
  deleteTask: tasksAction.deleteTask,
};

export default connect(null, mapDispatch)(Task);
