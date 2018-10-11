import React from 'react';
import TodoList from './Todo';
import { connect } from 'react-redux';
import { addTodo, todoTextChanged, todoSelected, todoEditTextChanged, applyTodoEdits, removeTodo } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Todo List:</h3>
        <TodoList items={this.props.items} onAddTodo={this.props.onAddTodo} onTodoTextChanged={this.props.onTodoTextChanged} addTodoText={this.props.addTodoText} selectedItem={this.props.selectedTodo} onTodoSelected={this.props.onTodoSelected} onApplyTodoEdit={this.props.onApplyTodoEdit} onTodoEditTextChanged={this.props.onTodoEditTextChanged} editTodoText={this.props.editTodoText} onRemoveTodo={this.props.onRemoveTodo} removeTodo={this.props.removeTodo}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAddTodo: () => dispatch(addTodo()),
    // Below dispatches an action with the text that is inputted when updating a todo item
    onTodoTextChanged: text => dispatch(todoTextChanged(text)),
    onTodoSelected: id => dispatch(todoSelected(id)),
    onApplyTodoEdit: id => dispatch(applyTodoEdits(id)),
    onTodoEditTextChanged: text => dispatch(todoEditTextChanged(text)),
    onRemoveTodo: id => dispatch(removeTodo(id))
  };
}
function mapStateToProps(state) {
  return {
    items: state.items,
    addTodoText: state.addTodoText,
    editTodoText: state.editTodoText,
    selectedTodo: state.selectedTodo
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);