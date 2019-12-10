import moment from 'moment'

export const todoListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]
    case 'CROSSOUT':
      return state.map(todoItem =>
        action.payload.id === todoItem.id
          ? {
              item: todoItem.item,
              completed: !todoItem.completed,
              id: todoItem.id,
              dateCompleted: !todoItem.completed
                ? moment().format('MMM Do YY, h:mm a')
                : '',
            }
          : todoItem
      )
    case 'CLEAR_COMPLETED':
      return state.filter(todo => !todo.completed)
    default:
      return state
  }
}
