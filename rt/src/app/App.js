import React, { useReducer } from 'react'
import TodoForm from './components/todoForm/TodoForm'
import EmoGlobal from './emotionalThings/EmoGlobal'
import { H1 } from './emotionalThings/EmoTools'
import TodoList from './components/todoList/TodoList'
import { todoListReducer } from './reducers/todoListReducer'
import { TodoContext } from './contexts/contexts'

const App = () => {
  const [todoArray, setTodoArray] = useReducer(todoListReducer, [])

  return (
    <TodoContext.Provider value={{ todoArray, setTodoArray }}>
      <EmoGlobal />
      <H1 ta='center' m='10px 0 20px 0'>
        My Todos
      </H1>
      <TodoForm />
      <TodoList />
    </TodoContext.Provider>
  )
}

export default App
