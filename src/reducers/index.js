import { combineReducers } from 'redux'
import todos from './todos'
import another from './another'

const todoApp = combineReducers({
  todos,
  another
})

export default todoApp
