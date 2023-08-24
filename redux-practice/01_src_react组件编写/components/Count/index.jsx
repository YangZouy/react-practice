import React, { Component } from 'react'

export default class Count extends Component {

  state = {
    count: 0
  }

  increment = () => {
    // 函数体
    const {count} = this.state
    const index = this.selectedNum.selectedIndex
    const num = parseInt(this.selectedNum.options[index].value)
    this.setState({count: count+num})
  }
  decrement = () => {
    // 函数体
    const {count} = this.state
    const index = this.selectedNum.selectedIndex
    const num = parseInt(this.selectedNum.options[index].value)
    this.setState({count: count-num})
  }
  incrementIfOdd = () => {
    // 函数体
    const {count} = this.state
    const index = this.selectedNum.selectedIndex
    const num = parseInt(this.selectedNum.options[index].value)
    if(count%2 !== 0) {
      this.setState({count: count+num})
    }
    
  }
  incrementAsync = () => {
    // 函数体
    const {count} = this.state
    const index = this.selectedNum.selectedIndex
    const num = parseInt(this.selectedNum.options[index].value)
    setTimeout(() => {
      this.setState({count: count+num})
    }, 1000);
  }

  render() {
    return (
      <div>
        <h2>当前求和为：{this.state.count}</h2>
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
