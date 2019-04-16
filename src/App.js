import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Find something to do.",
        completed: false
      },
      {
        id: 2,
        title: "Write something in Todos",
        completed: false
      },
      {
        id: 3,
        title: "Complete it.",
        completed: false
      }
    ]
  }

  // toggle completed
  markcomplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  // delete Todos
  delTodo = (id) => {
    // ... is spread operater, its like unpacking in python
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  render() {
    return (
      <div className="App">
        <p className="heading">Todos</p>
        <Todos todos={this.state.todos} markcomplete={this.markcomplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
