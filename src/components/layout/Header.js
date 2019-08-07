import React from 'react'

const headerStyle = {
  backgroundColor: '#333',
  color: 'white',
  textAlign: 'center'
}

export default function Header() {
  return (
    <header style={ headerStyle }>
      <h1>Todolist</h1>
    </header>
  )
}