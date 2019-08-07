import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

// function App() {

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        isCompleted: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        isCompleted: false
      },
      {
        id: 3,
        title: 'Read a bedtime story',
        isCompleted: false
      }
    ]
  }
  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map( todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
    }) 
  } 
  render() {
    return (
      <div className="App">
        <h1>TEST</h1>
        <Todos todos={ this.state.todos } toggleComplete={ this.toggleComplete } />
      </div>
    );
  }
}

export default App;