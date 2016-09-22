import React, { PropTypes } from 'react'
import classNames from 'classnames'


const Todo = ({ todo, onClick }) => (
  <li className={classNames({ completed: todo.completed })} onClick={onClick}>{ todo.text }</li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Todo
