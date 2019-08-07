import React, { Component } from 'react'

export default class AddTodo extends Component {
  render() {
    return (
      <form style={{ display: "flex" }}>
        <input
          type="text" 
          name="title" 
          placeholder="Add Todo ..."
          style={{ flex: "10" }} />
        <input type="submit"
           className="btn" />
      </form>
    )
  }
}