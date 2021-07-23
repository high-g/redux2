export const ADD_TODO = 'ADD_TODO'

// action
export const addTodoAction = (state) => {
  return {
    type: 'ADD_TODO',
    payload: {
      text: state.text,
      completed: false,
    },
  }
}

export const DELETE_TODO = 'DELETE_TODO'

export const deleteTodoAction = (state) => {
  return {
    type: 'DELETE_TODO',
    payload: {
      index: state.index,
    },
  }
}
