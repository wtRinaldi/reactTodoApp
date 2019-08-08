import React, { Component } from 'react'

export default class AddTodo extends Component {
  state = {
    title: ''
  }

  setTitle = (e) => this.setState({[ e.target.name ]: e.target.value })
  onSubmit = (e) => {
    e.preventDefault();
    this.props.AddTodo(this.state.title)
    this.setState({ title: '' })
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit } style={{ display: "flex" }}>
        <input
          type="text" 
          name="title" 
          placeholder="Add Todo ..."
          style={{ flex: "10" }}
          value={ this.state.title }
          onChange={ this.setTitle } />
        <input type="submit"
           className="btn" />
      </form>
    )
  }
}