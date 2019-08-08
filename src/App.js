import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import uuid from 'uuid'

// function App() {

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        isCompleted: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with wife',
        isCompleted: false
      },
      {
        id: uuid.v4(),
        title: 'Read a bedtime story',
        isCompleted: false
      }
    ]
  }
  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter( todo => todo.id !== id)
    })
  }
  toggleComplete = (id) => {
    this.setState({ 
      todos: this.state.todos.map( todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
    }) 
  }
  AddTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      isCompleted: false
    }
    this.setState({ todos: [...this.state.todos, newTodo ] })
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo AddTodo={ this.AddTodo }/>
          <Todos todos={ this.state.todos } 
            toggleComplete={ this.toggleComplete }
            deleteTodo={ this.deleteTodo } />
        </div>
      </div>
    );
  }
}

export default App;