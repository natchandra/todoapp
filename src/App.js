import React, { Component } from 'react';
import Todos from "./Todos.js"
import AddForm from "./AddForm.js"

class App extends Component {
  state={
    todos:[
      {id:1, content:'learning stuff'},
      {id:2, content:'eatingg'}
    ]
  }
  deleteTodo = (id) =>{
    let todos = this.state.todos.filter( item =>{
      return item.id !== id
    })
    this.setState({
      todos: todos
    })
    //console.log(id);
  }
  addTodo = (todo) =>{
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text"> Todo's </h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
