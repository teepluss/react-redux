// Simulate ajax requests
const initialState = []

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_TODOS':
      return action.todos
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (action.id === todo.id) {
          return Object.assign({}, todo, {
            completed: ! todo.completed
          })
        }
        return todo
      })
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Math.random(),
          text: action.text
        }
      ]
    default :
      return state
  }
}

export default todos
