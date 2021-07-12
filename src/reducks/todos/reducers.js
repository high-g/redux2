import * as Actions from './actions'
import initialState from '../store/initialState'

export const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      return state.concat([{ ...action.payload }])
    default:
      return state
  }
}
