import React from 'react';
import { connect } from 'react-redux';
import { completeToDo } from '../actions/index';

const ToDo = ({ id, text, completed, completeToDo }) => {
  return (
    <li onClick={() => completeToDo(id)} className={`${!completed && 'not-'}completed`}>
      {text}
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  completeToDo: (id) => dispatch(completeToDo(id)),
});

export default connect(null, mapDispatchToProps)(ToDo);
