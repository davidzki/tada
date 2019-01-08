import React, { Component } from 'react';
import './App.css';
import NewTodoForm from './NewTodoForm'
import TodoList from './TodoList'
import MenuBar from './MenuBar'
import Dashboard from './Dashboard'

class App extends Component {

  constructor() {
    super();
    this.state = {
      newTodo: '',
      todos: []
    };
  }

  newTodoChanged(event) {
    this.setState({
        newTodo: event.target.value,
      });
  }

  ethAmountChanged(event) {
    this.setState({
        ethAmount: event.target.value,
      });
  }

  timeLeftChanged(event) {
    this.setState({
        timeLeft: event.target.value,
      });
  }

  formSubmitted(event) {
    event.preventDefault();
    this.setState({
      timeLeft: '',
      newTodo: '',
      ethAmount: '',
        todos: [...this.state.todos, {
          title: this.state.newTodo,
          amount: this.state.ethAmount,
          timeLeft: this.state.timeLeft,
          done: false
        }]
      });
  }

  toggleTodoDone(event, index) {
    const todos = [...this.state.todos]; // copy the array
    todos[index] = {
      ...todos[index],
      done: event.target.checked
    };
    this.setState({
      todos
      });
  }

  removeTodo(index) {
    const todos = [...this.state.todos]; // copy the array
    todos.splice(index, 1);
    this.setState({
      todos
      });
  }


  render() {
    return (
      <div className="App">

        <MenuBar />

        <NewTodoForm
          formSubmitted={this.formSubmitted.bind(this)}
          newTodoChanged={this.newTodoChanged.bind(this)}
          newTodo={this.state.newTodo}
          ethAmountChanged={this.ethAmountChanged.bind(this)}
          ethAmount={this.state.ethAmount}
          timeLeftChanged={this.timeLeftChanged.bind(this)}
          timeLeft={this.state.timeLeft}
        />

      <TodoList
        todos={this.state.todos}
        toggleTodoDone={this.toggleTodoDone.bind(this)}
        removeTodo={this.removeTodo.bind(this)}
        />

      <Dashboard
        todos={this.state.todos}
        />

      </div>
    );
  }
}

export default App;
