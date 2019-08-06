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
        isCompleted: true
      }
    ]
  } 
  render() {
    return (
      <div className="App">
        <h1>TEST</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;