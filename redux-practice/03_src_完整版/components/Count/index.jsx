import React, { Component } from 'react'
import store from '../../redux/store'
import {createIncrementAction,createDecrementAction} from '../../redux/count_action'

export default class Count extends Component {

  // 因为count中的值已经交给store维护了
  // state = {
  //   count: 0
  // }

  increment = () => {
    const index = this.selectedNum.selectedIndex
    const num = parseInt(this.selectedNum.options[index].value)
    store.dispatch(createIncrementAction(num))

  }
  decrement = () => {
    const index = this.selectedNum.selectedIndex
    const num = parseInt(this.selectedNum.options[index].value)
    store.dispatch(createDecrementAction(num))
  }
  incrementIfOdd = () => {
    const index = this.selectedNum.selectedIndex
    const num = parseInt(this.selectedNum.options[index].value)
    const count = store.getState()
    if(count%2 !== 0) {
      store.dispatch(createIncrementAction(num))
    }
    
  }
  incrementAsync = () => {
    const index = this.selectedNum.selectedIndex
    const num = parseInt(this.selectedNum.options[index].value)
    setTimeout(() => {
      store.dispatch(createIncrementAction(num))
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
