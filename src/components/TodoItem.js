import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
  getStyle = () => {
    return {
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
          { title }</p>
      </div>
    )
  }
}



TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem