import React, { Component } from 'react'
import './Item.css'
import PropTypes from 'prop-types'

export default class Item extends Component {
 
  static propTypes = {
    id: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    updateTodo: PropTypes.func.isRequired
  }

  // 因为css与js尽量分开 不要在js中写直接操作样式的内容
  state = {mouse:false}

  handleMouse = (flag) => {
    return () => {
      // 表示鼠标已经进入
      if(flag) {
        this.setState({mouse: flag})
      } else {
        this.setState({mouse: flag})
      }
    }
  }
  
  handleChecked = (id) => {
    return (event) => {
      // 可以通过event.target.checked拿到是否勾选的状态
      // 且可以通过传入的id拿到待办事项的id
      this.props.updateTodo(id,event.target.checked)
    }
  }

  handleDelete = (id) => {
    // 删除之前需要询问一下是否确定删除
    if(window.confirm('是否删除'))
      this.props.deleteTodo(id);
  }
  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return (
      // 鼠标是否进入
      // 这里直接写内联样式
      <li style={{backgroundColor: mouse===true ? '#ddd':'#fff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          {/* 添加上是否勾选之后对状态中数据的操作 */}
          <input onChange={this.handleChecked(id)} type="checkbox" checked={done} />
          <span>{name}</span>
        </label>
        {/* 开始写删除操作 与之前的修改和添加一样 需要自定义函数然后子组件调用的方式传递删除的id即可 */}
        {/* 这里使用的方式与之前的不一样 这里直接写回调函数 */}
        <button onClick={() => {this.handleDelete(id)}}  className="btn btn-danger" style={{display: mouse === true ? 'block':'none'}}>删除</button>
      </li>
    )
  }
}
