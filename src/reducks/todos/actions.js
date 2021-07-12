export const ADD_TODO = 'ADD_TODO'

export const addTodoAction = (state) => {
  return {
    type: 'ADD_TODO',
    payload: {
      text: state.text,
      completed: false,
    },
  }
}
