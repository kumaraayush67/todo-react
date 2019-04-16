import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropType from 'prop-types';

class Todos extends Component {

  render() {
    return this.props.todos.map((todo) => (
    	<TodoItem key={todo.id} todo={todo} markcomplete={this.props.markcomplete} delTodo={this.props.delTodo}/>

    ));
  }
}

Todos.propTypes = {
	todos: PropType.array.isRequired
}

export default Todos;
