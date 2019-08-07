import React, { Component } from 'react'
import PropTypes from 'prop-types'

const btnStyle = {
  backgroundColor: 'red',
  color: 'white',
  padding: '0 .1rem 0 .1rem',
  margin: '0 0 0 1rem',
  border: '.1rem solid black',
}

export class TodoItem extends Component {
  getStyle = () => {
    return {
      display: 'flex',
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc solid',
      textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none'
    }
  }

  render() {
    const {id, title} = this.props.todo
    return (
      <div style={ this.getStyle() }>
        <p>
          <input type="checkbox" onChange={ this.props.toggleComplete.bind(this, id) } /> {' '}
          { title }
        </p>
        <button onClick={ this.props.deleteTodo.bind(this, id) } style={ btnStyle }>x</button>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem