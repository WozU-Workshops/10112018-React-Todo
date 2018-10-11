export const addTodo = () => (
  {
    type: 'ADD_TODO'
  }
)

export const todoTextChanged = (text) => (
  {
    type: 'TODO_TEXT_CHANGED',
    text
  }
)

//select a todo item
export const todoSelected = (id) =>(
  {
      type: 'TODO_SELECTED',
      id
  }
)

//edit a todo item
export const applyTodoEdits = (id) => (
  {
      type: 'APPLY_TODO_EDITS',
      id
  }
)

export const todoEditTextChanged = (text) => (
  {
      type: 'TODO_EDIT_TEXT_CHANGED',
      text
  }
)

//delete a todo item
export const removeTodo = (id) => (
  {
      type: 'REMOVE_TODO',
      id
  }
)