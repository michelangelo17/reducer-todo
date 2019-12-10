export const intitalTodoState = []

export const todoListReducer = (state, action) => {
  console.log(state, action)
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
            }
          : todoItem
      )
      case 'CLEAR_COMPLETED' :
        return state.filter(todo => !todo.completed)
    default:
      return state
  }
}
