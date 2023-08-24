import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {

  // 因为count中的值已经交给store维护了
  // state = {
  //   count: 0
  // }

  increment = () => {
    const index = this.selectedNum.selectedIndex
    const num = parseInt(this.selectedNum.options[index].value)
    // 因为已经没有state了 所以不直接操作state
    // 采用消息订阅机制传输数据
    store.dispatch({type:'increment',data:num})
    // this.setState({count: count+num})
  }
  decrement = () => {
    // 函数体
    // const {count} = this.state
    const index = this.selectedNum.selectedIndex
    const num = parseInt(this.selectedNum.options[index].value)
    store.dispatch({type: 'decrement',data: num})
    // this.setState({count: count-num})
  }
  incrementIfOdd = () => {
    // 函数体
    // const {count} = this.state
    const index = this.selectedNum.selectedIndex
    const num = parseInt(this.selectedNum.options[index].value)
    const count = store.getState()
    if(count%2 !== 0) {
      store.dispatch({type: 'increment',data:num})
      // this.setState({count: count+num})
    }
    
  }
  incrementAsync = () => {
    // 函数体
    // const {count} = this.state
    const index = this.selectedNum.selectedIndex
    const num = parseInt(this.selectedNum.options[index].value)
    setTimeout(() => {
      // this.setState({count: count+num})
      store.dispatch({type:'increment',data:num})
    }, 1000);
  }

  render() {
    return (
      <div>
        {/* 这里通过getState() API获取到初始值 */}
        <h2>当前求和为：{store.getState()}</h2>
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
