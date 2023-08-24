import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {

  handleCheckedAll = (event) => {
    // console.log(this.props.checkTodo)
    this.props.checkTodo(event.target.checked)
  }

  handleClear = () => {
    this.props.clearTodo()
  }
  render() {

    // 首先还是先拿到数据
    const {todos} = this.props.todos
    // 定义全部
    const total = todos.length
    // console.log(total)

    // 定义已完成
    const doneTodo = todos.reduce((pre,cur) => {
      return cur.done === true ? 1+pre: pre
    },0)

    return (
      <div className="todo-footer">
        <label>
          {/* 这里不使用defaultChecked的原因是它只在第一次指定时起作用 */}
          {/* 因此使用checked以便于后期的更改，同时可以使用onChange函数进行修改 */}
          <input onChange={this.handleCheckedAll} checked={total === doneTodo && total !== 0 ? true : false} type="checkbox"/>
        </label>
        <span>
          <span>已完成{doneTodo}</span> / 全部{total}
        </span>
        {/* 最后写清除所有 */}
        <button onClick={this.handleClear} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
