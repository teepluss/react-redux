export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
}

export const receiveTodos = (todos) => {
  return {
    type: 'RECEIVE_TODOS',
    todos
  }
}

export const fetchTodos = () => {
  return (dispatch) => {
    fetch('https://api.github.com/users/teepluss/repos')
      .then((response) => response.json())
      .then((responseJson) => {
        let data = [];
        responseJson.forEach((item) => {
          data.push({ id: item.id, text: item.name })
        })
        return data;
      })
      .then((todos) => {
        dispatch(receiveTodos(todos))
      })
  }
}
