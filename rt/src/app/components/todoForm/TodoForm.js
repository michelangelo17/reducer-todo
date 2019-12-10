import React, { useState, useContext } from 'react'
import {
  Button,
  TextInput,
  FlexContainer,
} from '../../emotionalThings/EmoTools'
import { TodoContext } from '../../contexts/contexts'

const TodoForm = () => {
  const { setTodoArray } = useContext(TodoContext)
  const [itemString, setItemString] = useState('')

  const handleChange = e => setItemString(e.target.value)
  const handleSubmit = e => {
    e.preventDefault()
    const newItem = {
      item: itemString,
      completed: false,
      id: Date.now(),
    }
    itemString !== '' && setTodoArray({ type: 'ADD_TODO', payload: newItem })
    setItemString('')
  }
  const handleClear = () => setTodoArray({ type: 'CLEAR_COMPLETED' })

  return (
    <form onSubmit={handleSubmit}>
      <FlexContainer fdc aic>
        <TextInput
          onChange={handleChange}
          value={itemString}
          type='text'
          name='todoText'
          placeholder='todo item'
          w='90%'
          maxw='400px'
          m='15px'
        />
        <FlexContainer>
          <Button
            primary
            onClick={handleSubmit}
            type='submit'
            name='addTodoButton'
            p='7px'
            br='10px'
            m='5px'
          >
            Add to list
          </Button>
          <Button
            onClick={handleClear}
            type='button'
            name='clearCompletedButton'
            p='7px'
            br='10px'
            m='5px'
          >
            Clear Completed
          </Button>
        </FlexContainer>
      </FlexContainer>
    </form>
  )
}

export default TodoForm
