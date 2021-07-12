import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodoAction } from './reducks/todos/actions'

function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const state = useSelector((state) => state.todos)

  return (
    <div className="App">
      <h1>Todoリスト</h1>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodoAction({ text }))
          setText('')
        }}
      >
        Add
      </button>
      <ul>
        {state.todos.list.map((todo, index) => {
          console.log('todo', todo)
          return <li key={index}>{todo.text}</li>
        })}
      </ul>
    </div>
  )
}

export default App
