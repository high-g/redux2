import * as Actions from './actions'
import initialState from '../store/initialState'

export const TodosReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      const procState = { ...state }
      procState.todos.list.push({ ...action.payload })
      return procState
    default:
      return state
  }
}
