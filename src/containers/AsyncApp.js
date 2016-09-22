import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import { fetchTodos } from '../actions'

class AsyncApp extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchTodos())
  }

  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
      </div>
    )
  }
}

AsyncApp.propTypes = {
  dispatch: PropTypes.func.isRequired
}

// function mapStateToProps(state) {
// }

export default connect()(AsyncApp)
