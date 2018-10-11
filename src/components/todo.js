import React from 'react';

const TodoList = ({ items, onAddTodo, onTodoTextChanged, addTodoText, selectedItem, onTodoSelected, onApplyTodoEdit, onTodoEditTextChanged, editTodoText, onRemoveTodo  }) => {

  const todoToListItem = item => {
    if(item.id === selectedItem){
      return <span key={item.id}>
                <input onChange={event => onTodoEditTextChanged(event.target.value)} type="text" value={editTodoText} />
                <button onClick={() => onApplyTodoEdit(item.id)}>Update</button>
            </span>
    }else{
      return <span>
                <li key={item.id} onClick={() => onTodoSelected(item.id)}>{item.todo}</li>
                <button onClick={() => onRemoveTodo(item.id)}>Remove Todo</button>
              </span>
    }
  };

  const itemList = items.map(todoToListItem);

  return (
    <div>
        <input onChange={event => onTodoTextChanged(event.target.value)} value={addTodoText} type="text"/>
        <button onClick={onAddTodo}>Add Item</button>
      <ul>{itemList}</ul>
    </div>
  );
};

export default TodoList;