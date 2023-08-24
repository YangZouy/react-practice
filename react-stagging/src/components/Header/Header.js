import React, { Component } from 'react'
import './Header.css'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

export default class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleKeyUp = (event) => {
    // console.log(event.target.value,typeof(event.keyCode))
    // 判断是否是回车键 
    if(event.keyCode !== 13) return

    // 是回车键之后需要将input中的内容显示到list中
    // 返回的数据必须是一个代办事项对象
    const todoObj = {
      id: nanoid(),
      name: event.target.value,
      done: false
    }
    // 判断传过来的数据为空
    if(event.target.value === '') {
      alert("输入的数据不允许为空！！！")
      return 
    }
    this.props.addTodo(todoObj);
    // 添加完成之后需要将input框里的数据清空
    event.target.value = ''
  }

  render() {
    return (
      <div>
        <div className="todo-header">
          {/* 
            这里需要先获取到input中的数据 
            因为要操作的元素和事件绑定的元素是一致的，所以不用使用ref
          */}
          <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
      </div>
    )
  }
}
