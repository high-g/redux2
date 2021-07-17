import * as Actions from './actions'
import initialState from '../store/initialState'

// TodosReducer
export const TodosReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      return {
        ...state,
        todos: {
          list: [
            ...state.todos.list,
            { ...action.payload },
          ],
        },
      }
    case Actions.DELETE_TODO:
      return {
        ...state,
        todos: {
          list: state.todos.list.filter(
            (item, index) => index !== action.payload.index,
          ),
        },
      }
    default:
      return state
  }
}
