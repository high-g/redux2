import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addTodoAction,
  deleteTodoAction,
} from './reducks/todos/actions'

function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const state = useSelector((state) => state.todos)

  console.log('App state', state)

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
          if (text !== '') {
            dispatch(addTodoAction({ text }))
            setText('')
          }
        }}
      >
        Add
      </button>
      <ul>
        {state.todos.list.map((todo, index) => {
          return (
            <li key={index}>
              {todo.text}　
              <button
                onClick={() => {
                  dispatch(deleteTodoAction({ index }))
                }}
              >
                x
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
