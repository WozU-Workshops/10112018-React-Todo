const initialState = {
  items: [
    {
      id: 1,
      todo: 'clean bathroom'
    }
  ],
  addTodoText: "",
  // The following fields are needed in your state for selecting and updating a todo item
  selectedTodo: null,
  editTodoText: ""
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const existingIds = state.items.map(todo => todo.id);
      const largestExistingId = Math.max(...existingIds);
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: largestExistingId + 1,
            todo: state.addTodoText
          }
        ],
        addTodoText: ""
      };
    case 'TODO_TEXT_CHANGED':
      return {
        ...state,
        addTodoText: action.text
      }
    // The following case statement is for selecting a todo item
    case 'TODO_SELECTED':
      return {
        ...state,
        selectedTodo: action.id,
        editTodoText: state.items.find(item => item.id === action.id).todo
      }
    // The following case statement is for applying edits to a todo item
    case 'APPLY_TODO_EDITS':
      return {
        ...state,
        items: state.items.map(item => {
          if(item.id === state.selectedTodo){
            return {...item, todo: state.editTodoText}
          }  else {
            return item
          }
        }),
        editTodoText: "",
        selectedTodo: null
      }
    // The following case statement is for the actual updating of the todo item
    case 'TODO_EDIT_TEXT_CHANGED':
      return {
        ...state,
        editTodoText: action.text
      }
    case 'TODO_EDIT_TEXT_CHANGED':
      return {
        ...state,
        editTodoText: action.text
      }
    // The following case statement handles the state when an item is removed
    case 'REMOVE_TODO':
      return {
        ...state,
        items: state.items.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
}

export default todoReducer;