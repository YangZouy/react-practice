import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'
import PropTypes from 'prop-types'

export default class List extends Component {
  
  static propTypes = {
    deleteTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired
  }

  render() {
    const {todos} = this.props.todos
    const {updateTodo, deleteTodo} = this.props
    // console.log(updateTodo,deleteTodo)
    return (
      <ul className="todo-main">
        {
          todos.map( todo => {
            return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo = {deleteTodo}/>
          })
        }
      </ul>
    )
  }
}
