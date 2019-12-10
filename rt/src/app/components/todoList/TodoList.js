import React, { useContext } from 'react'
import TodoItem from './todoItem/TodoItem'
import { FlexContainer } from '../../emotionalThings/EmoTools'
import { TodoContext } from '../../contexts/contexts'

const TodoList = () => {
  const { todoArray, setTodoArray } = useContext(TodoContext)
  return (
    <>
      {todoArray.map(todo => (
        <FlexContainer onClick={e => setTodoArray({ type: 'CROSSOUT', payload: todo })} key={todo.id}>
          <TodoItem todo={todo} />
        </FlexContainer>
      ))}
    </>
  )
}
export default TodoList
