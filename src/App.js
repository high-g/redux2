import { useDispatch, useSelector } from 'react-redux'
import { addTodoAction } from './reducks/todos/actions'

function App() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)

  console.log('state', state)

  return (
    <div className="App">
      <h1>Todoリスト</h1>
      <button
        onClick={() => {
          dispatch(addTodoAction({ text: 'Add' }))
        }}
      >
        Add
      </button>
      <ul>
        {state.todos.todos.list.map((todo) => {
          console.log('todo', todo)
          return <li>{todo.text}</li>
        })}
      </ul>
    </div>
  )
}

export default App
