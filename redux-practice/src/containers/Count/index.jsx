// 这里是Count的容器组件 这部分组件不需要自己写 
// 主要是采用下载的react-redux库来进行编写
// 容器组件主要是与UI组件和redux进行交互的
// 因此需要首先引入这两部分

import React, { Component } from 'react'
// 这里显示的是Count的UI组件
// 不能直接与react-redux之交互
import { connect } from 'react-redux'
import {createIncreamentAsyncAction,createIncrementAction,createDecrementAction} from './../../redux/count_action'

// 这里将UI组件写在上方 不进行暴露 
class Count extends Component {

  increment = () => {
    const index = this.selectedNum.selectedIndex
    const num = parseInt(this.selectedNum.options[index].value)
    // 拿到传递过来的函数 将获取到的具体加的数值传递过去
    this.props.jia(num)
  }
  decrement = () => {
    const index = this.selectedNum.selectedIndex
    const num = parseInt(this.selectedNum.options[index].value)
    this.props.jian(num)
  }
  incrementIfOdd = () => {
    const index = this.selectedNum.selectedIndex
    const num = parseInt(this.selectedNum.options[index].value)
    if(this.props.count % 2 !== 0) {
      this.props.jia(num)
    }
  }
  incrementAsync = () => {
    const index = this.selectedNum.selectedIndex
    const num = parseInt(this.selectedNum.options[index].value)
    this.props.jiaAsync(num)
  }

  render() {
    return (
      <div>
       {/* 通过props获取到容器组件传过来的值 */}
        <h2>当前求和为：{this.props.count}</h2>
        <select ref={c => this.selectedNum = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>奇数+</button>&nbsp;
        <button onClick={this.incrementAsync}>异步+</button>&nbsp;
      </div>
    )
  }
}
// 这里是容器组件
export default connect(
  state => ({count: state}),
  {
    jia:createIncrementAction,
    jian:createDecrementAction,
    jiaAsync:createIncreamentAsyncAction
  }
  )(Count);