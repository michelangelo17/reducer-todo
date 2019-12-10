import React from 'react'
import { P, FlexContainer, Small } from '../../../emotionalThings/EmoTools'

const TodoItem = props => (
  <>
    {props.todo.completed ? (
      <FlexContainer fdc m='10px auto'>
        <P m='0 10px 0 0' lt>
          {props.todo.item}
        </P>
        <Small>(Completed: {props.todo.dateCompleted})</Small>
      </FlexContainer>
    ) : (
      <P m='10px auto'>{props.todo.item}</P>
    )}
  </>
)

export default TodoItem
